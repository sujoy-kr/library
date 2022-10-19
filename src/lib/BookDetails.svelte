<script>
	import Card from '$lib/Card.svelte';
	export let book;
	import BookStore from '../stores/BookStore';

	const handleReadStatus = (id) => {
		let copiedList = $BookStore;
		let book = copiedList.find((book) => book.id === id);
		book.read = !book.read;
		$BookStore = copiedList;
	};

	const handleDeletion = (id) => {
		let copiedList = $BookStore;
		let filteredList = copiedList.filter((book) => book.id !== id);
		$BookStore = filteredList;
	};
</script>

<Card
	><figure class="w-64 text-center">
		<img
			src={book.cover ? book.cover : './default-book-cover.jpg'}
			class="w-ful rounded-md"
			alt={book.title}
		/>
		<figcaption>
			<h2 class="text-2xl font-semibold mt-4">{book.title}</h2>
			<p class="text-sm">{book.author}</p>
			<div class="flex justify-around">
				<button
					on:click={() => handleReadStatus(book.id)}
					class="bg-slate-600 rounded-sm py-2 px-4 mt-4 text-md text-white font-semibold tracking-wide"
					class:read={book.read}>{book.read ? 'Reading Done' : 'Not Read Yet'}</button
				>
				<button
					on:click={() => handleDeletion(book.id)}
					class="bg-red-500 rounded-sm py-2 px-4 mt-4 text-md text-white font-semibold tracking-wide"
					>Delete</button
				>
			</div>
		</figcaption>
	</figure></Card
>

<style>
	.read {
		background-color: #16a34a;
	}
</style>
