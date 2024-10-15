import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actAuthRegister, resetUI } from "@/store/auth/authSlice";
import { registerSchema, registerType } from "@/validations/registerSchema";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCheckEmailAvailability from "./useCheckEmailAvailability";

const useRegister=()=>{
    const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { accessToken} = useAppSelector((state)=> state.auth)
  const form = useForm<registerType>({
    mode:"onBlur",
    resolver: zodResolver(registerSchema),
    defaultValues: {
        username:"",
        email: "",
        password: "",
    },
  });
  const onSubmit: SubmitHandler<registerType> = async(values) => {
    // Do something with the form values.
    const{username , email , password} = values;
    await dispatch(actAuthRegister({username , email , password})).unwrap().then(() => {
      navigate('/login?message=account_created');
    });
  }
  const {trigger , getFieldState } = form;
  const {
    emailAvailabilityStatus,
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  } = useCheckEmailAvailability();
  const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const value = e.target.value;
    const { isDirty, invalid } = getFieldState("email");
    if (isDirty && !invalid && enteredEmail !== value) {
      // checking
      checkEmailAvailability(value);
    }

    if (isDirty && invalid && enteredEmail) {
      resetCheckEmailAvailability();
    }
  };
  useEffect(()=>{
    return ()=>{
      dispatch(resetUI());
    }
  },[dispatch]);
  return{accessToken,form,onSubmit, emailAvailabilityStatus , emailOnBlurHandler}
}
export default useRegister;