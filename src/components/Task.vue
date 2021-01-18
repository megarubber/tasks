<template>
    <div class="task" @click="testColor()" :style="[{backgroundColor: myColor, textDecorationLine: textMode}]">
        {{taskMessage}}
        <button @click="removeTask">X</button>
    </div>
</template>

<script>

import eventBus from '@/eventBus'
export default {
    props: {
        taskMessage: String,
    },
    data() {
        return {
            myColor: 'red',
            textMode: 'none'
        }
    },
    methods: {
        testColor() {
            //this.myColor = this.myColor == 'red' ? 'aqua' : 'red';
            let verify = 0;
            if(this.myColor == 'red') {
                this.myColor = 'aqua';
                verify++;
                this.textMode = 'line-through';
            }
            else {
                this.myColor = 'red';
                if(verify >= 0) verify--;
                this.textMode = 'none';
            }
            this.$emit('sendValue', verify);
        },
        removeTask() {
            this.$emit('removingTask', this.taskMessage);
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