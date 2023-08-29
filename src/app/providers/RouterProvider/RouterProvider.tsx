import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store/store';
import HomePage from '@/pages/HomePage';
import Login from '@/pages/LoginPage';
import Register from '@/pages/RegisterPage';

const router = createBrowserRouter([
	{
		path: '/one-time-notes/',
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
	return (
		<Provider store={store}>
			<ReactRouterProvider router={router} />
		</Provider>
	);
};
