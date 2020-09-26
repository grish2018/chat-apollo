<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  font-family: Roboto;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
