
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import styles from "../Header/styles.module.css";
import { ChevronDown } from "lucide-react";
import { TCurrLang } from "@/types/currLang.type";

type TPopoverBtnProps = {
    value: string;
    setValue: (value:string)=> void;
    open: boolean;
    setOpen: (value:boolean)=> void;
    arrayOfData: TCurrLang[];
}
const PopoverBtn = ({value,setValue ,open, setOpen,arrayOfData}:TPopoverBtnProps) => {
  return (
    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="ghost"
                            role="combobox"
                            aria-expanded={open}
                            className="w-auto p-0 justify-between h-full relative py-[15px] text-destructive hover:bg-transparent hover:text-primary after:content-[''] after:absolute after:h-full after:w-px after:bg-[#E2E2E2] after:top-0 after:right-[-6px]"
                            onMouseEnter={() => setOpen(true)}
                            onClick={(e) => e.preventDefault()}
                          >
                            {
                              arrayOfData.find((el) => el.value === value)
                                ?.label
                            }
                            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Command>
                            <CommandGroup>
                              <CommandList className={`${styles.categorySubMenu}`}>
                                {arrayOfData.map(
                                  (lang) =>
                                    value !== lang.value && (
                                      <CommandItem
                                        key={lang.value}
                                        value={lang.value}
                                        onSelect={(currentValue) => {
                                          currentValue !== value &&
                                            setValue(currentValue);
                                          setOpen(false);
                                        }}
                                        className="font-semibold"
                                      >
                                        {lang.label}
                                      </CommandItem>
                                    )
                                )}
                              </CommandList>
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
  );
};

export default PopoverBtn;