<template>
  <div id="app">  
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <LoginForm/>
    <FormNhap/>
    <MayTinh/>
    <KienThucb1/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LoginForm from './components/Login.vue'
import FormNhap from './components/FormNhap.vue'
import MayTinh from './components/MayTinh.vue'
import KienThucb1 from './components/KienThucb1.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    LoginForm,
    FormNhap,
    MayTinh,
    KienThucb1
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
