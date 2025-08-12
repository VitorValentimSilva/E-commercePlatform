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

  async function deleteUser(
    id: number,
    data?: unknown
  ): Promise<{ message: string }> {
    const res = await api.delete(`/user/${id}`, { data });
    return res.data;
  }

  async function updateUser(
    id: number,
    data?: unknown
  ): Promise<{ message: string }> {
    const res = await api.put(`/user/${id}`, data);
    return res.data;
  }

  return { register, login, deleteUser, updateUser };
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext deve estar dentro de AuthProvider");
  }
  return context;
}
