<template>
        <div class="cart">
            <h2>Giỏ hàng</h2>
            <div class="list-cart">
                <h3 v-if="carts == ''">Không có sản phẩm trong giỏ hàng</h3>
                <table >
                        <tr v-for="cart in carts" :key="cart.id">
                            <td>
                                <div>
                                    <img v-if="cart.image" :src="cart.image" alt="">
                                    <img  v-else :src="nullImage" alt="">
                                    <div>
                                        <p>{{ formatName(cart.name) }}</p>
                                        <h4>{{ formatMoney(cart.price) }}</h4>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <input type="number" min="1" v-model="cart.quantity"> 
                            </td>
                            <td><button @click="deleteCart(cart.id)">Xóa</button></td>
                        </tr>
                </table>
            </div>
            <h2 class="tong">Tổng tiền: {{ formatMoney(total) }}</h2>
    </div>
</template>

<script>
import {   mapGetters, mapMutations, mapState } from 'vuex';
import { formatMoney } from '@/helper/formatMoney';
import { formatName } from '@/helper/formatName';
    export default {
        name:'CartProduct',
        data() {
            return {
                
            };
        },
        methods:{
            formatMoney,
            formatName,
            ...mapMutations([
                'removeCart',
            ]),
            deleteCart(id){
                this.removeCart(id)
            },
        },
        computed: {
            ...mapState([
                'carts',
                'nullImage'
            ]),
            ...mapGetters([
                'total'
            ])
        },
        mounted(){
            
        }
    }
</script>

<style lang="scss" scoped>
  .cart{
            width: 40%;
            height: 549px;
            border: 1px solid  gray;
            h2{
                text-align: left;
                margin-left: 30px;
                margin-top: 10px;
            }
            .tong{
                text-align: right;
                margin-right: 70px;
                color: red;
            }
            .list-cart{
                width: 95%;
                margin: 0 auto;
                height: 500px;
                table{
                    width: 100%;
                    tr{
                        width: 100%;
                        margin-top: 10px;
                        td{
                            div{
                                display: flex;
                                justify-content: space-between;
                                img{
                                    width: 15%;
                                }
                                div{
                                    width: 85%;
                                    display: block;
                                    p{
                                        text-align: left;
                                        font-weight: bold;
                                        font-size: 15px;
                                    }
                                    h4{
                                        margin: 0;
                                        text-align: left;
                                    }
                                }
                            }
                            input{
                                width: 100px;
                                height: 30px;
                                outline: none;
                                font-weight: bold;
                            }
                            button{    
                                border-radius: 5px;
                                width: 60px;
                                background-color: red;
                                color: white;
                                height: 30px;
                                border: 0px;
                            }
                        }
                    }
                }
                h3{
                    margin-top: 70px;
                }
            }
        }
</style>