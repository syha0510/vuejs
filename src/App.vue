<template>
  <div id="app">  
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <LoginForm/>  -->
     <!-- <GioHang/>
    <GioHang2/>
    <BaiTap1/>
     <FormNhap/>
    <MayTinh/>
    <KienThucb1/>  -->
    <!-- <LoginNhap/> -->
    <!-- <TodoList/> -->
    <ExerciseProduct/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import LoginForm from './components/Login.vue'
// import GioHang from './components/Buoi2/GioHang.vue'
// import GioHang2 from './components/Buoi2/GioHang2.vue'
// import BaiTap1 from './components/HocNhom2/BaiTap1.vue'
// import FormNhap from './components/FormNhap.vue'
// import MayTinh from './components/MayTinh.vue'
// import KienThucb1 from './components/KienThucb1.vue'
// import LoginNhap from './components/Buoi3/LoginNhap.vue'

// import TodoList from './components/BTBuoi3/TodoList.vue'
import ExerciseProduct from './components/BTBuoi3/ExerciseProduct.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // LoginForm,
    // GioHang,
    // GioHang2,
    // BaiTap1
    // LoginNhap,
    // TodoList,
    ExerciseProduct
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
