import { Form } from "react-router-dom";
import Input from "./Input";
import { useAuthContext } from "../hooks/useAuth";
import { useTheme } from "../hooks/useTheme";

export default function FormEditUser() {
  const { theme } = useTheme();
  const { user } = useAuthContext();

  return (
    <Form method="put" className="w-full flex flex-col gap-6">
      <div className="flex gap-12 w-full justify-between">
        <Input
          name="Nome Completo"
          id="nameFull"
          type="text"
          placeholder="Digite seu nome completo"
          defaultValue={user?.user.nameFull}
        />

        <Input
          name="Nome da Loja"
          id="namePlace"
          type="text"
          placeholder="Digite o nome da loja"
          required={true}
          defaultValue={user?.user.namePlace}
        />
      </div>

      <div className="flex gap-12 w-full justify-between">
        <Input
          name="Email"
          id="email"
          type="email"
          placeholder="Digite seu email"
          required={true}
          defaultValue={user?.user.email}
        />

        <Input
          name="Senha"
          id="password"
          type="password"
          placeholder="Digite sua senha"
          required={true}
        />
      </div>

      <div className="flex justify-end">
        <button
          className={`rounded-lg px-6 py-2 text-base font-semibold transition cursor-pointer
          ${
            theme === "dark"
              ? "bg-PrimaryDarkTheme/70 text-TextDarkTheme"
              : "bg-PrimaryLightTheme/70 text-TextLightTheme"
          }`}
        >
          Salvar Alterações
        </button>
      </div>
    </Form>
  );
}
