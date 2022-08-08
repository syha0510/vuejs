<template>
    <div class="hello">
        Learn vuex- giá trị count : {{ count }} 

        <!-- <br>{{ doneTodos }}
        <br>{{ $store.getters.getTodoById(1) }} -->
        <button type="submit" @click="changecount()">change count</button>
    </div>

</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
    name: 'LearnVuex',
    computed:{
        ...mapState([
            'count'
        ]),
        ...mapGetters([
            'doneTodos'
        ]),
    },
    methods:{
        ...mapMutations([
            'increment'
        ]),
        changecount(){
            let input = { number: 1,name: 'zent'};
            this.increment(input);
        }

    }
    
}
</script>

<style lang="scss">


</style>