<template>
    <div class="task" @click="testColor()" :style="[{backgroundColor: myColor}]">
        {{ taskMessage }}
        <span>X</span>
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
        }
    },
    methods: {
        testColor() {
            //this.myColor = this.myColor == 'red' ? 'aqua' : 'red';
            let verify = 0;
            if(this.myColor == 'red') {
                this.myColor = 'aqua';
                verify++;
            }
            else {
                this.myColor = 'red';
                verify--;
            }
            this.$emit('sendValue', verify);
        },
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