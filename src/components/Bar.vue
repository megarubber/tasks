<template>
    <div class="bar">
        <div class="progress-bar" :style="[{width: count() + '%'}]"></div>
        <h1>{{count().toFixed(0)}}%</h1>
    </div>
</template>

<script>

export default {
    props: {
        percentageWidth: Number,
        difference: Number     
    },
    methods: {
        count() {
            // if(this.percentageWidth != 0) return 100/(this.percentageWidth - this.difference);
            if(this.percentageWidth != 0) {
                let division = 100/this.percentageWidth;
                return division * this.difference;
            }
            else return 0;
        },
    },
}
</script>

<style scoped>
    .bar {
	    border: 5px solid black;
	    height: 40px;
	    width: 80%;
        border-radius: 20px;
    }
    .progress-bar {
        background-color: aqua;
        height: 100%;
        border-radius: 15px;
    }
    h1 {
        text-align: center;
    }
</style>