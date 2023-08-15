
export type TInputValues = {
    username: string,
    password: string,
    confirmPassword?: string,
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
    focused?: string;
};


export type TForm = {
    onSubmit?: (event: React.SyntheticEvent) => Promise<void>,
    InputProps: Array<TInput>,
    InputValues: TInputValues,
    setInputValues: (InputValues: TInputValues) => void,
    buttonText: string,
    linkTo: string,
    pText: string,
};