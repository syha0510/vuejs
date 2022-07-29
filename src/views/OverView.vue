<template>
    <BaseLayout>
        <template v-slot:title>
            Tổng quan
        </template>

        <template v-slot:main>
            <div class="demo-image__lazy">
                <el-image style="width:400px;height:220px;margin:10px;" v-for="url in urls" :key="url" :src="url" lazy></el-image>
            </div>
        </template>

    </BaseLayout>

</template>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
export default {
  components: {
    BaseLayout,

},
data() {
      return {
        urls: [
          'https://9mobi.vn/cf/images/2015/03/nkk/hinh-anh-dep-1.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjt9gp6CUki0VAkdk_Q20y0cW3IZTNLMfTybZ5F1dd_T4-Ya3paWTYdGD1zv5P1vDwx2c&usqp=CAU',
          'https://media.vov.vn/sites/default/files/styles/large/public/2021-07/a1_6.jpg ',
        'https://viet-phap.vn/wp-content/uploads/2020/04/Thap-Eiffel-la-bieu-tuong-cua-nuoc-phap.jpg'
        ]
      }
    }
}
</script>

<style lang="scss" scoped>

</style>