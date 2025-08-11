import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

export const useSidebar = () => {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used within SidebarProvider");
  return ctx;
};
