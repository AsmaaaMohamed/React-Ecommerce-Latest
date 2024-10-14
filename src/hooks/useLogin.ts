import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loginSchema, loginType } from "@/validations/loginSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { actAuthLogin, resetUI } from "@/store/auth/authSlice";
import { useEffect } from "react";
import { useToast } from "./use-toast";

const useLogin = ()=>{
    const [searchParams, setSearchParams] = useSearchParams();
    const {toast} = useToast();
    const dispatch = useAppDispatch();
    const{error , loading, accessToken} = useAppSelector((state)=>state.auth)
    const navigate = useNavigate();
    const form = useForm<loginType>({
        mode:"onBlur",
        resolver: zodResolver(loginSchema),
        defaultValues: {
        email: "",
        password: "",
        },
    });
    const onSubmit:SubmitHandler<loginType> = async(values) => {
        // Do something with the form values.
        const { email , password} = values;
        dispatch(actAuthLogin({ email , password}))
        .unwrap()
        .then(() => {
            navigate("/");
        });
    }
    useEffect(()=>{
        if(searchParams.get("message") === "account_created")
        {
            setSearchParams("");
            toast({
                variant:"default",
                description: "Your account successfully created, please login",
            });
        }
        else if(searchParams.get("message") === "login_required"){
            setSearchParams("");
            toast({
                variant:"destructive",
                description: "You need to login to view this content",
            });
        }
        return ()=>{
        dispatch(resetUI());
        }
    },[toast , searchParams , dispatch , setSearchParams]);
    return {
        error,
        loading,
        accessToken,
        form,
        onSubmit
    };
}
export default useLogin;