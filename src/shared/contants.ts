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
