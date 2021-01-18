<template>
    <div class="all-task">
        <button @click="removeTask" :style="[{backgroundColor: myColor}]">X</button>
        <div class="task" @click="testColor()" :style="[{backgroundColor: myColor, textDecorationLine: textMode}]">
            {{taskMessage}}
        </div>
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

    button {
        position:absolute;
        padding: 10px 20px;
        margin-left: 15px;
        border: none;
        border-radius: 15px;
        font-weight: bold;
    }
</style>