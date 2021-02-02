<template>
  <div style="width: 100px; margin: auto; padding-top: 50px;">
    
    <router-link to="/" class="link">HomePage</router-link>
    <hr>
    <router-link to="/UsersPage" class="link">UsersPage</router-link>
    
    <router-view class="link2"></router-view>
  </div>
</template>

<script>
export default {
  //<router-view></router-view>はURLの内容によって
  //HomePage.vueなどの動的コンポーネントを表す
}
</script>

<style scoped>
.link {
  color:green
}
.link2 {
  color:purple
}
</style>