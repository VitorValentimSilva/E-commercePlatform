import type { LoginData, RegisterData, UserType } from "../types/userType";
import { loginSchema, registerSchema } from "../schemas/userSchema";
import z from "zod";

export async function formAuthHandler(
  event: React.FormEvent<HTMLFormElement>,
  type: "login" | "register",
  {
    login,
    register,
    setUser,
  }: {
    login: (data: LoginData) => Promise<UserType>;
    register: (data: RegisterData) => Promise<UserType>;
    setUser: (user: UserType | null) => void;
  },
  setFormErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>,
  navigate: (path: string) => void
) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = Object.fromEntries(formData.entries());

  let result;
  if (type === "login") {
    result = loginSchema.safeParse(data);
  } else {
    result = registerSchema.safeParse(data);
  }

  if (!result.success) {
    const treeifiedError = z.treeifyError(result.error);
    const formattedErrors: Record<string, string> = {};
    const errorObj = treeifiedError.properties as Record<
      string,
      { errors: string[] } | undefined
    >;

    for (const key of Object.keys(errorObj)) {
      const errorsArray = errorObj[key]?.errors;
      if (errorsArray && errorsArray.length > 0) {
        formattedErrors[key] = errorsArray[0];
      }
    }

    setFormErrors(formattedErrors);
    return;
  }

  try {
    if (type === "login") {
      const userData = await login(data as unknown as LoginData);
      setUser(userData);
      navigate("/adm");
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { confirmPassword: _confirmPassword, ...dataWithoutConfirm } = data;
      const userData = await register(
        dataWithoutConfirm as unknown as RegisterData
      );
      setUser(userData);
      navigate("/adm");
    }
  } catch (error: unknown) {
    if (error && typeof error === "object" && "response" in error) {
      const err = error as {
        response?: {
          data?: { message?: string; errors?: Record<string, string> };
        };
      };
      const backendMessage = err.response?.data?.message;
      const backendErrors = err.response?.data?.errors;

      if (backendErrors && typeof backendErrors === "object") {
        setFormErrors(backendErrors);
      } else if (backendMessage) {
        setFormErrors({ general: backendMessage });
      }
    } else {
      setFormErrors({ general: "Erro inesperado. Tente novamente." });
    }
  }
}
