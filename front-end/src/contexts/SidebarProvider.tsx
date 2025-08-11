import { useState, type ReactNode } from "react";
import { SidebarContext } from "./SidebarContext";

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed((c) => !c);

  return (
    <SidebarContext.Provider value={{ collapsed, toggleSidebar, setCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
};
