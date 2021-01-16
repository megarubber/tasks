<template>
    <div class="task" @click="myColor = 'aqua'" :style="[{backgroundColor: myColor}]">
        {{ taskMessage }}
    </div>
</template>

<script>

import eventBus from '@/eventBus'
export default {
    props: {
        taskMessage: String
    },
    data() {
        return {
            myColor: 'red',
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
</style>