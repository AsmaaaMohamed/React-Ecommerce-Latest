import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, Path, SubmitHandler, UseFormReturn } from "react-hook-form";

type TSingleInputFormProps<TFieldValue extends FieldValues>={
    formMethods: UseFormReturn<TFieldValue>;
    onSubmit: SubmitHandler<TFieldValue>;
    placeholder: string;
    inputType?: string;
    name: Path<TFieldValue>;
    buttonText: string;
    icon?: React.ReactNode;
    formClassName: string
}
const SingleInputForm = <T extends FieldValues>({formMethods, onSubmit,placeholder , inputType="string", name , buttonText , icon , formClassName}:TSingleInputFormProps<T>) => {
  return (
    <Form {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className={formClassName}
      >
        <FormField
          control={formMethods.control}
          name={name}
          render={() => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={placeholder}
                  type={inputType}
                  className="md-992:max-w-sm xl-1600:max-w-xl xl-1900:max-w-3xl border-[#F3F4F6] rounded-[5px] h-[50px]"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className={`absolute top-1/2 translate-y-[-50%] text-base flex mt-0 right-[5px] font-bold rtsBtn btnPrimary hover:!text-white hover:!bg-secondary py-[14px] px-[25px]`}
        >
          {buttonText}
          {icon && icon}
        </Button>
      </form>
    </Form>
  );
};

export default SingleInputForm;