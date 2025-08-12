import { Form } from "react-router-dom";
import Input from "./Input";
import { useAuth, useAuthContext } from "../hooks/useAuth";
import { useTheme } from "../hooks/useTheme";
import { updateUserSchema } from "../schemas/userSchema";
import { useState } from "react";
import z from "zod";
import Spinner from "./Spinner";

export default function FormEditUser() {
  const { theme } = useTheme();
  const { user } = useAuthContext();
  const { updateUser } = useAuth();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({
    nameFull: user?.user.nameFull || "",
    namePlace: user?.user.namePlace || "",
    email: user?.user.email || "",
    password: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  function isFormChanged() {
    if (!user) return false;
    return (
      formValues.nameFull !== (user.user.nameFull || "") ||
      formValues.namePlace !== (user.user.namePlace || "") ||
      formValues.email !== (user.user.email || "") ||
      formValues.password !== ""
    );
  }

  async function handlerUpdate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!user?.user?.id) return;

    setIsSubmitting(true);

    const parsed = updateUserSchema.safeParse(formValues);

    if (!parsed.success) {
      const treeifiedError = z.treeifyError(parsed.error);
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
      setIsSubmitting(false);
      return;
    }

    try {
      const dataToSend = { ...parsed.data };
      if (!dataToSend.password) {
        delete dataToSend.password;
      }

      const result = await updateUser(user.user.id, dataToSend);
      alert(result.message);
      setFormErrors({});
      setFormValues((prev) => ({ ...prev, password: "" }));
    } catch (error: unknown) {
      console.error(error);

      type ErrorWithResponse = {
        response?: {
          data?: {
            errors?: Record<string, string>;
            message?: string;
          };
        };
      };

      if (typeof error === "object" && error !== null && "response" in error) {
        const err = error as ErrorWithResponse;
        const data = err.response?.data;

        if (data?.errors && typeof data.errors === "object") {
          setFormErrors(data.errors);
        } else if (data?.message) {
          setFormErrors({ general: data.message });
        } else {
          setFormErrors({ general: "Erro ao atualizar usuário" });
        }
      } else {
        setFormErrors({ general: "Erro ao atualizar usuário" });
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form
      method="put"
      onSubmit={handlerUpdate}
      className="w-full flex flex-col gap-6"
    >
      <div className="flex gap-12 w-full justify-between">
        <Input
          name="Nome Completo"
          id="nameFull"
          type="text"
          placeholder="Digite seu nome completo"
          error={formErrors.nameFull}
          value={formValues.nameFull}
          onChange={handleChange}
        />

        <Input
          name="Nome da Loja"
          id="namePlace"
          type="text"
          placeholder="Digite o nome da loja"
          error={formErrors.namePlace}
          value={formValues.namePlace}
          onChange={handleChange}
        />
      </div>

      <div className="flex gap-12 w-full justify-between">
        <Input
          name="Email"
          id="email"
          type="email"
          placeholder="Digite seu email"
          error={formErrors.email}
          value={formValues.email}
          onChange={handleChange}
        />

        <Input
          name="Senha"
          id="password"
          type="password"
          placeholder="Digite sua senha"
          error={formErrors.password}
          value={formValues.password}
          onChange={handleChange}
        />
      </div>

      {formErrors.general && (
        <div
          className={`mb-1 ${
            theme === "dark" ? "text-RedDarkTheme" : "text-RedLightTheme"
          }`}
        >
          {formErrors.general}
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!isFormChanged() || isSubmitting}
          className={`rounded-lg px-6 py-2 text-base font-semibold transition
          ${
            isFormChanged() && !isSubmitting
              ? theme === "dark"
                ? "bg-PrimaryDarkTheme/70 text-TextDarkTheme cursor-pointer"
                : "bg-PrimaryLightTheme/70 text-TextLightTheme cursor-pointer"
              : "bg-BackgroundLightTheme/30 cursor-not-allowed text-TextLightTheme"
          } flex items-center justify-center gap-2`}
        >
          {isSubmitting ? <Spinner /> : null}
          Salvar Alterações
        </button>
      </div>
    </Form>
  );
}
