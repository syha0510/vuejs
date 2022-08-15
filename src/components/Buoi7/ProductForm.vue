<template>
        <div class="ProductForm">
            <h2>Sản phẩm</h2>
            <label for="">Tên sản phẩm <span>(*)</span></label>
            <input type="text" placeholder="Nhập tên sản phẩm" v-model="listProduct2.name">
            <p v-if="error.name">{{ error.name }}</p>
            <label for="">Đơn giá <span>(*)</span></label>
            <input type="number" placeholder="Nhập giá sản phẩm" v-model="listProduct2.price" >
            <p v-if="error.price">{{ error.price }}</p>
            <label for="">Số lượng <span>(*)</span></label>
            <input type="number" placeholder="Nhập số lượng sản phẩm" v-model="listProduct2.quantity">
            <p v-if="error.quantity">{{ error.quantity }}</p>
            <div class="btn">
                <button @click="handleProducts()">
                    {{ checkBtn == true ? 'Tạo mới':'Cập nhật'}}
                </button>
                <button @click="resetForm()">Hủy</button>
            </div>
        </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
    export default {
        name:'ProductForm',
        data() {
            return {
                
            }
        },
        computed: {
            ...mapState([
                'listProduct2',
                'checkBtn',
                'error',
            ])
        },
        methods: {
            ...mapMutations([
                'handlePro',
                'validateForm',
                'reset'
            ]),
            handleProducts(){
                if(!this.listProduct2.name || !this.listProduct2.price || !this.listProduct2.quantity){
                    this.validate()
                }else{
                    this.handlePro()
                }
            },
            validate(){
                 if(!this.listProduct2.name){
                    this.error.name = 'Tên sản phẩm không được để trống'     
                }
                if(!this.listProduct2.price){
                    this.error.price = 'Giá sản phẩm không được để trống'                   
                }
                if(!this.listProduct2.quantity){
                    this.error.quantity = 'Số lượng sản phẩm không được để trống'
                }
            },
            resetForm(){
                this.reset()
            },
            
        },
       
    }
</script>

<style lang="scss" scoped>
   .ProductForm{
            padding: 20px;
            width: 38%;
            border: 0.5px solid black;
            h2 {
                text-align: center;
                color: rgb(19, 137, 241);
            }
            label{
                display: block;
                text-align: left;
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 5px;
                margin-top: 10px;
                span{
                    color: red;
                }
            }
            input{
                width: 100%;
                height: 50px;
                margin: 10px 0;
                outline: none;
                font-size: 16px;
                padding-left: 10px;
            }
            p{
                color: red;
                text-align: left;
                font-size: 15px;
            }
            .btn{
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                width: 40%;
                float: right;
                margin-top: 40px;
                button{
                    width: 100px;
                    height: 45px;
                    border: 0;
                    border-radius: 5px;
                    font-size: 15px;
                    margin-left: 10px;
                }
                button:nth-child(1){
                    background-color:rgb(19, 137, 241) ;
                    color: white;
                }
            }
        }
</style>