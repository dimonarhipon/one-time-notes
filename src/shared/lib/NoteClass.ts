const defaultTitle = 'Новая заметка';
const defaultAuthor = 'Кирилл';
const defaultContent = 'Это контент, держу в курсе';

export class Note {
	_id?: string;
	author: string;
	title: string;
	content: string;
	// date: string;
	// status: boolean;

	constructor(title = defaultTitle, author = defaultAuthor, content = defaultContent) {
		this.author = author;
		this.title = title;
		this.content = content;
		// this.date = new Date().toISOString();
		// this.status = false;
	}
}
