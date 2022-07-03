<template>
<div>
    <!-- <button @click="handleReverse()">Click</button> -->
</div>
</template>

<script>
export default 
{
  name: 'KienThucb1',
  msg:'hello cac ban',
  data()
  {
    return{
        array_1:[1,2,3,4],
        array_2:[5,6,7,8],
        array_3:[10,11,12,13],

        words:
        [
            'hello',
            'xuanbui',
            'xepxuanbui',
            'syha'
        ],
    }
  },
  methods:{
    handleJoin(){
        let arr = ["a","b","c","d","e"]
        console.log(arr.join('-'))
    },
    handleConCat(){
        // noi2mang
        let result = this.array_1.concat(this.array_2)
        // noi nhieu mang
        let resultMultiple = this.array_1.concat(this.array_2,this.array_3)

        console.log(result)
        console.log(resultMultiple)
    },
    handleFilter(){
        // b1
        let result = this.words.filter(words => words.length>3)
        // b2 
        let result_1 =this.words.filter(function(word){
            return word.length>6
        })
        //  tra ve ko thoa man
        let resultEmpty = this.words.filter(words => words.length>15)
        console.log(result)
        console.log(result_1)
        console.log(resultEmpty)
    },
    handleFind()
    {
        let result = this.array_1.find(el =>el>2)

        console.log(result)
    },
    handleIncludes()
    {
        let result = this.array_1.includes(3)
        console.log(result)
    },
    // xoa phan tu cuoi cung trong mang
    handlePop()
    {
        this.words.pop()
        console.log(this.words)
    },
    // xoa phan tu dau tien
    handleShift()
    {
        this.words.shift()
        console.log(this.words)
    },
    // them vao cuoi mang
    handlePush()
    {
        this.words.push('phan tu 1')
        console.log(this.words)
    },
    // them vao dau mang
    handleUnshift()
    {
        this.words.unshift('phan tu 1')
        console.log(this.words)
    },
    // dao nguoc phan tu trong mang
    handleReverse()
    {
        this.words.reverse()
        console.log(this.words)
    },

  },

}
</script>

<style lang="scss" scoped>
button
{
    margin-top: 30px;
    width: 100px;
    height: 100px;
    background-color: aqua;
    color: white;
    border: none;
    
}
</style>