<template>
  <div id="portal">
    <el-container>
      <el-header>
        <div id="nav">
          <a @click="goto('Home', '/portal/')">Home</a> | 
          <a @click="goto('micro-a project Home', '/vue/')">micro-a project Home</a> | 
          <a @click="goto('micro-a project About', '/vue/about')">micro-a project About</a> |
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
  props: ['appContent'],
  methods: {
    goto(title, href) {
      window.history.pushState({}, title, href);
    }
  }
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
