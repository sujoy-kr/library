<script>
	import BookStore from '../stores/BookStore';
	import BookDetails from '$lib/BookDetails.svelte';
</script>

<ul class="flex container p-4 mb-4 mt-8 mx-auto flex-wrap justify-center">
	{#if $BookStore.length !== 0}
		{#each $BookStore as book (book.id)}
			<BookDetails {book} />
		{/each}
	{:else}
		<h1 class="text-3xl m-4 text-center font-bold text-slate-500 uppercase">No Books Found</h1>
	{/if}
</ul>
