<template>
  <div class="container">
    <div class="main">
      <img src="../assets/images/logoflixgo.png" alt />
      <router-view to="/form"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm"
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
  .main {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 2% 0;
    border-radius: 10px;
    z-index: 2;
    img {
      width: 50%;
      height: auto;
    }
  }
}
</style>