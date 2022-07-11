<template>
    <div class="container">
    <LoginForm @handleEmitData="handleEmitData" />
    <LoginMessage :email="email" :password="password" />
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue'
import LoginMessage from './LoginMessage.vue'
export default 
{
    name:'LoginNhap',
    components:{
        LoginForm,
        LoginMessage
    },
    data(){
      return{
        email:'',
        password:'',
      }
    },
    methods:{
      handleEmitData(data){
        this.email =data.email,
        this.password= data.password
      }
    }
   
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;    
  }
</style>