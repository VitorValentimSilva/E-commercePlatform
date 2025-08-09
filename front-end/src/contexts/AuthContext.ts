import { createContext } from "react";
import type { RegisterData } from "../types/userType";

interface AuthContextType {
  user: RegisterData | null;
  setUser: (user: RegisterData | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

