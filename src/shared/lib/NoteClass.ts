const defaultTitle = 'Новая заметка';
const defaultAuthor = 'Кирилл';
const defaultContent = 'Это контент, держу в курсе';

export class Note {
	_id?: string;
	title: string;
	author: string;
	content: string;
	isRead: boolean;
	createdAt: string;
	updatedAt: Date;

	constructor(title = defaultTitle, author = defaultAuthor, content = defaultContent, isRead = false, updatedAt = new Date()) {
		this.title = title;
		this.author = author;
		this.content = content;
		this.isRead = isRead;
		this.createdAt = new Date().toISOString();
		this.updatedAt = updatedAt;
	}
}
