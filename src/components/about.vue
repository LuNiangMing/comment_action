<template>
  <div class="about">
    <ul class="list_content">
      <li class="item" v-for="(i,l) in 5" :key="l+'i'">{{ i }}</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.about {
  font-size: 18px;
  box-sizing: border-box;
}
.list_content {
  display: flex;
  flex-flow: column wrap;
}
.list_content .item {
  flex: 1;
  width: 100%;
  line-height: 200px;
  height: 200px;
  color: #fff;
  text-align: center;
}
.list_content .item:nth-child(even) {
  background: rgb(1, 33, 34);
}
.list_content .item:nth-child(odd) {
  background: rgb(8, 82, 151);
}
</style>