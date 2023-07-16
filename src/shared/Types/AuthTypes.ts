
export type TInputValues = {
    username: string,
    password: string,
    confirmPassword?: string,
};

export interface IInput {
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
    focused?: string;
}


export interface IForm {
    onSubmit?: (event: React.SyntheticEvent) => Promise<void>,
    InputProps: Array<IInput>,
    InputValues: TInputValues,
    setInputValues: (InputValues: TInputValues) => void,
    buttonText: string,
    linkTo: string,
    pText: string,
}