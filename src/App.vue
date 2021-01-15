<template>
	<div id="app">
		<h1>Tasks</h1>
	</div>
</template>

<script>
export default {

}
</script>

<style>
	body {
		font-family: 'Fredoka One', cursive;
		background: linear-gradient(to right, rgb(56, 184, 17), rgb(58, 115, 82));
		color: #FFF;
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
