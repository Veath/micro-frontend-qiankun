<template>
  <div id="portal">
    <el-container>
      <el-header>
        <div id="nav">
          <router-link to="/portal">Home</router-link>|
          <router-link to="/vue">micro-a</router-link>|
          <router-link to="/vue/about/123">micro-a-About</router-link>
        </div>
      </el-header>
      <el-main>
        <div v-html="appContent"></div>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: ['appContent']
};
</script>

<style lang="scss">
#portal {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
