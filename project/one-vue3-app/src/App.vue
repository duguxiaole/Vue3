<template>
  <div>
    <h1>{{ message }}</h1>
    <hello-runoob></hello-runoob>
  </div>
</template>

<script>
import HelloRunoob from './components/HelloRunoob.vue'
export default {
  data() {
    return {
      message: 'Hello, RUNOOB!'
    }
  },
  components: {
    HelloRunoob,
  }
}
</script>

<style>
h1 {
  color: blue;
}
</style>