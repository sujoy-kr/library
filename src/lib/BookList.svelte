<script>
	import BookStore from '../stores/BookStore';
	import BookDetails from '$lib/BookDetails.svelte';
	import { scale, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
</script>

<ul class="flex container my-4 mx-auto flex-wrap justify-evenly">
	{#each $BookStore as book (book.id)}
		<div in:fade out:scale|local animate:flip={{ duration: 500 }}>
			<BookDetails {book} />
		</div>
	{/each}
</ul>
