<template>
    <div class="all-task">
        <div class="task" @click="testColor()" :style="[{backgroundColor: myColor, textDecorationLine: textMode}]">
            {{taskMessage}}
        </div>
        <button @click="removeTask">X</button>
    </div>
</template>

<script>

export default {
    props: {
        taskMessage: String,
    },
    data() {
        return {
            myColor: 'red',
            textMode: 'none',
            option: false,
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
                this.option = false;
            }
            else {
                this.myColor = 'red';
                verify--;
                this.textMode = 'none';
                this.option = true;
            }
            this.$emit('sendValue', verify);
            this.$emit('stoppingCount', this.option);
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