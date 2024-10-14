import { create } from "zustand";
interface ToggleMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}
export const useToggleMenu = create<ToggleMenuProps>((set) => ({
  isOpen: false,
  onToggle: () => set((state)=>({isOpen: !state.isOpen})),
}));
