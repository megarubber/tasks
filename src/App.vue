<template>
	<div id="app">
		<h1>Tasks</h1>
		<Bar />
		<InputBar />
		<Task />
	</div>
</template>

<script>
import Bar from '@/components/Bar.vue'
import InputBar from '@/components/InputBar.vue'
import Task from '@/components/Task.vue'

export default {
	components: { Bar, InputBar, Task }
}
</script>

<style>
	body {
		font-family: 'Fredoka One', cursive;
		background: linear-gradient(to right, rgb(56, 184, 17), rgb(58, 115, 82));
		color: black;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}

</style>
