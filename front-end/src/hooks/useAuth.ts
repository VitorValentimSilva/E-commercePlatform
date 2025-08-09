import { useContext } from "react";
import type { LoginData, RegisterData, UserType } from "../types/userType";
import { api } from "../utils/api";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
  async function register(data: RegisterData): Promise<UserType> {
    const res = await api.post("/user", data);
    return res.data as UserType;
  }

  async function login(data: LoginData): Promise<UserType> {
    const res = await api.post("/user/login", data);
    return res.data as UserType;
  }

  return { register, login };
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext deve estar dentro de AuthProvider");
  }
  return context;
}
