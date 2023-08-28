import { ModalTemplate } from '@/widgets/ModalTemplate/ModalTemplate';
import { ErrorContent } from '@/widgets/ModuleError/ErrorContent';

type TError = {
	children?: string;
};

export const ErrorPage = ({ children }: TError) => {
	return (
		<ModalTemplate>
			<ErrorContent>{children}</ErrorContent>
		</ModalTemplate>
	);
};
