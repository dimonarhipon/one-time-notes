import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AuthorizationPage from '@/pages/AuthorizationPage';
import ModalPage from '@/pages/ModalPage';

const router = createBrowserRouter([
	{
		path: '/develop/',
		Component: HomePage,
	},
	{
		path: '/develop/registration',
		Component: AuthorizationPage,
	},
	{
		path: 'develop/get/:id',
		Component: ModalPage,
	},
]);

export const RouterProvider = () => {
	return <ReactRouterProvider router={router} />;
};
