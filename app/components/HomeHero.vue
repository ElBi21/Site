<template>
	<div class="hero-container">
		<p class="hero-title">Leonardo<br>Biason</p>
		<div class="hero-image-container pattern-dots-sm gray-400">
			<NuxtImg src="/pfp.jpg" class="hero-image"></NuxtImg>
		</div>
	</div>
</template>

<style scoped>
.hero-container {
	height: fit-content;
	margin: 6em auto 6em auto;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 2em;
}

.hero-image {
	width: 100%;
	height: 100%;
	border-radius: 90px;

	transform: translate(12px, 12px);
}

.hero-image-container {
	width: 180px;
	height: 180px;
	border-radius: 90px;

	transform: translate(0, -6px);

	z-index: -1;
}

.hero-title {
	font-size: 48px;
	font-weight: 900;
	font-family: "DM Sans", sans-serif;
	text-align: right;
	line-height: 1;
}
</style>
