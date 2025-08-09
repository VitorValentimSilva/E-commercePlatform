import FormAuth from "../components/FormAuth";

interface FormAuthProps {
  type: "login" | "register";
}

export default function PagesAuth({ type }: FormAuthProps) {
  const infoForm = {
    login: {
      title: "Faça login no E-commerce Platform",
      description: "Acesse seu painel de administração",
    },
    register: {
      title: "Crie sua conta no E-commerce Platform",
      description: "Comece a gerenciar seu e-commerce agora mesmo",
    },
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <FormAuth
        title={infoForm[type].title}
        description={infoForm[type].description}
        type={type}
      />
    </section>
  );
}
