<template>
    <div class="input-bar">
        <input type="text" @input="getMessage">
        <button @click="includeMessage">+</button>
    </div>    
</template>

<script>

import eventBus from '@/eventBus'
export default {
    props: {
        text: Array
    },
    data() {
        return {
            message: '',
            myTasks: []
        }
    },
    methods: {
        getMessage(event) {
            this.message = event.target.value;
        },
        includeMessage() {
            this.myTasks.push(this.message);
            eventBus.setMessage(this.myTasks[this.myTasks.length - 1]);
        }
    }
}
</script>

<style scoped>
    input {
        border-radius: 25px;
        margin-top: 25px;
        height: 50px;
        width: 350px;
        font-size: 150%;
        padding-left: 20px;
    }
    button {
        margin-left: 20px;
        height: 50%;
        font-weight: bold;
        font-size: 25px;
        background-color: aqua;
    }
</style>