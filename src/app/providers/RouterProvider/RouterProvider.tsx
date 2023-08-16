import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AuthorizationPage from '@/pages/AuthorizationPage';
import ModalPage from '@/pages/ModalPage';

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
]);

export const RouterProvider = () => {
	return <ReactRouterProvider router={router} />;
};
