import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada - Chequea tu voto",
  description: "La página que buscas no existe. Regresa al inicio para continuar informándote sobre el proceso electoral.",
};

export default function Layout404({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden">
      {children}
    </div>
  );
}