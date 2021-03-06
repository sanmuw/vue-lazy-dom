# vue-lazy-dom

> 一个懒加载 dom 的 vue 组件

## Install
```
npm install --save vue-lazy-dom
```

## Usage
``` javascript

import vueLazyDom from 'vue-lazy-dom'

Vue.use(vueLazyDom)
```

## Example
```javascript

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

```

## parameter

 | 参数  | 是否必传  | 类型 | 说明 |
 | ---- | ----- | ------ |  ------ |
 | domRef | 是 | string | 标签的ref |
 | haveData |  否 | boolean | 是否有数据,来控制无效反复加载问题 |
 | callbackData |  否 | object | 回调函数的参数 |
 | moment | 否 | boolean | 控制初始化会在加载 |

 | 事件  | 是否必传  | 类型 | 说明 |
 | ---- | ----- | ------ | ------ |
 | domload | - | Function(回调) | 回调函数 |
