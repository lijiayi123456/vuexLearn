<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1> {{ $store.state.name}}</h1>
    <button @click="add">点击获取state</button>
    <h1 >{{ $store.state.count}}</h1>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    add() {
      console.log(this.$store.state.name);
      this.$store.commit('increment');  //调用mutatios中的方法

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
