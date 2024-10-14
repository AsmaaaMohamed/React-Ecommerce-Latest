import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Navigate } from "react-router-dom";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import useLogin from "@/hooks/useLogin";

const LoginForm = () => {
  const {error,loading,accessToken,form,onSubmit} = useLogin();
  if (accessToken)
    return <Navigate to='/' />;
  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="text-left">
              <FormLabel className="inline-block mb-[4px] font-medium text-secondary text-base">Email*</FormLabel>
              <FormControl>
                <Input
                  required
                  {...field}
                  className="p-[15px] h-auto"
                />
              </FormControl>
              <FormMessage className="text-red-600"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="text-left">
              <FormLabel className="inline-block mb-[4px] font-medium text-secondary text-base">Password*</FormLabel>
              <FormControl>
                <Input type="password" required {...field} className="p-[15px] h-auto" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="py-[14px] px-[25px] text-base font-bold h-auto max-w-full w-full"
          disabled={loading === 'pending'}
        >
          {loading ==="pending"? <><LoadingSpinner/> Loging...</> : "Login Account"}
        </Button>
        {error && <p className="text-red-600 mt-[10px]">{error}</p>}
        <div className="another-way-to-registration">
          {/* <div className="registradion-top-text flex items-center justify-center my-[30px] relative before:absolute before:content-[''] before:right-0 md:before:w-[35%] before:h-px before:bg-[#E7E7E7] after:absolute after:content-[''] after:left-0 md:after:w-[35%] after:h-px after:bg-[#E7E7E7] before:w-[20%] after:w-[20%]">
            <span className="font-medium text-secondary">Or Login With</span>
          </div>
          <div className="login-with-brand flex items-center gap-[10px]">
            <a href="#" className="single flex basis-[49%] justify-center h-[50px] rounded-[6px] border border-solid border-[#EBEBEB]">
              <img src="src/assets/svg/google.svg" alt="login" className="w-[76px]"/>
            </a>
            <a href="#" className="single flex basis-[49%] justify-center h-[50px] rounded-[6px] border border-solid border-[#EBEBEB]">
              <img src="src/assets/svg/facebook.svg" alt="login" className="w-[76px]" />
            </a>
          </div> */}
          <p className="m-0 flex justify-center mt-[30px] text-base" >
            Don't Have Account? <a href="/register" className="text-secondary font-semibold ml-[10px]">Register</a>
          </p>
        </div>
      </form>
    </Form>
    </>
  );
};

export default LoginForm;
