<template>
    <div style="margin-top: 30px;">
        <h2 style="margin-bottom: 30px;">Danh sách sản phẩm</h2>
        <div class="content">
            <el-button class="add" type="success" @click="centerDialogVisible = true">Tạo mới <i
                    style="margin-left: 5px;" class="el-icon-plus
"></i></el-button>
            <div style="display:flex;float:right;align-items: center;">
                <el-input v-model="search" type="text" placeholder="Tìm kiếm...." style="width: 200px;" />
                <el-button type="primary" @click="getList(current_page = 1), current_page = 1" icon="el-icon-search"
                    style="margin-left:10px;"></el-button>
            </div>
            <el-table :data="products" border style="width: 100%">
                <el-table-column prop="id" label="#" width="180">
                </el-table-column>
                <el-table-column prop="name" label="Tên sản phẩm" width="200">
                </el-table-column>
                <el-table-column prop="description" label="Mô tả">
                </el-table-column>
                <el-table-column prop="price" label="Giá">
                </el-table-column>
                <el-table-column align="center" label="Hành động">
                    <template slot-scope="scope">
                        <el-button type="primary" icon="el-icon-edit" circle
                            @click="handleEdit(scope.row), updateDialog = true"></el-button>
                        <el-button icon="el-icon-delete" circle type="danger" @click="handleDelete(scope.row.id)">
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination background @current-change="HandleChange" layout="total,prev, pager, next"
                :total="parseInt(total)" :current-page="parseInt(current_page)" :page-size="parseInt(perPage)"
                style="margin-top: 20px;float: right;">
            </el-pagination>
        </div>

        <!-- createform -->
        <el-dialog title="Tạo mới sản phẩm" :visible.sync="centerDialogVisible" width="80%" center>
            <el-form :model="createProduct" ref="createProduct" label-width="200px" class="ruleForm">
                <el-form-item label="Tên sản phẩm" prop="name" :rules="[
                    { required: true, message: 'Vui lòng nhập tên sản phẩm', trigger: 'click' },
                ]">
                    <el-input type="text" v-model="createProduct.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Mô tả" prop="description" :rules="[
                    { required: true, message: 'Vui lòng nhập mô tả sản phẩm', trigger: 'click' },
                ]">
                    <el-input type="text" v-model="createProduct.description" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Giá" prop="price" :rules="[
                    { required: true, message: 'Vui lòng nhập giá sản phẩm ', trigger: 'click' },
                ]">
                    <el-input type="number" v-model.number="createProduct.price" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('createProduct')">Tạo mới</el-button>
                    <el-button @click="resetForm('createProduct')">Hủy</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>


        <!-- editForm -->
        <el-dialog title="Cập nhật sản phẩm" :visible.sync="updateDialog" width="80%" center>
            <el-form :model="formEdit" ref="formEdit" label-width="200px" class="ruleForm">
                <el-form-item label="Tên sản phẩm" prop="name" :rules="[
                    { required: true, message: 'Vui lòng nhập tên sản phẩm', trigger: 'click' },
                ]">
                    <el-input type="text" v-model="formEdit.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Mô tả" prop="description" :rules="[
                    { required: true, message: 'Mô tả sản phẩm không được để trống', trigger: 'click' },
                ]">
                    <el-input type="text" v-model="formEdit.description" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Giá" prop="price" :rules="[
                    { required: true, message: 'Giá sản phẩm không được để trống', trigger: 'click' },
                ]">
                    <el-input type="number" v-model.number="formEdit.price" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="updateForm('formEdit')">Cập nhật</el-button>
                    <el-button @click="resetForm('formEdit')">Hủy</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

    </div>

</template>

<script>
import api from '../api/index'
export default {
    data() {
        return {
            search: '',
            products: [],
            centerDialogVisible: false,
            updateDialog: false,
            createProduct: {
                name: '',
                description: '',
                price: '',
            },
            formEdit: {
                id: '',
                name: '',
                description: '',
                price: '',
            },
            error: {},
            current_page: 1,
            perPage: '',
            total: '',
        }
    },
    methods: {
        getList() {
            let data = {
                search: this.search,
                page: this.current_page
            }
            api.getListProduct(data).then(res => {
                this.products = res.data.data.data
                this.total = res.data.data.total
                this.perPage = res.data.data.per_page
            }).catch(err => {
                console.log(err)
            })
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    api.saveProduct(this.createProduct).then(res => {
                        if (res.status == 200) {
                            this.$notify({
                                showClose: 'true',
                                message: 'Thêm mới thành công',
                                type: 'success'
                            });
                            this.centerDialogVisible = false
                            this.createProduct = {
                                name: '',
                                description: '',
                                price: ''
                            }
                            this.getList()
                            this.current_page = 1
                        }
                    }).catch(err => {
                        console.log(err)
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        handleDelete(id) {
            this.$confirm('Bạn có chắc muốn xóa sản phẩm này ?', 'Xóa sản phẩm', {
                cancelButtonText: 'Hủy',
                confirmButtonText: 'OK',
                type: 'warning',
                center: true
            }).then(() => {
                api.deleteProduct(id).then(res => {
                    if (res.status == 200) {
                        this.getList()
                    }
                }).catch(err => {
                    console.log(err)
                })
                this.$notify({
                    showClose: 'true',
                    type: 'success',
                    message: 'Xóa sản phẩm thành công'
                });
            }).catch(() => {
                this.$notify({
                    showClose: 'true',
                    type: 'info',
                    message: 'Đã hủy xóa sản phẩm'
                });
            });
        },
        handleEdit(data) {
            this.checkBTN = false
            this.formEdit = {
                id: data.id,
                name: data.name,
                description: data.description,
                price: data.price,
            }
            this.updateDialog = true
        },
        updateForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    api.updateProduct(this.formEdit).then(res => {
                        if (res.status == 200) {
                            this.$notify({
                                showClose: 'true',
                                message: 'Cập nhật thành công',
                                type: 'success'
                            });
                            this.updateDialog = false
                            this.getList()
                        }
                    }).catch(err => {
                        console.log(err)
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        HandleChange(val) {
            this.current_page = val
            this.getList()
        },
    },
    mounted() {
        this.getList()
    }
}
</script>

<style lang="scss" scoped>
.content {
    width: 80%;
    margin: 0 auto;

}

.add {
    float: left;
    margin-bottom: 10px;
}

.message {
    margin-top: 3px;
    margin-bottom: 3px;
}

el-dialog {
    margin: 0 auto;
}
</style>