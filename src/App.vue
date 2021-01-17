<template>
	<div id="app">
		<h1>Tasks</h1>
		<Bar />
		<InputBar @sizeMyTasks="repeatTime = $event" @setMessage="logs.push($event)"/>
		<span class="blocks">
			<span v-for="i in repeatTime" :key="i">
				<Task @whenDestroy="option = $event" :taskMessage="logs[i-1]"/>
			</span>
		</span>
	</div>
</template>

<script>
import Bar from '@/components/Bar.vue'
import InputBar from '@/components/InputBar.vue'
import Task from '@/components/Task.vue'

export default {
	components: { Bar, InputBar, Task },
	data() {
		return {
			repeatTime: 0,
			logs: [],
			test: '',
			option: false,
			division: 0
		}
	},
	methods: {
		count() {
			
		}
	}
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
		width: 100%;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}

	.blocks {
		display: flex !important;
		flex-direction: row !important;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

</style>
