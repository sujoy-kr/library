import { writable } from 'svelte/store';

let BookStore = writable([
	{
		id: 1,
		title: 'The Lord of the Rings',
		image: '',
		author: 'J.R.R. Tolkien',
		read: true
	},
	{
		id: 2,
		title: 'The Hobbit',
		image: '',
		author: 'J.R.R. Tolkien',
		read: false
	}
]);

export default BookStore;
