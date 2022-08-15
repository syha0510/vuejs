<template>
    <div class="hello">
        <div class="hello">

        </div>
    </div>

</template>

<script>
import _ from "lodash";

export default {
    name: 'LearnVuex',
    mounted(){
        this.join()
        this.last()
        this.chunk()
        this.fill()
        this.drop()
        this.sortBy()
        this.has()
        this.pick()
    },
    methods:{
        join(){

            // chen vao 1 mang
            let arr = ['a','b','c'];
            let result = _.join(arr,'*');
            console.log(result);
            }, 
        last(){
            // tra ve phan tu cuoi trong mang
            let arr=['a','b','c'];
            let result= _.last(arr);
            console.log(result);
        },
        chunk(){

            // chia mang thanh mang con theo so luong
            let arr =['a','b','c','d'];
            let result = _.chunk(arr,2);
            console.log(result);

        },
        fill(){
            let arr =['a','b','c','d'];
            let result = _.fill(arr,'*',1,3);
            console.log(result); 
        },
        drop(){ 
            let arr=['a','b','c','d'];
            let res= _.drop(arr,2);
            console.log(res);
        },
        sortBy(){ 
            let arr=[
                {'name':'a','id':'1'},
                {'name':'c','id':'2'},
                {'name':'b','id':'3'},
                {'name':'d','id':'4'},
            ];
            // let res = _.sortBy(arr,[function(x){ return x.name;}]);
            let res = _.sortBy(arr,['id','name'])
            console.log(res);
        },
        has(){
            var object={
                name:'ha',
                age:10
            }
            let res = _.has(object,'name');
            console.log(res);
        },
        pick(){
            var object={
                name:'ha',
                age:10,
                id:1,
                status:'ok',
            }
            let res = _.pick(object,['name','age']);
            console.log(res);
        },






    }
}
</script>

<style lang="scss">


</style>