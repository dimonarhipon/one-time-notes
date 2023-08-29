import { Navigate } from 'react-router-dom';
import { Loader } from '@/shared/Loader';
import { AppRoute, AuthorizationStatus } from '@/shared/contants';

type TPrivateRoute = {
	authorizationStatus?: AuthorizationStatus;
	children: JSX.Element;
};

export const PrivateRoute = ({ children, authorizationStatus = AuthorizationStatus.Auth}: TPrivateRoute): JSX.Element => {

	if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Loader />;
  }

	return authorizationStatus === AuthorizationStatus.Auth ? (
		children
	) : (
		<Navigate to={AppRoute.Register} />
	);
};
