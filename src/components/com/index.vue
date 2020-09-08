<template>
  <div>
    <baidu-map
      NavigationControlType="BMAP_NAVIGATION_CONTROL_LARGE"
      Animation="BMAP_ANIMATION_DROP"
      MapType="BMAP_SATELLITE_MAP"
      class="map"
      :auto-resize="true"
      :dragging="dragging"
      :pinch-to-zoom="true"
      @click="mapCLick"
      @resize="mapResize"
      :center="center"
      @rightclick="rightclick"
      @rightdblclick="dbclick"
      :zoom="15"
      @ready="handler"
      :scroll-wheel-zoom="true"
    ></baidu-map>
  </div>
</template>

<script>
// let a = null;
// let b = null;
export default {
  components: {},
  data() {
    return {
      dragging: true,

      center: {
        lng: 116.404,
        lat: 39.915,
      },
    };
  },
  created() {
    this.rightclick();
    this.dbclick();
    this.mapCLick();
  },
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    handler({ BMap, map }) {
      // (a = BMap), (b = map);
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
    },
    rightclick(event) {
      console.log("右键单击", event);
    },
    dbclick(e) {
      console.log("右键双击", e);
    },
    mapCLick(type, target, point, pixel, overlay) {
      console.log("mapclick", type, target, point, pixel, overlay);
    },
  },
};
</script>

<style>
.map {
  height: 400px;
  width: 100%;
  margin: auto;
}
</style>
