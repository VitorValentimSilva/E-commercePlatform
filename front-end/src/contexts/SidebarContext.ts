import { createContext } from "react";

type SidebarContextType = {
  collapsed: boolean;
  toggleSidebar: () => void;
  setCollapsed: (value: boolean) => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);
