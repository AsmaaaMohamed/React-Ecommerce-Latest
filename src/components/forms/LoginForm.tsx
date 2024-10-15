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
  const {error,isLoading,accessToken,form,onSubmit} = useLogin();
  // console.log('errrrrrrrrrrrrrrror' , error)
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
          disabled={isLoading}
        >
          {isLoading? <><LoadingSpinner/> Loging...</> : "Login Account"}
        </Button>
        {error && (<p className="text-red-600 mt-[10px]">{error.message}</p>)}
      </form>
    </Form>
    </>
  );
};

export default LoginForm;
