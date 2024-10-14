import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email("Enter Valid Email"),
  company: z.string(),
  country: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  street: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  state: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  zipcode: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  note: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const CheckoutForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      company: "",
      country: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      phone: "",
      note: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="text-left">
              <FormLabel className="inline-block mb-[4px] font-normal text-base text-muted">
                Email Address*
              </FormLabel>
              <FormControl>
                <Input required {...field} className="p-[15px] h-auto" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="half-input-wrapper flex flex-wrap md:flex-nowrap items-center justify-center gap-[20px] mb-[35px]">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="text-left w-full">
                <FormLabel className="inline-block mb-[4px] font-normal text-base text-muted">
                  First Name*
                </FormLabel>
                <FormControl>
                  <Input required {...field} className="p-[15px] h-auto" />
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
                <FormLabel className="inline-block mb-[4px] font-normal text-base text-muted">
                  Last Name*
                </FormLabel>
                <FormControl>
                  <Input required {...field} className="p-[15px] h-auto" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="inline-block mb-[4px] font-normal text-base text-muted">
                  Company Name (Optional)
                </FormLabel>
                <FormControl>
                  <Input {...field} className="p-[15px] h-auto" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="text-left">
              <FormLabel className="inline-block mb-[4px] font-normal text-base text-muted">
                Country / Region*
              </FormLabel>
              <FormControl>
                <Input required {...field} className="p-[15px] h-auto" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem className="text-left">
              <FormLabel className="inline-block mb-[4px] font-normal text-base text-muted">
                Street Address*
              </FormLabel>
              <FormControl>
                <Input required {...field} className="p-[15px] h-auto" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="text-left">
              <FormLabel className="inline-block mb-[4px] font-normal text-base text-muted">
                Town / City*
              </FormLabel>
              <FormControl>
                <Input required {...field} className="p-[15px] h-auto" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem className="text-left">
              <FormLabel className="inline-block mb-[4px] font-normal text-base text-muted">
                State*
              </FormLabel>
              <FormControl>
                <Input required {...field} className="p-[15px] h-auto" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="zipcode"
          render={({ field }) => (
            <FormItem className="text-left">
              <FormLabel className="inline-block mb-[4px] font-normal text-base text-muted">
                Zip Code*
              </FormLabel>
              <FormControl>
                <Input required {...field} className="p-[15px] h-auto" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="text-left">
              <FormLabel className="inline-block mb-[4px] font-normal text-base text-muted">
                Phone*
              </FormLabel>
              <FormControl>
                <Input required {...field} className="p-[15px] h-auto" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem className="text-left">
              <FormLabel className="inline-block mb-[4px] font-normal text-base text-muted">
                Order Notes
              </FormLabel>
              <FormControl>
                <Textarea {...field} className="p-[15px] h-[180px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="py-[14px] px-[25px] text-base font-bold h-auto "
        >
          Update Cart
        </Button>
      </form>
    </Form>
  );
};

export default CheckoutForm;
