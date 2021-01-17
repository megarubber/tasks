<template>
    <div class="task" @click="myColor = 'aqua'" :style="[{backgroundColor: myColor}]">
        {{ taskMessage }}
        <span @click="destroyTask()">X</span>
    </div>
</template>

<script>

import eventBus from '@/eventBus'
export default {
    props: {
        taskMessage: String,
        option: Boolean
    },
    data() {
        return {
            myColor: 'red',
        }
    },
    methods: {
        destroyTask() {
            this.$emit('whenDestroy', this.option);
        }
    }
}
</script>

<style scoped>
    .task {
        border-radius: 25px;
        margin: 50px;
        width: 300px;
        height: 150px;
        background-color: red;
        font-size: 20px;
        padding: 25px;
    }
    span {
        margin-left: 280px;
    }
</style>