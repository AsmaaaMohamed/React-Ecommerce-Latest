import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import { useDialog } from "@/hooks/useDialog";
import styles from "./styles.module.css";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
 
export function HomePopup() {
    const {isOpen, onOpen, onClose} = useDialog();
    useEffect(()=>{
        onOpen();
    },[onOpen])
    return (
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent className="homePopup lg:max-w-[1064px] sm:max-w-[425px] max-w-[90%] sm:h-[530px] dialog data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 sm:rounded-lg">
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <DialogDescription>
                        </DialogDescription>
                    </DialogHeader>
                    <div className={`lg:px-[70px] lg:pt-[80px] lg:pb-[120px]`}>
                        <span className={`text-base font-semibold text-primary`}>Get up to 30% off on your first $150 purchase</span>
                        <h1 className={`title mt-[10px] mb-[25px] text-5xl text-secondary font-bold`}>Feed Your Family at the  <br/>
                            Best Price
                        </h1>
                        <p className={`mb-[30px]`}>
                            We have prepared special discounts for you on grocery products. Don't <br/> miss these opportunities...
                        </p>
                        <div className={`flex items-center gap-[30px]`}>
                            <Button asChild variant="ghost">
                                <Link
                                to="/login"
                                className={`flex items-center justify-center rtsBtn btnPrimary hover:!bg-secondary !py-[14px] !px-[25px] gap-[10px] h-auto ${styles.withIcon}`}
                                >
                                     Shop Now <ArrowRight size="20px" />
                                </Link>
                            </Button>
                            <div className={`flex items-end justify-center gap-[10px]`}>
                                <span>
                                    from
                                </span>
                                <h3 className="title animated fadeIn m-0 p-0 text-[36px] text-primary mb-[-10px] font-bold">$80.99</h3>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
    );
}