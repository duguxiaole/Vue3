<template>
    <div>
        <input type="text" v-model="message" />
        <p>{{ message }}</p>

        <p v-if="message">你好，vue</p>
        <p v-else>拜拜！</p>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'basicsHome',
    // `setup` 是一个特殊的钩子，专门用于组合式 API。
    setup() {
        const count = ref(0);
        const message = ref('');

        // 将 ref 暴露给模板
        return {
            count,
            message
        }
    }
}



</script>


<style scoped></style>
