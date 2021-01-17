<template>
    <div class="bar">
        <div class="progress-bar" :style="[{width: }]"></div>
    </div>
</template>

<script>
export default {
    
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
</style>