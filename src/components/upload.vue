<template>
  <div>
    <ul class="tab">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/list">列表</router-link>
      </li>
      <li>
        <router-link to="/about">关于</router-link>
      </li>
      <li>
        <a href="#" @click="() => { this.$router.back() }">点击回退</a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  mounted() {},
  methods: {},
};
</script>

<style  >
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #666;
}
a:hover {
  text-decoration: underline;
  color: rgb(224, 19, 19);
}
.tab {
  font-size: 16px;
  box-sizing: border-box;
  display: flex;
  white-space: nowrap;
  position: fixed;
  top: 20px;
  left: 0;

  flex-flow: row nowrap;
}
.tab li {
  margin: 0 5px;
  color: #666;
  font-size: 18px;
}
</style>