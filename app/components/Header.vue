<template>
  <header>
  	<div class="header-container">
  		<div class="header-title">Leonardo Biason</div>
  		<div class="header-items">
  			<ul>
    			<li><a href="/">Home</a></li>
    			<li><a href="/about">About</a></li>
    			<li><a href="/contact">Contact</a></li>
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
	font-weight: 500;
	text-decoration: none;
	color: black;
}
</style>
