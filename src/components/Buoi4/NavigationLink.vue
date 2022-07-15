<template>
    
    <a v-bind:href="url" class="nav-link">
        <slot :data="{}"></slot>
    </a>  

</template>

<script>
export default {
  name: 'NavigationLink',
  data (){
    return{
        url:'https://www.facebook.com/'
    }
  },
}
</script>

<style lang="scss" scoped>

</style>