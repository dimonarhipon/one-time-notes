import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import { AppRoute } from '@/shared/contants';
import {HomePage, AuthorizationPage, ModalPage, ErrorPage} from '@/pages';
import { PrivateRoute } from './PrivatRouter';

const router = createBrowserRouter([
	{
		path: AppRoute.Root,
		element: <PrivateRoute><HomePage /></PrivateRoute>
	},
	{
		path: AppRoute.Root + AppRoute.Registration,
		element: <AuthorizationPage />,
	},
	{
		path: AppRoute.GetNote + '/:id',
		element: <ModalPage />,
	},
	{
		path: AppRoute.All,
		element: <ErrorPage />,
	}
]);

export const RouterProvider = () => {
	return <ReactRouterProvider router={router} />;
};
