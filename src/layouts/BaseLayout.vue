<template>
    <el-container >
        <el-aside width="300px" style="background-color: #001529;height:100vh;">
            <el-menu router :default-active="$route.name" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                background-color="#001529" text-color="#fff" active-text-color="#ffd04b" style="height:100vh;text-align: left;" >

                 <router-link class="sub-menu" to="/">
                    <el-menu-item index="home">
                    <i class="el-icon-shopping-bag-2"></i>
                    <span>Quản lý sản phẩm</span>
                    </el-menu-item>
                 </router-link>
                
                <router-link class="sub-menu" to="/overview">
                    <el-menu-item index="overview">
                    <i class="el-icon-menu"></i>
                    <span>Tổng quan</span>
                    </el-menu-item>      
                </router-link>
                  
                <router-link class="sub-menu" to="/timework">
                    <el-menu-item index="timework">
                    <i class="el-icon-s-order"></i>
                    <span>Quản lý lịch làm việc</span>
                    </el-menu-item>
                </router-link>
                
                 <router-link class="sub-menu" to="/statiscal">
                    <el-menu-item index="statiscal">
                    <i class="el-icon-pie-chart"></i>
                    <span>Báo cáo thống kê</span>
                    </el-menu-item>
                 </router-link>
                
                <!-- <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>Quản lý chi nhánh</span>
                    </template>
                    <el-menu-item-group title="Hoạt động">
                        <el-menu-item index="1-1">Sản phẩm</el-menu-item>
                        <el-menu-item index="1-2">Đơn hàng</el-menu-item>
                        <el-menu-item index="1-3">Khách hàng</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Báo cáo">
                        <el-menu-item index="1-4">Doanh thu</el-menu-item>
                        <el-menu-item index="1-5">Tồn kho</el-menu-item>
                    </el-menu-item-group>
                </el-submenu> -->
                  
                <!-- <el-menu-item index="6">
                    <i class="el-icon-setting"></i>
                    <span>Cài đặt hệ thống</span>
                </el-menu-item> -->
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="">
                <h2 style="display: inline-block;">
                    <slot name="title"></slot>
                </h2>
                <div style="display:flex">
                    <el-dropdown-item class="clearfix">
                        <i class="el-icon-message-solid"></i>
                        <el-badge class="mark" :value="12" />
                    </el-dropdown-item>

                    <el-dropdown style="display: flex !important;align-items: center;justify-content: center;">
                        <img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/288998043_3597989160437935_461868714903586141_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2DFehgAp500AX-aXWoG&_nc_ht=scontent.fhan14-1.fna&oh=00_AT8jkMZ-OJ2Ta-bdwcSHgnYWlB-5yP-TY2hajTzqkKkULA&oe=62E77C0A"
                            alt="">
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>Thông tin tài khoản</el-dropdown-item>
                            <el-dropdown-item>Đổi mật khẩu</el-dropdown-item>
                            <el-dropdown-item>Cấu hình</el-dropdown-item>
                            <router-link to="/login">
                                <el-dropdown-item id="out" style="text-decoration:none !important">Đăng xuất</el-dropdown-item>
                            </router-link>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>

            </el-header>
            <slot name="main"></slot>
        </el-container>
    </el-container>
</template>

<script>
export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    },
}
</script>

<style lang="scss" scoped>

.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.el-aside {
    color: #333;
}
.el-container{
    min-height: 600px;
    border: 1px solid #eee;
  img{
    width:40px;
    height:40px;
    margin-right:5px;
    border-radius: 50%;
    
  }
}
.sub-menu{
    text-decoration: none;
}

</style>