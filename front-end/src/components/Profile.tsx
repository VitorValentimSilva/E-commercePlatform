import { useState } from "react";
import { useAuth, useAuthContext } from "../hooks/useAuth";
import { useTheme } from "../hooks/useTheme";
import NavProfile from "./NavProfile";
import FormEditUser from "./FormEditUser";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { theme } = useTheme();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("Perfil");
  const { deleteUser } = useAuth();

  const infoNav = [{ title: "Perfil" }, { title: "Apagar Conta" }];

  async function handleDelete() {
    if (!user?.user?.id) return;

    const confirmDelete = window.confirm(
      "Tem certeza que deseja apagar sua conta?"
    );
    if (!confirmDelete) return;

    try {
      const result = await deleteUser(user.user.id);
      alert(result.message);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Erro ao apagar conta");
    }
  }

  return (
    <section className="flex flex-col gap-8">
      <div
        className={`p-6 rounded-lg flex items-center gap-6 border
            ${
              theme === "dark"
                ? "bg-PrimaryDarkTheme/20 border-SurfaceLightTheme/40"
                : "bg-PrimaryLightTheme/20 border-SurfaceDarkTheme/40"
            }`}
      >
        <div
          className={`w-18 h-18 text-4xl flex items-center justify-center rounded-full font-medium border
            ${
              theme === "dark"
                ? "bg-SurfaceLightTheme/10 text-TextDarkTheme border-PrimaryDarkTheme"
                : "bg-SurfaceDarkTheme/10 text-TextLightTheme border-PrimaryLightTheme"
            }`}
        >
          {user?.user.nameFull.charAt(0).toUpperCase()}
        </div>

        <div className="flex flex-col gap-1">
          <p
            className={`font-bold text-2xl
                ${
                  theme === "dark"
                    ? "text-TextDarkTheme"
                    : "text-TextLightTheme"
                }`}
          >
            {user?.user.nameFull}
          </p>

          <p
            className={`text-base
                ${
                  theme === "dark"
                    ? "text-TextDarkTheme/70"
                    : "text-TextLightTheme/70"
                }`}
          >
            {user?.user.email}
          </p>
        </div>
      </div>

      <div
        className={`flex gap-1 items-center p-1 rounded-lg w-max
        ${
          theme === "dark"
            ? "bg-SurfaceLightTheme/10"
            : "bg-SurfaceDarkTheme/10"
        }`}
      >
        {infoNav.map((item, index) => (
          <NavProfile
            key={index}
            name={item.title}
            active={selectedTab === item.title}
            onClick={() => setSelectedTab(item.title)}
          />
        ))}
      </div>

      <div>
        <div
          className={`p-6 rounded-lg border
            ${
              theme === "dark"
                ? "bg-SurfaceDarkTheme border-SurfaceLightTheme/40"
                : "bg-SurfaceLightTheme border-SurfaceDarkTheme/40"
            }`}
        >
          {selectedTab === "Perfil" && (
            <>
              <h2
                className={`text-2xl font-bold mb-3
                ${
                  theme === "dark"
                    ? "text-TextDarkTheme"
                    : "text-TextLightTheme"
                }`}
              >
                Editar perfil
              </h2>

              <FormEditUser />
            </>
          )}

          {selectedTab === "Apagar Conta" && (
            <>
              <h2
                className={`text-2xl font-bold mb-3
                ${
                  theme === "dark" ? "text-RedLightTheme" : "text-RedDarkTheme"
                }`}
              >
                Zona de Perigo
              </h2>

              <p
                className={`
                ${
                  theme === "dark"
                    ? "text-TextDarkTheme"
                    : "text-TextLightTheme"
                }`}
              >
                Atenção! Essa ação não pode ser desfeita.
              </p>

              <button
                onClick={handleDelete}
                className={`px-6 py-2 rounded mt-5 cursor-pointer font-semibold
                ${
                  theme === "dark"
                    ? "bg-RedDarkTheme text-TextDarkTheme hover:opacity-70"
                    : "bg-RedLightTheme text-TextLightTheme hover:opacity-70"
                }`}
              >
                Apagar minha conta
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
