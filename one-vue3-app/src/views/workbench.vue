<template>
    <div>
      <h1>{{ message }}</h1>
      <h2>欢迎来到工作台</h2>
      

      <div>
        <el-button @click="handleToBasic">基础</el-button>
      </div>



    </div>
</template>
  
<script setup>
import { ref, } from "vue";
import { useRouter } from 'vue-router'; 

    const message = ref('Hello, 我的第一个vue3 项目!');
    const router = useRouter();

    const handleToBasic = () =>{
        router.push({
            path: '/basics'
        })
    }
  
</script>
  
<style scoped>
  h1 {
    color: blue;
    text-align: center;
  }
</style>