<template>
    <BaseLayout>
        <template v-slot:title>
            Quản lý sản phẩm
        </template>

        <template v-slot:main>
            <el-main>
                <el-label>{{ title }} <button @click="editTitle()"><i class="el-icon-edit"></i></button></el-label>
                <table>
                <thead>
                    <th>STT</th>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Trạng thái</th>
                </thead>
                <tbody v-for="(product,index) in products" :key="index">
                    <td>{{ index+1 }}</td>
                    <td v-if="product.image != ''">
                        <img :src="product.image" alt=""><span> {{ product.name }}</span>
                    </td>
                    <td v-else>
                        <img style="width:60px;height: 60px;" :src="nullImage" alt=""><span> {{ product.name }}</span>
                    </td>
                    <td><span>{{ product.price }}</span></td>
                    <td><span>{{ product.quantity }}</span></td>
                    <td v-if="product.quantity > 0"><span style="color:green">Còn hàng</span></td>
                    <td v-else><span style="color:red">Hết hàng</span></td>
                </tbody>

            </table>
    
            </el-main>
        </template>
    </BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import { mapMutations, mapState } from 'vuex'
export default {
    components: {
        BaseLayout,
    },
    
    computed:{
        ...mapState('product',[
                'products',
                'title'
            ]),
    },
    methods: {
        handleSizeChange(val) {
            console.log(`${val} items per page`);
        },
        handleCurrentChange(val) {
            console.log(`current page: ${val}`);
        },
        ...mapMutations('product',[
            'changeTitle'
        ]),
        editTitle(){
            this.changeTitle()
        },


    },
}
</script>

<style lang="scss" scoped>
el-label{
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
    color: cadetblue;
}

 table{
        width: 100%;
        border-spacing: 0px !important;
        border: 1px solid gray;
        th{
            padding: 20px;
            background-color: white;
            border-left: 1px solid gray;
            border-bottom: 1px solid gray;
        }
        th:nth-child(1){
            border-left: 0px;
        }
        td{
            font-weight: bold;
            padding: 20px;
            border-left: 1px solid gray;
            img{
                width: 50px;
                height: 50px;
            }
            span{
                margin-left: 10px;
            }
            button{
                border: 0px;
                border-radius: 5px;
                padding: 10px;
                background-color: rgb(62, 62, 238);
                color: white;
            }
        }
        td:nth-child(1){
            border-left: 0px;
        }
        td:nth-child(2){
            text-align: center;
            display: flex;
            align-items: center;
        }
    }
    button{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: none;
        background-color: aqua;
    }
</style> 