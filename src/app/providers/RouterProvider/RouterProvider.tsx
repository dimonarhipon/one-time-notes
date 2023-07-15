import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import Login from '@/pages/LoginPage';
import Register from '@/pages/RegisterPage';

const router = createBrowserRouter([
	{
		path: '/',
		Component: HomePage,
	},
	{
		path: '/register',
		Component: Register,
	},
	{
		path: '/login',
		Component: Login,
	},
]);

export const RouterProvider = () => {
	return <ReactRouterProvider router={router} />;
};
