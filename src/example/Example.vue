<template>
  <vue-lazy-dom @domload="sanmu" :haveData="havaData" :domRef="domRef">
    <div class="sanmu">sanmu</div>
  </vue-lazy-dom>
</template>

<script>
export default {
  data() {
    return {
      havaData: false,
      domRef: "domRef", // 必传
    };
  },
  methods: {
    sanmu(){
      // 数据加载成功
      consolo.log('异步加载数据成功')
      this.havaData = true
    }
  }
};
</script>  

<style scoped>
.sanmu {
  width: 100px;
  height: 100px;
  background-color: rosybrown;
  margin: 0 auto;
}
</style>