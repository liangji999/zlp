<template>
  <div class="login_container">
      <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
.login_container{
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,#ccc,#105763)
}
.login_container .box{
    width: 400px;
    height: 250px;
    box-shadow: 0 0 10px #eee;
    
}
</style>
