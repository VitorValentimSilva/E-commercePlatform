import { useContext } from "react";
import type { LoginData, RegisterData } from "../types/userType";
import { api } from "../utils/api";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
  async function register(data: RegisterData) {
    const res = await api.post("/user", data);
    return res.data;
  }

  async function login(data: LoginData) {
    const res = await api.post("/user/login", data);
    return res.data;
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