<template>
    <BaseLayout>

        <template v-slot:header>
            <el-carousel height="200px">
                <el-carousel-item v-for="item in banners" :key="item">
                    <div class="img-banner" :style="{ backgroundImage: 'url(' + item + ')' }"></div>
                </el-carousel-item>
            </el-carousel>
        </template>

        <template v-slot:content>
            <el-row :gutter="20" style="margin:0 !important">
                <el-col :span="6" style="padding:0 !important">
                    <div class="grid-content bg-purple">
                        <img :src="images[0]" class="image-qc" >
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <p class="menu-content">Trang chủ / Văn hóa / Áo da hiện đại</p>
                        <img class="image-content" :src="images[1]" >
                        <p class="text-content">            
                            Xu hướng áo da với những chi tiết phồng nhẹ bắt đầu hồi sinh trên sàn diễn với Bộ sưu tập mùa xuân 2022 của Marrine Serre, 
                            nơi các người mẫu bước đi trong những chiếc áo da đầy huyền bí.Chet Lo cũng diện áo da  trong bộ sưu tập mùa xuân năm 2022 của anh ấy và Dua Lipa được phát hiện mặc chiếc áo da màu đen 
                            của Chet Lo.Xu hướng mới thực sự rất huyền bí và cá tính từ quá khứ, hoàn hảo để tạo nên một tuyên bố thời trang trong mùa hè này.                            
                        </p>
                    </div>
                </el-col>
                <el-col :span="6" style="padding:0 !important">
                    <div class="grid-content bg-purple">
                        <img :src="images[2]" class="image-qc" alt="">
                    </div>
                </el-col>
            </el-row>
        </template>
    </BaseLayout>
</template>

<script>
import BaseLayout from './BaseLayout.vue'
export default {
    components: {
        BaseLayout,
    },
    data() {
        return {
            banners: [
                require('../../../assets/images/mtp1.jpg'),
                require('../../../assets/images/mtp2.jpg'),
                require('../../../assets/images/mtp3.jpg'),
            ],
            images: [
                require('../../../assets/images/anhqc2.jpg'),
                require('../../../assets/images/anhqc3.jpg'),
                require('../../../assets/images/anhqc1.jpg'),
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
$colorText:#9a939d;
.img-banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
    background-size: cover;
}
.image-qc {
    width: 100%;
    height: 680px;
}
.menu-content
{
    color: #9a939d;
    margin: 2% 0 3% 0;
}
.text-content
{
    color:$colorText;
    margin-top: 3%;
    text-align: left;
    color: black;
}
.image-content {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
}
</style>