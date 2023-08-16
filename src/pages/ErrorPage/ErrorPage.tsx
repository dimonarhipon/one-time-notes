import { TModalProps } from '@/shared/lib/TModalProps';
import { ModalTemplate } from '@/widgets/ModalTemplate/ModalTemplate';
import { Error404 } from '@/widgets/ModuleError/Error404';

export const ErrorPage = ({ children }: TModalProps) => {
    return <ModalTemplate>
        <Error404>
            {children}
        </Error404>
    </ModalTemplate>;
};