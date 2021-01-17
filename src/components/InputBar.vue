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
        getMessage() {
            this.message = event.target.value;
        },
        includeMessage() {
            this.myTasks.push(this.message);
            this.$emit('setMessage', this.myTasks[this.myTasks.length - 1]);
            this.$emit("sizeMyTasks", this.myTasks.length);
        }
    }
}
</script>

<style scoped>
    .input-bar {
        margin-top: 100px;
    }
    input {
        border-radius: 25px;
        height: 50px;
        width: 350px;
        font-size: 150%;
        padding-left: 20px;
    }
    button {
        margin-left: 20px;
        height: 100%;
        font-weight: bold;
        font-size: 25px;
        background-color: aqua;
    }
</style>