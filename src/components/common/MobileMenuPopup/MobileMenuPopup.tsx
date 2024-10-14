import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import MobileSideMenu from "../MobileSideMenu/MobileSideMenu";
import { useToggleMenu } from "@/hooks/useToggleMenu";

const MobileMenuPopup = () => {
  const { isOpen , onToggle} = useToggleMenu();
  return (
    <Dialog open={isOpen} onOpenChange={onToggle}>
      <DialogContent className="mobile-menu w-[320px] sm:w-[465px] h-[100%] right-[-100%] data-[state=open]:right-0 top-0 translate-y-0 translate-x-0 left-auto !rounded-none data-[state=open]:slide-in-from-right-full data-[state=closed]:slide-out-to-right-full duration-1000 backdrop-blur overflow-y-auto">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <MobileSideMenu />
      </DialogContent>
    </Dialog>
  );
};

export default MobileMenuPopup;
