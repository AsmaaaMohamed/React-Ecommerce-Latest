import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { contactSchema, contactType } from "@/validations/contactSchems";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const formRef = useRef();
  const {toast} = useToast();
  const [sendLoad , setSendLoad] = useState(false);
  const form = useForm<contactType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const {reset} = form;
  const onSubmit:SubmitHandler<contactType> = async() => {
    // Do something with the form values.
    setSendLoad(true);
    emailjs
      .sendForm('service_377srvq', 'template_9wd7l5n', formRef.current, {
        publicKey: '6jC4Aaqgkj_Krcv75',
      })
      .then(
        () => {
          toast({
            variant:"success",
            description: "Your Message has been sent successfully",
          });
          reset();
          setSendLoad(false);
        },
        (error) => {
          toast({
            variant:"destructive",
            description: `sorry ${error.text}`,
          });
          setSendLoad(false);
        },
      );
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" ref={formRef}>
        <div className="contact-form-wrapper--half-area flex flex-wrap md:flex-nowrap items-start gap-[20px] w-full">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="name*" required {...field} className="p-[15px] h-auto" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="email*" required {...field} className="p-[15px] h-auto"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="!mt-[15px]">
              <FormControl>
                <Input placeholder="subject*" required {...field} className="p-[15px] h-auto" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="!mt-[15px]">
              <FormControl>
                <Textarea placeholder="Write Message Here" {...field} className="p-[15px] h-[150px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="py-[14px] px-[25px] text-base font-bold h-auto !mt-[15px]" disabled={sendLoad}>Send Message</Button>
      </form>
    </Form>
  );
};

export default ContactForm;
