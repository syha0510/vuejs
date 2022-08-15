<template>
    <BaseLayout>
        <template v-slot:title>
            Quản lý hóa đơn
        </template>

        <template v-slot:main>
            <el-main>
                <el-label>Quản lý hóa đơn <i class="el-icon-edit"></i></el-label>
                <el-table :data="tableData" border style="width: 100%;margin-top: 20px;">
                    <el-table-column prop="date" label="Date" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="Name" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="Address">
                    </el-table-column>
                </el-table>
                <el-pagination background layout="total,prev, pager, next, jumper" :total="50" :page-size="1"
                    @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    style="text-align: right;margin-top: 30px;">
                </el-pagination>
            </el-main>
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
        const item = {
            date: '2001-10-05',
            name: 'SyHa',
            address: 'Đong Anh'
        };
        return {
            tableData: Array(4).fill(item)
        }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`${val} items per page`);
        },
        handleCurrentChange(val) {
            console.log(`current page: ${val}`);
        }
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
</style> 