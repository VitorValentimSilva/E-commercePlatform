import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { ThemeProvider } from "./contexts/ThemeProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";
import { AuthProvider } from "./contexts/AuthProvider.tsx";
import { SidebarProvider } from "./contexts/SidebarProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <SidebarProvider>
          <RouterProvider router={router} />
        </SidebarProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
