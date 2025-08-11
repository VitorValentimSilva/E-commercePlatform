export interface RegisterData {
  nameFull: string;
  namePlace: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface CoreUser {
  id: number;
  nameFull: string;
  namePlace: string;
  email: string;
  createdAt: Date | string;
}

export type UserType = {user: CoreUser} | null;
