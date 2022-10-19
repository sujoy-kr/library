<script>
	import { scale, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
</script>

<div key={Math.random} in:fade out:scale|local class="card p-4 m-4 rounded-md bg-white">
	<slot />
</div>

<style>
	.card {
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
