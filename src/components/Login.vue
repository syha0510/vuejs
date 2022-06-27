<template>
<div>
    <div class="container">
    <div class="loginWrap">
    <form >
            <div class="inputWrap">
        <div class="inputLabel">Họ và tên</div>
        <input v-model="input.name" type="text">
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Ngày sinh</div>
        <input v-model="input.date" type="text">
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Số điện thoại</div>
        <input v-model="input.phone" type="text">
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Link facebook</div>
        <input v-model="input.link" type="text">
      </div>
      <button  @click.prevent="save()" class="SaveButton">Lưu</button>
      <button @click.prevent='reset()' class="ClearButton">Xóa</button>
    </form>
      
    </div>
    <div class="infoWrap">
      <div class="infoLabel">
        Họ và tên :{{ output.name }}
      </div>
      <div class="infoLabel">
        Ngày sinh: {{ output.date }}
      </div>
      <div class="infoLabel">
        Số điện thoại: {{ output.phone }}
      </div>
      <div class="infoLabel">
        Link facebook: <a :href="output.link" target="_blank">{{ output.link }}</a>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'LoginForm',
    data(){
        return{
            input:{
                name:'',
                date:'',
                phone:'',
                link:'',
            },
            output:{
                name:'',
                date:'',
                phone:'',
                link:'',
            },
           
        }
    },
    methods:{
        save(){
            this.output.name=this.input.name,
            this.output.date=this.input.date,
            this.output.phone=this.input.phone,
            this.output.link=this.input.link
        },
        reset()
        {
            this.input.name="",
            this.output.name="",
            this.input.date="",
            this.output.date="",
            this.input.phone="",
            this.output.phone="",
            this.input.link="",
            this.output.link=""

        }
    },
}
</script>

<style lang="scss">
 .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;

    .loginWrap {
      background: #f5f5f5;
      border: 1px solid #6E6E6E;
      padding: 24px;
      height: 351px;
      width: 300px;

      .inputWrap {
        margin-bottom: 12px;
  
        .inputLabel {
          font-weight: bold;
          margin-bottom: 8px;
          text-align: left;
        }
    
        input {
          width: 292px;
          height: 30px;
        }
      }
  
      button {
        width: 40%;
        height: 40px;
        border-radius: 5px;
        margin-top: 20px;
        background: #0080dd;
        color: #fff;
        border: unset;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
      }
      .SaveButton{
        margin-right: 20px;
      }
      .ClearButton{
        background-color: rgb(221, 86, 86);
      }
    }

    .infoWrap {
      background: #fff;
      border: 1px solid #6E6E6E;
      padding: 24px;
      height: 351px;
      width: 350px;
      margin-left: 24px;

      .infoLabel {
        font-weight: bold;
        color: #00AAAA;
        padding-top: 10px;
      }
    }
  }

</style>