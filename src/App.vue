<template>
  <div id="app">  
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <LoginForm/> -->
    <GioHang/>
    <GioHang2/>
    <!-- <FormNhap/>
    <MayTinh/>
    <KienThucb1/> -->

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import LoginForm from './components/Login.vue'
import GioHang from './components/Buoi2/GioHang.vue'
import GioHang2 from './components/Buoi2/GioHang2.vue'
// import FormNhap from './components/FormNhap.vue'
// import MayTinh from './components/MayTinh.vue'
// import KienThucb1 from './components/KienThucb1.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // LoginForm,
    GioHang,
    GioHang2
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
