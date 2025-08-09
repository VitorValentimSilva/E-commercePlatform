import { createContext } from "react";
import type { UserType } from "../types/userType";

interface AuthContextType {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
