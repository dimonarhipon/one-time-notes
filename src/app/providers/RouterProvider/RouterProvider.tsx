import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store/store';
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
	},
]);

export const RouterProvider = () => {
	return (
		<Provider store={store}>
			<ReactRouterProvider router={router} />
		</Provider>
	);
};
