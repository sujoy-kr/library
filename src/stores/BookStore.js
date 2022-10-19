import { writable } from 'svelte/store';

let BookStore = writable([
	{
		id: 1,
		title: 'DDIA',
		image: 'https://benjaminwuethrich.dev/images/2021-02-02-ddia-cover.png',
		author: 'Martin Kleppmann',
		read: true
	},
	{
		id: 2,
		title: 'The Hobbit',
		image: './default-book-cover.jpg',
		author: 'J.R.R. Tolkien',
		read: false
	},
	{
		id: 3,
		title: "Don't make me think",
		image:
			'https://ebooks.gramedia.com/ebook-covers/22761/general_small_covers/ID_SIS2015MTH03DMMT_S.jpg',
		author: 'Steve Krug',
		read: false
	}
]);

export default BookStore;
