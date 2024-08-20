<template>
    <div class="main_sty">
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

        <h2>reactive用法</h2>
        <div>个人信息介绍</div>
        <p>我叫{{ personalObj.name }},性别：{{ personalObj.sex }}，年龄：{{ personalObj.age }}</p>
        <el-button @click="handleClick">修改信息</el-button>
    </div>

    <div class="main_sty">
        <h1>条件渲染/列表渲染</h1>
        <el-button type="primary" @click="isShow = !isShow">天气变换</el-button>
        <div v-if="isShow">今天是个好日子</div>
        <div v-else> 下雨了</div>

        <h3>列表渲染-数组</h3>
        <div>
            <div v-for="(item, index) in pageList" :key="index">
                第{{ index + 1 }}个技术点,{{ item }}
            </div>
        </div>
        <h3>列表渲染-对象</h3>
        <div>
            <div v-for="(item, key, index) in personalObj" :key="index">第{{ index + 1 }}个属性名：{{ key }}，值：{{ item }}
            </div>
        </div>
        <h3>在 v-for 里使用范围值 </h3>
        <span v-for="n in 10" :key="n">{{ n }}</span>
        <h3>template上的 v-for</h3>
        <ul>
            <template v-for="item in items" :key="item">
                <li>{{ item.msg }}</li>
                <li class="divider" role="presentation"></li>
            </template>
        </ul>

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

    <div class="main_sty">
        <h1>watch</h1>
        <h2>基本示例</h2>
        <el-button type="primary" @click="handleValChg">修改watchNumX</el-button>
        <ul>
            <li>watchNumX的初始值：{{ watchNumX }}</li>
            <li>值变更说明：{{ watchNumMsg }}</li>
        </ul>

        <h2>监听单个ref的响应式数据</h2>
        <el-button @click="handleNumOneChg" type="success">numOne加1</el-button>
        <div>{{ numOne }}</div>

        <h2>监听ref定义的多个响应式数据</h2>
        <el-button @click="numTwo += '是个晴天，'" type="info">改变</el-button>
        <div>{{ numTwo }}</div>

        <h2>监听reactive所定义的一个响应式数据</h2>
        <el-button @click="perAObj.name += 'a01'">改变名字</el-button>
        <div>{{ perAObj.name }}</div>
        <el-button @click="perAObj.age += 1">改变年龄</el-button>
        <div>{{ perAObj.age }}</div>

        <h2> watchEffect 监听器</h2>
        <el-button @click="perBObj.name += 'hello'">改变名字</el-button>
        <div>{{ perBObj.name }}</div>
        <el-button @click="perBObj.age += 2">改变年龄</el-button>
        <div>{{ perBObj.age }}</div>
    </div>


</template>

<script setup>
import { reactive, ref, computed, watch, watchEffect } from 'vue';
const message = ref('');

const count = ref(0);

const isShow = ref(true);

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


// 
const pageList = ref(['javaScript', 'html', 'css', 'vue', 'node']);


const items = ref([
    { msg: 'Foo' },
    { msg: 'Bar' }
]);


/**
 * 监听器
 */
const watchNumX = ref(4);
const watchNumMsg = ref('');

const handleValChg = () => {
    watchNumX.value = 0
}

watch(() => watchNumX.value, (newValue, oldValue) => {
    watchNumMsg.value = `watchNumX的新值：${newValue}，watchNumX的旧值：${oldValue} `
})

// 例子1
const numOne = ref(0);
const numTwo = ref('今天是周三。');
watch([numOne, numTwo], (newValue, oldValue) => {
    console.log(`numOne and numTwo：${newValue}——————${oldValue}`);
},
    /* immediate：第一次就监听 */
    { immediate: true }
)

const handleNumOneChg = () => {
    numOne.value += 1;
}

let perAObj = reactive({
    name: '王一',
    age: 18,
})

watch(perAObj, (newValue, oldValue) => {
    console.log(`新值：${newValue}，旧值：${oldValue} `);
})

watch(() => perAObj.name, (newValue, oldValue) => {
    console.log(newValue, oldValue);
}
);

let perBObj = reactive({
    name: '王二',
    age: 20,
})

watchEffect(() => {
    console.log(`b对象：${perBObj.name}，${perBObj.age}`);
})



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

.main_sty {
    padding: 10px;
    border: 2px solid #ccc;
    margin-top: 20px;
}
</style>
