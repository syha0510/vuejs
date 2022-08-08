<template>
    <div class="hello">
        Learn vuex2- giá trị count : {{ count }} 
    </div>

</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'LearnVuex2',
    computed:{
        ...mapState([
            'count'
        ])
    },
}
</script>

<style lang="scss">


</style>