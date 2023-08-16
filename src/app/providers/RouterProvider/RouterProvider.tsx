import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AuthorizationPage from '@/pages/AuthorizationPage';
import ModalPage from '@/pages/ModalPage';
import ErrorPage from '@/pages/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/one-time-notes/',
		Component: HomePage,
	},
	{
		path: '/one-time-notes/registration',
		Component: AuthorizationPage,
	},
	{
		path: '/one-time-notes/get/:id',
		Component: ModalPage,
	},
	{
		path: '*',
		Component: ErrorPage,
	}
]);

export const RouterProvider = () => {
	return <ReactRouterProvider router={router} />;
};
