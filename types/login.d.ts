type loginValues = {
    email:string;
    password:string;
}

interface registerValues extends loginValues{
    name:string;
}

type setSubmitting = (isSubmitting:boolean)=>void;

type register = (values:registerValues,setSubmitting:setSubmitting)=>void;
type login = (values:loginValues,setSubmitting:setSubmitting)=>void;

export {
    register,
    login
}