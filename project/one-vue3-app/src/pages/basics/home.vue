<template>
    <div>
        <h1>模版语法</h1>
        <div class="homeObj">
            <div class="coust_one"><el-input v-model="message" style="width: 240px" placeholder="Please input" /></div>
            <span>输入框的值：{{ message }}</span>
        </div>

        <h1>响应式基础</h1>
        <h2>ref用法</h2>
        <div>
            计数器：
            <span class="count_sty_one">
                <el-button type="primary" @click="handlePlus">加</el-button>
            </span>
            <span class="count_sty_one">初始值：{{ count }}</span>
            <span class="count_sty_one" @click="handleSubtract"><el-button type="success">减</el-button></span>
            <span class="count_sty_one"><el-button type="info" @click="handleZero">归零</el-button></span>
        </div>
        <hr>

        <h2>reactive用法</h2>
        <div>个人信息介绍</div>
        <p>我叫{{ personalObj.name }},性别：{{ personalObj.sex }}，年龄：{{ personalObj.age }}</p>
        <el-button @click="handleClick">修改信息</el-button>
        <hr>

        <h1>计算属性</h1>
        <div>
            <div>
                姓：{{ per.firstName }}
            </div>
            <div>
                名：{{ per.lastName }}
            </div>
            <div>
                加起来：{{ per.fullName }}
            </div>
        </div>



    </div>
</template>

<script>
import { reactive, ref, computed } from 'vue';
export default {
    name: 'basicsHome',
    // `setup` 是一个特殊的钩子，专门用于组合式 API。
    setup() {
        const message = ref('');

        const count = ref(0);

        let per = reactive({
            firstName: "Nan",
            lastName: "Chen",
        });
        per.fullName = computed(() => {
            return per.firstName + "++" + per.lastName;
        });

        const handlePlus = () => {
            count.value += 1;
        }

        const handleSubtract = () => {
            count.value -= 1;
        }

        const handleZero = () => {
            count.value = 0;
        }

        const personalObj = reactive({
            name: '张三',
            age: 18,
            sex: '男',
        })
        const handleClick = () => {
            // console.log(personalObj.age);
            personalObj.name = '李四';
            personalObj.age = 21;
        }



        // 将 ref 暴露给模板
        return {
            count,
            message,
            personalObj,
            per,

            handlePlus,
            handleSubtract,
            handleZero,

            handleClick,

        }
    }
}



</script>

<style scoped>

h1 {
    text-align: center;
}

.homeObj {
    margin: 20px;
    text-align: center;
}

.coust_one {
    display: inline-block;
    margin-right: 10px;
}

.count_sty_one {
    margin-right: 10px;
}
</style>
