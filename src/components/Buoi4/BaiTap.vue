<template>
    <div ref="change" class="container">
        <input v-model="changeColor" type="number">
    </div>
</template>

<script>
export default {
  name: 'BaiTap',
  data (){
    return{
        backGround:'background-color:white',
        changeColor:'',
    }
  },
  watch:{
    changeColor(value){
        if(value >=0 && value <=10){
            this.$refs.change.style.backgroundColor = 'gray';
        }
        if(value >=11 && value <=30){
            this.$refs.change.style.backgroundColor = 'green';
        }
        if(value >=31 && value <=50){
            this.$refs.change.style.backgroundColor = 'blue';
        }
        if(value >=51 && value <=70){
            this.$refs.change.style.backgroundColor = 'purple';
        }
        if(value >=71 && value <=90){
            this.$refs.change.style.backgroundColor = 'orange';
        }
        if(value >=90 && value <=100){
            this.$refs.change.style.backgroundColor = 'red';
        }
        if(!value){
            this.$refs.change.style.backgroundColor = 'white';
        }
        

    }
  }
}
</script>

<style lang="scss" scoped>
    .container{
        width: 500px;
        height: 500px;
        border: 2px solid black;
        background-color: white;

        input{
            width: 300px;
            height: 40px;
            border: 1px solid black;
            margin-top: 10px;

        }
    }
</style>