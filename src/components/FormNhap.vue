<template>
<div>
    <div class="chung">
    <div class="nhap">
        <h4>Nhập tiêu đề</h4>
        <input v-model="title" class="onhap" type="text">
        <h4>Nhập nội dung</h4>
        <textarea v-model="content" name="" id="" cols="32" rows="10"></textarea>
    </div>
    <div class="xuat">
        <h2>{{ title }}</h2>
        <p v-html="content"></p>
    </div>

</div>

</div>

</template>
<script>
export default {
  name: 'FormNhap',
  data (){
    return{
        title:'',
        content:'',
    }
  },
}
</script>

<style lang="scss">
.chung
{
    width: 100%;
    height: 450px;
    margin-top: 40px;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;

    .nhap
    {
        width:30%;
        margin: 0 auto;
        height: 350px;
        border: 1px solid black;
        margin-top: 30px;
    }
        .onhap
        {
            width: 250px;
            height: 30px;

        }
        h4
        {
            padding-right: 155px;
        }
        .xuat
        {
            width: 50%;
            height: 350px;
            margin: 0 auto;
            border: 1px solid black;
            margin-top: 30px;
        }

}
</style>