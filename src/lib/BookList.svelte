<script>
	import BookStore from '../stores/BookStore';
	import BookDetails from '$lib/BookDetails.svelte';
</script>

<ul class="flex container my-4 mx-auto flex-wrap justify-evenly">
	{#each $BookStore as book}
		<BookDetails {book} />
	{/each}
</ul>
