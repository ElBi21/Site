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
	<footer>
		<div class="footer-container">
			<div class="footer-items">
				<ul>
					<li><b>Navigation</b></li>
					<li v-for="page in pages" :key="page.path"><NuxtLink :to="page.path">{{ page.label }}</NuxtLink></li>
				</ul>
			</div>
		</div>
		<div class="footer-copyright">
			<p>&copy; Leonardo Biason, 2026</p>
			<a href="https://www.brainmade.org"><NuxtImg src="/brainmade.svg" class="footer-icon"></NuxtImg></a>
		</div>
	</footer>
</template>

<style scoped>
.footer-container {
	width: fit-content;
	max-width: 980px;
	padding: 4em 8em 2em 8em;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: start;
}

.footer-copyright {
	max-width: 980px;

	color: var(--main-foreground);

	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;

	gap: 2em;

	padding: 0 8em 2em 8em;
}

.footer-items ul {
	list-style: none;
	margin: 0;
	padding: 0;

	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;

	gap: 1em;
}

.footer-items li {
	margin: 0;
	cursor: pointer;
}

.footer-items a {
	font-weight: 300;
	text-decoration: none;
	color: var(--main-foreground);
}

.footer-items b {
	font-weight: 700;
	font-size: 1.2em;
	color: var(--main-foreground);
}

.footer-icon {
	height: 1.2em;
	filter: invert(1);
}

@media (max-width: 900px) {
	.footer-container, .footer-copyright {
		padding: 4em 3em 2em 3em;
	}
}

/*@media (max-width: 650px) {
	.footer-container {
		flex-direction: column;
		gap: 1em;
	}
	}*/
</style>
