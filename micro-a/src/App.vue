<template>
  <div id="vue">
    <router-view />
  </div>
</template>

<style>
#vue {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#vue-nav {
  padding: 30px;
}

#vue-nav a {
  font-weight: bold;
  color: #2c3e50;
}

#vue-nav a.router-link-exact-active {
  color: #42b983;
}
</style>
