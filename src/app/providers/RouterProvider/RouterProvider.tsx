import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AuthorizationPage from '@/pages/AuthorizationPage';

const router = createBrowserRouter([
	{
		path: '/',
		Component: HomePage,
	},
	{
		path: '/registration',
		Component: AuthorizationPage,
	},
]);

export const RouterProvider = () => {
	return <ReactRouterProvider router={router} />;
};
