import { ReactElement } from 'react';

export type TInputValues = {
    username: string,
    password: string,
    [key: string]: string,
};

export type TInput = {
    id: number;
    name: string;
    type: string;
    placeholder: string;
    errorMessage: string;
    label: string;
    pattern: RegExp | string;
    required: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    value?: string;
    focused?: boolean;
    passwordSecurity?: ReactElement;
};


export type TForm = {
    onSubmit?: (event: React.SyntheticEvent) => Promise<void>,
    InputProps: Array<TInput>,
    InputValues: TInputValues,
    setInputValues: (InputValues: TInputValues) => void,
    buttonText: string,
    linkTo: string,
    pText: string,
    passwordSecurity?: ReactElement,
};