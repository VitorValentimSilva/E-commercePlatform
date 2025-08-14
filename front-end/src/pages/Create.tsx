import { Form, useLocation } from "react-router-dom";
import FieldsCategory from "../components/FieldsCategory";
import { useTheme } from "../hooks/useTheme";

interface CreateProps {
  name?: string;
}

export default function Create() {
  const location = useLocation();
  const { name } = (location.state as CreateProps) || {};
  const { theme } = useTheme();

  return (
    <section>
      <Form>
        {name === "Categoria" && (
          <div className="flex flex-col gap-5">
            <FieldsCategory />

            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className={`py-1 px-8 cursor-pointer rounded-lg font-semibold text-lg hover:opacity-70
                ${
                  theme == "dark"
                    ? "bg-PrimaryDarkTheme text-TextDarkTheme"
                    : "bg-PrimaryLightTheme text-TextLightTheme"
                }`}
              >
                Criar Categoria
              </button>
            </div>
          </div>
        )}
      </Form>
    </section>
  );
}
