export type inputFormTypes = {
    placeholder: string,
    name: string,
    type: string,
    setInputParam: (username: string) => void,
    isValidForm: (formValue:string , validPattern:RegExp, formName: string) => void,
};