<template>
  <div id="app">
    <Form />
    <SwMsgbox />
  </div>
</template>

<script>
import Form from './components/form/index.vue'
import SwMsgbox from './components/messageBox/index';

export default {
  name: 'App',
  components: {
    Form,
    SwMsgbox
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
