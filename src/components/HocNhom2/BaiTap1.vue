<template>
<div class="dangki">
    <form action="action_page.php" @submit.prevent="save()">
  <div class="container">
    <h1>Đăng kí</h1>
    <hr>

        <input type="text" placeholder="Nhập email " name="email" id="email" v-model="info.email"> 
        <div style="color: red; margin-bottom: 15px; margin-right: 87%;width: 15%;" class="invalid-feedback" v-if="erros.email" @blur="validate()">{{ erros.email }}</div>

        <input type="text" placeholder="Nhập số điện thoại" name="number" id="number" v-model="info.number" >
         <div style="color: red; margin-bottom: 15px; margin-right: 87%;width: 19%;" class="invalid-feedback" v-if="erros.number" @blur="validate()">{{ erros.number }}</div> 

        <input type="password" placeholder="Nhập mật khẩu" name="psw" id="psw" v-model="info.psw" >
         <div style="color: red; margin-bottom: 15px; margin-right: 87%;width: 18%;" class="invalid-feedback" v-if="erros.psw" @blur="validate()">{{ erros.psw }}</div>

        <input type="password" placeholder="Nhập lại mật khẩu" name="psw-repeat" id="psw-repeat" v-model="info.pswrepeat">
         <div style="color: red; margin-bottom: 15px; margin-right: 87%;width: 19%;" class="invalid-feedback" v-if="erros.pswrepeat" @blur="validate()">{{ erros.pswrepeat }}</div>

    
    <hr>

    <button type="submit" class="dangki">Đăng kí</button>
  </div>

  
</form>
</div>
</template>

<script>
export default {
    name:'BaiTap1',
    data()
    {
      return{
        erros:{
            email:'',
            number:'',
            psw:'',
            pswrepeat:''
        },
        info:{
            email:'',
            number:'',
            psw:'',
            pswrepeat:''          
        }
      }
    },
    methods:{
        validate(){
            let isValid=true
            this.erros={
                email:'',
                number:'',
                psw:''
            }

            if(!this.info.email) {
                this.erros.email='Vui lòng nhập email'
                isValid=false
            }
            
            if(!this.info.number){
                this.erros.number='Vui lòng nhập số điện thoại'
                isValid=false
            }else if(!this.isNumber(this.info.number)){
                this.erros.number='Điện thoại phải ở dạng số'
                isValid=false
            }
            
            if(!this.info.psw){
                this.erros.psw='Vui lòng nhập mật khẩu'
                isValid=false
            }
            
             if(!this.info.psw){
                 this.erros.pswrepeat='Vui lòng nhập lại mật khẩu'
                 isValid=false
             }

             return isValid
           
        },
        isNumber(value){
            return /^\d*$/.test(value)
        },
        save()
        {
           if (this.validate()){
            alert('Đăng kí thành công')
           }

        }

    }
}
</script>

<style lang="scss" scoped>
.dangki{
    width: 100%;
    margin: 0 auto;
    padding: 0;
    border: 1px solid black;

    * {box-sizing: border-box}

            .container {
            padding: 16px;
            }

            input[type=text], input[type=password],input[type=number] {
            width: 100%;
            padding: 15px;
            margin: 5px 0 22px 0;
            display: inline-block;
            border: 1px solid #f1f1f1 ;
            background: #f1f1f1;
            border-radius: 50px  ;
            }

            input[type=text]:focus, input[type=password]:focus ,input[type=number]:focus {
            border: 1px solid blue;
            outline: none;
            }


            hr {
            border: 1px solid #f1f1f1;
            margin-bottom: 25px;
            }


            .dangki {
            background-color: blue;
            color: white;
            padding: 16px 20px;
            margin: 8px 0;
            border: 1px solid blue;
            cursor: pointer;
            width: 100%;
            opacity: 0.9;
            border-radius: 50px;
            }

            .dangki:hover {
            opacity:1;
            }

            a {
            color: dodgerblue;
            }

            label
            {
                font-weight: bold;
            }

            .chua1{
                display: flex;
                justify-content: space-between;
            }
            .chua2{
                display: flex;
                justify-content: space-between;
            }


}
</style>