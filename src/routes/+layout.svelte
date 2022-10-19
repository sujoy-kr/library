<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
	import '../global.css';
</script>

<svelte:head>
	<title>Library</title>
</svelte:head>
<Header />
<slot />
<Footer />
