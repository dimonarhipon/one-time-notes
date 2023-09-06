export enum AppRoute {
	Root = '/one-time-notes/',
	Register = 'register',
	Login = 'login',
	GetNote = '/one-time-notes/get',
	Id = '/:id',
	All = '*',
}

export enum AuthorizationStatus {
	Auth = 'AUTH',
	NoAuth = 'NO_AUTH',
	Unknown = 'UNKNOWN',
}

export enum IconName {
	Translate = 'translate',
	ThemeLight = 'theme-light',
	ThemeDark = 'theme-dark',
	Bold = 'bold',
	Italic = 'italic',
	Underline = 'underline',
	LineThrough = 'line-through',
	Delete = 'delete',
	Add = 'add',
	Close = 'close',
	Copy = 'copy',
	Back = 'back',
	Search = 'search',
	Eye = 'eye',
	EyeSlash = 'eye-slash',
}

export enum Theme {
	Light = '#fff',
	Dark = '#151515',
}
