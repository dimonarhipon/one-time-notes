import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store/store';
import { HomePage, LoginPage, RegisterPage, ErrorPage } from '@/pages';
import { PrivateRoute } from './PrivatRouter';
import { AppRoute } from '@/shared/contants';

const router = createBrowserRouter([
	{
		path: AppRoute.Root,
		element: (
			<PrivateRoute>
				<HomePage />
			</PrivateRoute>
		),
	},
	{
		path: AppRoute.Root + AppRoute.Register,
		element: <RegisterPage />,
	},
	{
		path: AppRoute.Root + AppRoute.Login,
		element: <LoginPage />,
	},
	{
		path: AppRoute.All,
		element: <ErrorPage />,
	},
]);

export const RouterProvider = () => {
	return (
		<Provider store={store}>
			<ReactRouterProvider router={router} />
		</Provider>
	);
};
