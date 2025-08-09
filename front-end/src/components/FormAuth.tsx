import { Form, Link, useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import Input from "./Input";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { formAuthHandler } from "../handlers/formAuthHandler";

interface FormAuthProps {
  title: string;
  description: string;
  type: "login" | "register";
}

export default function FormAuth({ title, description, type }: FormAuthProps) {
  const { theme } = useTheme();
  const { register, login } = useAuth();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl p-5 w-xl border
      ${
        theme === "dark"
          ? "bg-SurfaceDarkTheme border-SurfaceLightTheme/40"
          : "bg-SurfaceLightTheme border-SurfaceDarkTheme/40"
      }`}
    >
      <div className="flex flex-col gap-1">
        <h2
          className={`font-bold text-2xl text-center
          ${theme === "dark" ? "text-TextDarkTheme" : "text-TextLightTheme"}`}
        >
          {title}
        </h2>

        <p
          className={`text-base text-center
          ${
            theme === "dark"
              ? "text-TextDarkTheme/70"
              : "text-TextLightTheme/70"
          }`}
        >
          {description}
        </p>
      </div>

      <Form
        method={type === "login" ? "post" : "get"}
        onSubmit={(e) =>
          formAuthHandler(e, type, { login, register }, setFormErrors, navigate)
        }
        className="w-full my-6 flex flex-col gap-7"
      >
        <div className="flex flex-col gap-5">
          {type === "login" ? (
            <>
              <Input
                name="Email"
                id="email"
                type="email"
                placeholder="Digite seu email"
                required={true}
                error={formErrors.email}
              />

              <Input
                name="Senha"
                id="password"
                type="password"
                placeholder="Digite sua senha"
                required={true}
                error={formErrors.password}
              />
            </>
          ) : (
            <>
              <Input
                name="Nome Completo"
                id="nameFull"
                type="text"
                placeholder="Digite seu nome completo"
                required={true}
                error={formErrors.nameFull}
              />

              <Input
                name="Nome da Loja"
                id="namePlace"
                type="text"
                placeholder="Digite o nome da loja"
                required={true}
                error={formErrors.namePlace}
              />

              <Input
                name="Email"
                id="email"
                type="email"
                placeholder="Digite seu email"
                required={true}
                error={formErrors.email}
              />

              <Input
                name="Senha"
                id="password"
                type="password"
                placeholder="Digite sua senha"
                required={true}
                error={formErrors.password}
              />

              <Input
                name="Confirmar Senha"
                id="confirmPassword"
                type="password"
                placeholder="Confirme sua senha"
                required={true}
                error={formErrors.confirmPassword}
              />
            </>
          )}
        </div>

        {formErrors.general && (
          <div style={{ color: "red", marginBottom: "1rem" }}>
            {formErrors.general}
          </div>
        )}

        <div>
          <button
            type="submit"
            className={`cursor-pointer py-1.5 rounded-lg font-semibold w-full
            ${
              theme === "dark"
                ? "bg-PrimaryDarkTheme text-TextDarkTheme hover:bg-PrimaryDarkTheme/80"
                : "bg-PrimaryLightTheme text-TextLightTheme hover:bg-PrimaryLightTheme/80"
            }`}
          >
            {type === "login" ? "Login" : "Criar Conta"}
          </button>
        </div>
      </Form>

      <div>
        {type === "login" ? (
          <p
            className={`text-sm text-center ${
              theme === "dark"
                ? "text-TextDarkTheme/70"
                : "text-TextLightTheme/70"
            }`}
          >
            Não tem uma conta?{" "}
            <Link
              to="/register"
              className={`${
                theme === "dark"
                  ? "text-PrimaryDarkTheme hover:text-PrimaryDarkTheme/50"
                  : "text-PrimaryLightTheme hover:text-PrimaryLightTheme/50"
              }`}
            >
              Criar Conta
            </Link>
          </p>
        ) : (
          <p
            className={`text-sm text-center ${
              theme === "dark"
                ? "text-TextDarkTheme/70"
                : "text-TextLightTheme/70"
            }`}
          >
            Já tem uma conta?{" "}
            <Link
              to="/login"
              className={`${
                theme === "dark"
                  ? "text-PrimaryDarkTheme hover:text-PrimaryDarkTheme/50"
                  : "text-PrimaryLightTheme hover:text-PrimaryLightTheme/50"
              }`}
            >
              Entrar
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
