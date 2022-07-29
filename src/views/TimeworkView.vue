<template>
    <BaseLayout>
        <template v-slot:title>
            Quản lý lịch làm việc
        </template>
        <template v-slot:main>
            <el-calendar v-model="value">
            </el-calendar>
        </template>
    </BaseLayout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue';
export default {
    components: { BaseLayout },
    data() {
      return {
        value: new Date()
      }
    },
}
</script>

<style lang="scss" scoped>

</style>