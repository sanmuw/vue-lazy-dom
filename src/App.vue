<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <div style="width:100vw;height:100vh;"></div>
    <vue-lazy-dom @domload="sanmu" :haveData="havaData" :domRef='domRef'>
      <div class="tem">
      </div>
    </vue-lazy-dom>
    <div style="width:100vw;height:100vh;"></div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      havaData: false,
      domRef: 'domRef'
    }
  },
  methods: {
    sanmu() {
      console.log('sanmu')
      this.havaData = true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.tem {
  width: 100px;
  height: 100px;
  background-color: rosybrown;
  margin: 0 auto;
}
</style>
