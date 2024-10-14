import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  displayname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email("Enter Valid Email"),
  currentPassword: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  newPassword: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  confirmPassword: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const AccountDetailsForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          firstname: "",
          lastname: "",
          displayname: "",
          email: "",
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        },
      });
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // console.log(values);
      }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        
        <div className="half-input-wrapper flex flex-wrap md:flex-nowrap items-center justify-center gap-[20px]">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="text-left w-full">
                <FormControl>
                  <Input placeholder="First Name" required {...field} className="p-[15px] h-auto" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="text-left w-full">
                <FormControl>
                  <Input placeholder="Last Name" required {...field} className="p-[15px] h-auto" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
            control={form.control}
            name="displayname"
            render={({ field }) => (
              <FormItem className="text-left w-full !mt-[15px]">
                <FormControl>
                  <Input placeholder="Display Name" required {...field} className="p-[15px] h-auto" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
            <FormItem className="text-left !mt-[15px]">
                <FormControl>
                <Input placeholder="Email Address*" required {...field} className="p-[15px] h-auto" />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem className="text-left !mt-[15px]">
                <FormControl>
                  <Input placeholder="Current Password*" {...field} className="p-[15px] h-auto" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem className="text-left !mt-[15px]">
              <FormControl>
                <Input placeholder="New Password*" required {...field} className="p-[15px] h-auto" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="text-left !mt-[15px]">
              <FormControl>
                <Input placeholder="Confirm Password*" required {...field} className="p-[15px] h-auto" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button
          type="submit"
          className="py-[14px] px-[25px] text-base font-bold h-auto "
        >
          Save Change
        </Button>
      </form>
    </Form>
  )
}

export default AccountDetailsForm