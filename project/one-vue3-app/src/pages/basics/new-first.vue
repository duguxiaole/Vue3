<template>
    <div id="app">
        <input type="text" v-model="message" />
        <p>{{ message }}</p>

        <p v-if="message">你好，vue</p>
        <p v-else>拜拜！</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';



let message = ref('');



</script>


<style scoped></style>
