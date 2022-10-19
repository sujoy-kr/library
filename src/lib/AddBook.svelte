<script>
	import BookStore from '../stores/BookStore';

	function capitalize(str) {
		let splitStr = str.toLowerCase().split(' ');
		for (let i = 0; i < splitStr.length; i++) {
			// You do not need to check if i is larger than splitStr length, as your for does that for you
			// Assign it back to the array
			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
		}
		// Directly return the joined string
		return splitStr.join(' ');
	}

	function Book(title, image, author, read) {
		this.id = Math.random();
		this.title = capitalize(title);
		this.image = image ? image : './default-book-cover.jpg';
		this.author = capitalize(author);
		this.read = read === 'on' ? true : false;
	}

	const handleAddBook = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);
		const newBook = new Book(data.title, data.image, data.author, data.read);
		$BookStore = [newBook, ...$BookStore];
	};
</script>

<form
	on:submit={handleAddBook}
	class="bg-slate-200 p-4 my-4 mx-auto text-center container rounded-md m-2"
>
	<h1 class="text-3xl font-bold text-slate-500 uppercase">Add a Book</h1>
	<input
		class="w-64 outline-none p-2 m-2 rounded-sm"
		type="text"
		name="title"
		required
		placeholder="Book Title"
	/>
	<input
		class="w-64 outline-none p-2 m-2 rounded-sm"
		type="text"
		name="author"
		required
		placeholder="Book Author"
	/>
	<input
		class="w-64 outline-none p-2 m-2 rounded-sm"
		type="text"
		name="image"
		placeholder="Book Cover (URL) /optional"
	/>
	<label class="inline-block text-lg"
		><input class="outline-none p-2 m-2 rounded-sm" name="read" type="checkbox" id="" /> Check if read</label
	>
	<br />
	<button type="submit" class="bg-green-500 text-white text-lg font-semibold px-4 py-1 mt-2"
		>ADD</button
	>
</form>
