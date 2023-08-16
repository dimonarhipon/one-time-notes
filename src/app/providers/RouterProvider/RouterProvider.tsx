import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store/store';
import HomePage from '@/pages/HomePage';
import AuthorizationPage from '@/pages/AuthorizationPage';

const router = createBrowserRouter([
	{
		path: '/one-time-notes/',
		Component: HomePage,
	},
	{
		path: '/one-time-notes/registration',
		Component: AuthorizationPage,
	},
]);

export const RouterProvider = () => {
	return (
		<Provider store={store}>
			<ReactRouterProvider router={router} />
		</Provider>
	);
};
