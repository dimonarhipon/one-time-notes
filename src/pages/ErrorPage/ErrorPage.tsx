import { TModalProps } from '@/shared/lib/TModalProps';
import { ModalTemplate } from '@/widgets/ModalTemplate/ModalTemplate';
import { ErrorContent } from '@/widgets/ModuleError/ErrorContent';

export const ErrorPage = ({ children }: TModalProps) => {
    return <ModalTemplate>
        <ErrorContent>
            {children}
        </ErrorContent>
    </ModalTemplate>;
};