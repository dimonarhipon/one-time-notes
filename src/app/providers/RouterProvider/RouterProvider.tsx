import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import HomePage from '@/pages/HomePage';

const router = createBrowserRouter([
	{
		path: '/',
		Component: HomePage,
	},
]);

export const RouterProvider = () => {
	return <ReactRouterProvider router={router} />;
};
