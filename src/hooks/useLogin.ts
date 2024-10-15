import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loginSchema, loginType } from "@/validations/loginSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { setUser } from "@/store/auth/authSlice";
import { useEffect } from "react";
import { useToast } from "./use-toast";
import { useAuthLoginMutation } from "@/store/auth/api/authApiSlice";

const useLogin = ()=>{
    const [searchParams, setSearchParams] = useSearchParams();
    const {toast} = useToast();
    const dispatch = useAppDispatch();
    const{ accessToken:userAccessToken} = useAppSelector((state)=>state.auth)
    const[authLogin, { error , isLoading}] = useAuthLoginMutation();
    let accessToken: string ='';
    let user = {};
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
        try{
            const response = await authLogin({ email , password}).unwrap();
            accessToken = response?.session.access_token ?? '';
            user = {
            id: response?.user.id,
            email: response?.user.email,
            username: response?.user.user_metadata.display_name,
            } ;
            // console.log(response)
            dispatch(setUser({user, accessToken}));
            navigate("/");
        }
        catch(error){
            // console.log(error)
        }
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
    },[toast , searchParams , setSearchParams]);
    return {
        error,
        isLoading,
        accessToken:userAccessToken,
        form,
        onSubmit
    };
}
export default useLogin;