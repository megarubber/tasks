<template>
    <div class="task">
        {{ taskMessage }}
    </div>
</template>

<script>

import eventBus from '@/eventBus'
export default {
    /*
    props: {
        taskMessage: String
    },
    */
    data() {
        return {
            taskMessage: ''
        }
    },
    created() {
        eventBus.onMessage(text => {
            this.taskMessage = text
        });
    }
}
</script>

<style scoped>
    .task {
        padding: 50px;
        border-radius: 25px;
        margin: 50px;
        width: 350px;
        height: 200px;
        background-color: red;
        font-size: 25px;
    }
</style>