<template>
  <div>
    <h1>{{ message }}</h1>
    <main>
      <RouterView />
    </main>
  </div>

</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, 我的第一个vue3 项目!'
    }
  },
  components: {

  }
}
</script>

<style>
h1 {
  color: blue;
  text-align: center;
}
</style>