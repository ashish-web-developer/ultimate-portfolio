type loginValues = {
    email:string;
    password:string;
}

interface registerValues extends loginValues{
    name:string;
}

type setState<Type> = (isSubmitting:Type)=>void;

type register = (values:registerValues,setSubmitting:setState,setIsSignUp:setState)=>void;
type login = (values:loginValues,setSubmitting:setSubmitting)=>void;

export {
    register,
    login
}