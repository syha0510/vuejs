<template>
  <div class="hello">
    <h1 v-if="1 < 2">Số 2 lớn hơn số 1</h1>

    <div v-if="gender==='nam'">
    Giới tính nam
    </div>
    <div v-else-if="gender==='nu'">
    Giới tính nữ
    </div>
    <div v-else>
      Giới tính không xác định
    </div>
    
    <h1 v-show="2<1">số 2 lớn hơn 1 -v-show</h1>

    <div v-for="(product,index) in products" :key="index">
        <div v-if="product.quantity<=10">
          <p>{{ index }}</p>
          <p>{{ product.id }}</p>
          <p>{{ product.name }}</p>
          <p>{{ product.price }}</p>
          <p>{{ product.quantity }}</p>
        </div>
        <hr>
    </div>

    <p>{{  }}</p>
    <p>number + a </p>
    <p>number + b </p>
    

    <button @click="addA()">tang a</button>
    <button @click="addB()">tang b</button>

    <input type="text">
    <!-- <button :disable="isButtonDisable">save</button> -->
    <hr>
    <!-- thực hành -->
    <div class="thuchanh" :style="bg_color">
      <input v-model="bg" type="text" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  number: 0,
    a:1,
    b:2,
  
  data()
  {
    return{
      gender:'nam',
      products:[
        {
          id:1,
          name:"Iphone 13",
          price:100000,
          quantity:10
        },
        {
          id:2,
          name:"Iphone 13 new",
          price:200000,
          quantity:20
        },
        {
          id:1,
          name:"Iphone 13 old",
          price:300000,
          quantity:3
        }
      ]
      ,
     
     bg:'',
     bg_color:'background-color:white',
    }
    
  },
  computed:{
    addA(){
      console.log('addA run')
      return this.a + this.number;
    },
    addB()
    {
      console.log('addB run')
      return this.b + this.number;
    }
  },
  watch:
  {
    bg (value)
    {
      if (value<=10)
      this.bg_color='background-color:red';
      else(11<=value && value <=20 )
      this.bg_color='background-color:yellow';
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.thuchanh
{
  width: 300px;
  height:300px;
  border: 1px solid black;
}

h3 {
  margin: 40px 0 0;
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
</style>
