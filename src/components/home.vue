<template>
  <div class="container">
    <div class="box">
      <input
        class="input"
        @keypress.enter="enter"
        v-model="text"
        placeholder="发表你对世界的看法"
        type="text"
      />
      <a class="send" ref="btn" :class="is_compress" @click.stop="send" href="javascript:;">发布</a>
    </div>

    <div class="comment">
      <div class="item" v-for="(item,index) in list" :key="item.id">
        <div class="info">
          <img :src="item.avatar" alt />
          <span class="name">{{item.name}}</span>
        </div>
        <span class="text">
          <div class="content">
            <!--false 显示前段文本-->
            <span class="showText">{{showTextPart}}</span>
            <!--true 显示后段文本-->
            <span
              ref="hideText"
              :class="{'visi':!item.lookState&&!item.showMore}"
              class="hideText"
            >{{hideTextPart}}</span>
            <div ref="dropdown" class="dropdown" v-show="comment.length>=20">
              <span
                style="color:#f10215"
                ref="drop"
                @click.stop="getMore(item,index)"
              >{{item.showMore?'收起':'查看'}}</span>
            </div>
          </div>
        </span>
        <span class="notify_time">{{item.notifyTime}}</span>
      </div>
    </div>
  </div>
</template>

<script>
let user1 = require("@/assets/image/5.jpg");

let user2 = require("@/assets/image/6.jpg");
let user3 = require("@/assets/image/avatar.jpg");
let user4 = require("@/assets/image/city.jpg");
export default {
  name: "home",
  data() {
    return {
      text: "", //评论内容
      list: null, //全部评论内容
      user: ["蓝天白云", "新时代", "孤独的燕子", "穿天猴"],
      avatar: [],
      hideTextPart: "",
      showTextPart: "",
      lookPos: undefined,
      lookCLass: "",
      comment: "",
      up_dropdown: 0,
      unfold_dropdown: 0,
    };
  },
  created() {
    this.list = [];
    this.avatar.push(user1, user2, user3, user4);
    this.up_dropdown = 0;
    this.unfold_dropdown = 0;
    // this.lookCLass = "icon-up";
  },
  computed: {
    is_compress() {
      let _class = "";
      if (!this.text) {
        _class = "inactive";
      } else {
        _class = "active";
      }
      return _class;
    },
  },
  mounted() {},
  beforeUpdate() {
    let newList = Array.from(new Set(this.list));
    this.list = newList;
  },
  methods: {
    randomNum() {
      let ran = parseInt(Math.random() * 4 + 0);
      return ran;
    },

    enter() {
      console.log("enter");
      this.send();
    },
    send(e) {
      if (!this.text) return;

      console.log("推送评论");
      let date = new Date();
      let flag = false;
      let ran = this.randomNum();
      let _text = "";
      let format = this.text.split("");
      this.comment = format;
      console.log("format", format);
      if (format.length > 20) {
        let rmStr = format.join("").substring(20);
        console.log("rmstr", rmStr);

        let rmIndex = format.join("").indexOf(rmStr, 0);

        _text = format.splice(rmIndex, rmStr.split("").length);
        console.log(rmIndex);
        this.hideTextPart = rmStr;
      } else {
        _text = this.text;
      }
      console.log(_text, "11");
      this.showTextPart = format.join("").substring(0, 20);
      let ff = format.join("").substring(0, 20);

      //调用评论接口推送一条评论
      let comment = {
        id: date.getTime(),
        text: ff,
        name: this.user[ran],
        avatar: this.avatar[ran],
        showMore: false,
        lookState: false,
        notifyTime: date.getMonth() + 1 + "/" + date.getDate(),
      };
      this.list.push(comment);
      this.raduceValue(this.list);
    },
    raduceValue(arr) {
      console.log("arr", arr);
      let lastItem = arr[arr.length - 1];
      if (lastItem.text) {
        this.text = "";
      }
    },
    getMore(item, index) {
      console.log(item, index);
      this.list[index].lookState = !this.list[index].lookState;
      this.list[index].showMore = !this.list[index].showMore;
      // let idx = this.list.findIndex((_item, _index) => {
      //   return _item.text == item.text;
      // });
      this.dropdownStyle(this.list[index].showMore, index);

      this.textSHow(
        this.list[index].lookState,
        this.list[index].showMore,
        this.list[index].text,
        index
      );
    },
    textSHow(state, show, text, index) {
      console.log(state, show, text, index);
      let _text = "";
      //true已查看，显示剩余内容=》添加上剩余内容
      //false未查看，不显示剩余内容=》删除剩余内容
      if (!state && !show) {
        _text = this.showTextPart;
      } else {
        _text = this.showTextPart + this.hideTextPart;
      }
      this.list[index].text = _text; //展开/收起状态的评论
    },
    dropdownStyle(status, index) {
      console.log(index, "66");
      if (status) {
        console.log(this.$refs.dropdown[index], "44");
        console.log(this.$refs.hideText[index], "55");
        //查看
        this.$refs.dropdown[index].style.marginTop =
          (73 + this.$refs.hideText[index].clientHeight) * 1 + "px";
      }
      if (!status) {
        //收起
        this.$refs.dropdown[index].style.marginTop = 73 * 1 + "px";
      }
    },
  },
};
</script>

<style scoped>
@import url("../../static/iconfont/iconfont.css");
*/ {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.container {
  box-shadow: 0 0 1px 1px #333;
  margin: 80px auto;
  justify-content: center;

  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  overflow: hidden;
  box-sizing: border-box;
  width: 30%;
  font-size: 16px;
}
.box {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
}
.box .input {
  color: #333;
  height: 30px;
  white-space: nowrap;
  line-height: 30px;
  text-indent: 15px;
  width: 90%;
  border: none;
  border: 1px solid #333;
}
.box .send {
  display: block;
  width: 10%;
  background: #ccc;
  font-size: 13px;
  color: #333;
  text-align: center;
  height: 30px;
  border: none;
  border: 1px solid #ccc;
  line-height: 30px;
}
.container .comment {
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  margin-top: 20px;
}

.comment .item {
  height: 60px;
  vertical-align: bottom;
  width: 100%;

  color: #433;
  margin: 45px 0;

  text-align: left;

  align-items: center;
  display: flex;
  flex-flow: row nowrap;
}
.comment .item .info {
  display: flex;
  flex-flow: column wrap;
  width: 80px;
  justify-content: center;
  margin: 5px;
  align-items: center;
}
.comment .item .info img {
  width: 50px;
  height: 50px;
  border: 1px solid #fff;
  opacity: 0.6;
  border-radius: 50%;

  margin: 5px 0;
  order: 1;
  display: block;
}
.comment .item .info .name {
  flex: 1;
  order: 2;
  white-space: nowrap;
}
.comment .item .text {
  width: 80%;

  display: flex;
  flex-flow: column wrap;
}
.comment .item .content {
  line-height: 20px;
  display: block;
  color: #333;
  padding-left: 10px;
  width: 80%;
  white-space: pre-wrap;
  display: flex;
  position: relative;
  flex-flow: column wrap;
  height: auto;
  border-image: -webkit-linear-gradient(
    right,
    #a12333 10%,
    #fab343 20%,
    #f24345 30%,
    #ffaffd 40%,
    #fa3243 50%,
    #fad45d 60%,
    #bdff44 70%,
    #fb34 80%,
    #a12323 90%,
    #a12333
  );
}
.comment .item .showText {
  position: relative;
  top: 5px;
  word-break: break-all;
  line-height: 22px;
  width: 60%;
  word-wrap: break-word;
}
.comment .item .hideText {
  position: relative;

  letter-spacing: 2px;
  width: 60%;
  word-break: break-all;
  line-height: 22px;
  margin-top: 5px;
  word-wrap: break-word;
}

.comment .item .text .content.unfold {
  height: auto;
}
.comment .item .text .dropdown {
  text-align: right;
  width: 330.15px;
  display: flex;
  position: absolute;
  margin-top: 73px;
}
.comment .item .notify_time {
  display: inline-block;
  color: #333;
  vertical-align: middle;
}
.box .send.active {
  color: #fff;
  font-weight: 300;
  background: #a12333;
}
.box .send.inactive {
  color: #333;
  font-weight: normal;
}
.clearfix {
  clear: both;
  visibility: hidden;
}
.visi {
  visibility: hidden;
}
</style>