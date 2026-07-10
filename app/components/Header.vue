<script setup>
const router = useRouter()
const { nav } = useAppConfig()

const pages = router.getRoutes()
	.filter(route => nav[route.path] !== undefined)
	.sort((a, b) => nav[a.path] - nav[b.path])
	.map(route => ({
		path: route.path,
		label: route.path === '/' ? 'Home' : route.path.split('/').pop().replace(/^\w/, c => c.toUpperCase())
	}))
</script>

<template>
  <header>
  	<div class="header-container">
  		<div class="header-title">Leonardo Biason</div>
  		<div class="header-items">
  			<ul>
    			<li v-for="page in pages" :key="page.path"><NuxtLink :to="page.path">{{ page.label }}</NuxtLink></li>
	    	</ul>
	    </div>
  	</div>
  </header>
</template>

<style scoped>
.header-container {
	width: 100%;
	max-width: 980px;
	padding: 1em 8em 1em 8em;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}

.header-title {
	font-weight: 800;
	text-transform: uppercase;
	color: var(--main-foreground);

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

.header-items ul {
	list-style: none;
	margin: 0;
	padding: 0;

	display: flex;
	flex-direction: row;
	justify-content: end;
	align-items: center;
}

.header-items li {
	margin: 0 1em;
}

.header-items a {
	font-weight: 300;
	text-decoration: none;
	color: var(--main-foreground);
}

@media (max-width: 900px) {
	.header-container {
		padding: 1em auto;
	}
}

@media (max-width: 650px) {
	.header-container {
		flex-direction: column;
		gap: 1em;
	}
}
</style>
