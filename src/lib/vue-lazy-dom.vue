<template>
  <div :ref="domRef">
    <slot></slot>
  </div>
</template>

<script>
import { throttle } from "./throttle";
export default {
  name: "vue-lazy-dom",
  props: {
    haveData: {
      type: Boolean,
      default: false
    },
    domRef: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isLive: false,
      observer: null,
    };
  },
  mounted() {
    console.log(this.haveData)
    // 判断是否支持IntersectionObserver
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      this.observer = new IntersectionObserver((changes) => {
        for (const change of changes) {
          // console.log(change.time);
          // Timestamp when the change occurred
          // 当可视状态变化时，状态发送改变的时间戳
          // 对比时间为，实例化的时间，
          // 比如，值为1000时，表示在IntersectionObserver实例化的1秒钟之后，触发该元素的可视性变化

          // console.log(change.rootBounds);
          // Unclipped area of root
          // 根元素的矩形区域信息，即为getBoundingClientRect方法返回的值

          // console.log(change.boundingClientRect);
          // target.boundingClientRect()
          // 目标元素的矩形区域的信息

          // console.log(change.intersectionRect);
          // boundingClientRect, clipped by its containing block ancestors,
          // and intersected with rootBounds
          // 目标元素与视口（或根元素）的交叉区域的信息

          // console.log(change.intersectionRatio);
          // Ratio of intersectionRect area to boundingClientRect area
          // 目标元素的可见比例，即intersectionRect占boundingClientRect的比例，
          // 完全可见时为1，完全不可见时小于等于0

          // console.log(change.target);
          // the Element target
          // 被观察的目标元素，是一个 DOM 节点对象
          // 当前可视区域正在变化的元素
          if (!this.haveData && change.intersectionRatio > 0) {
            this.$emit("domload");
          } else {
          }
        }
      }, {});
      this.observer.observe(this.$refs[this.domRef]);

      // let io = new IntersectionObserver(this.loadList, {});
      // // 7. 在观察对象上，监听 6 中获取的对象
      // io.observe(this.$refs.dom);
    } else {
      window.addEventListener("scroll", this.scrollHandle, true);
    }
  },
  methods: {
    scrollHandle() {
      const offset = this.$refs[this.domRef].getBoundingClientRect();
      const offsetTop = offset.top;
      const offsetBottom = offset.bottom;
      const offsetHeight = offset.height;
      // console.log(offsetTop,offsetBottom,offsetHeight,window.innerHeight)
      // 进入可视区域
      if (
        !this.isLive &&
        !this.haveData &&
        window.innerHeight - offsetTop >= 0 &&
        window.innerHeight - offsetTop <= 10 &&
        offsetBottom >= 0
      ) {
        this.$emit("domload");
        this.isLive = true;
      } else if (offsetBottom < 0) {
        this.isLive = false;
      }
    },
  },
  beforeDestroy() {
    if(this.observer) {
      this.observer.disconnect();
    } else {
      window.removeEventListener("scroll", this.scrollHandle, true);
    }
  },
};
</script>

<style scoped>
</style>