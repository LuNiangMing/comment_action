<template>
  <transition name="slide">
    <div class="other">
      <div class="item">
        <span class="back" @click="back">&lt;</span>
      </div>
      <div class="item input-wrapper">
        <input
          type="text"
          id="suggestId"
          name="address_detail"
          placeholder="搜索地点"
          v-model="address_detail"
          class="input_st"
        />
      </div>

      <div id="allmap" style="width:500px;height:500px"></div>
    </div>
  </transition>
</template>

<script>
let th = this;

export default {
  data() {
    return {
      center: { lng: 109.45744048529967, lat: 36.49771311230842 },
      zoom: 13,
      address_detail: null, //详细地址
      userlocation: { lng: "", lat: "" },
    };
  },
  created() {},
  mounted() {
    this.$nextTick(function () {
      this.handler();
      this.$forceUpdate();
    });
    // document.addEventListener("resize", function (e) {
    //   console.log(e);
    // });
  },
  beforeUpdate() {
    this.handler();
  },
  methods: {
    back() {
      this.$router.back();
    },

    handler() {
      let map = new BMap.Map("allmap");
      let point = new BMap.Point(121.160724, 31.173277);
      map.centerAndZoom(point, 15); //设置中心点缩放比例
      map.enableScrollWheelZoom(); //滚轮缩放

      var ac = new BMap.Autocomplete({
        //建立一个自动完成的对象
        input: "suggestId",
        location: map,
      });
      var myValue;

      ac.addEventListener("onconfirm", function (e) {
        //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue =
          _value.province +
          _value.city +
          _value.district +
          _value.street +
          _value.business;
        this.address_detail = myValue;
        setPlace();
        function setPlace() {
          map.clearOverlays(); //清除地图上所有覆盖物

          function myFun() {
            th.userlocation = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
            map.centerAndZoom(th.userlocation, 18);
            map.addOverlay(new BMap.Marker(th.userlocation)); //添加标注
          }
          var local = new BMap.LocalSearch(map, {
            //智能搜索
            onSearchComplete: myFun,
          });
          local.search(myValue);

          //测试输出坐标（指的是输入框最后确定地点的经纬度）
          map.addEventListener("click", function (e) {
            //经度
            console.log(th.userlocation.lng);
            //维度
            console.log(th.userlocation.lat);
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.back {
  display: block;
  text-align: left;
  color: coral;
  font-size: 30px;
}
.item {
  vertical-align: top;
  text-align: left;
  height: 40px;
}
.item.input-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.input_st {
  width: 80%;
  outline: none;
  padding-left: 14px;
  border: 1px solid #666;
  height: 30px;
  color: #000;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 100ms ease;
}

.slide-enter, .slide-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100%);
}
</style>
<style  scoped>
/* 地图标注圆角显示 */
/* .BMap_bubble_title {
  color: black;
  font-size: 13px;
  font-weight: bold;
  text-align: left;
} */
/* .BMap_pop div:nth-child(1) {
  border-radius: 7px 0 0 0;
}
.BMap_pop div:nth-child(3) {
  border-radius: 0 7px 0 0;
  background: #ababab;

  width: 23px;
  width: 0px;
  height: 10px;
} */
/* .BMap_pop div:nth-child(3) div {
  border-radius: 7px;
}
.BMap_pop div:nth-child(5) {
  border-radius: 0 0 0 7px;
}
.BMap_pop div:nth-child(5) div {
  border-radius: 7px;
}
.BMap_pop div:nth-child(7) {
  border-radius: 0 0 7px 0;
} */
/* .BMap_pop div:nth-child div(7) {
  border-radius: 7px;
} */
/* 
.BMap_pop > img {
  display: none;
} */
</style>