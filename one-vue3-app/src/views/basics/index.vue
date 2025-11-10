<template>
  <div>
    <h1>基础</h1>

    <div>
      <el-button @click="handleToNextPage('porject')">项目目录结构</el-button>
      <el-button type="primary">基础知识点</el-button>
      <el-button type="success">Success</el-button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "basic-index",
  setup() {
    const router = useRouter();

    const handleToNextPage = () => {
      router.push("/basics/project");
    };

    return {
      handleToNextPage,
    };
  },
};
</script>
