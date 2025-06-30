import { FocusCards } from "@/components/ui/focus-cards";
import { candidatosParaCards } from "@/data/partidos-politicos";

export function CardCandidatos() {
  // Usar datos centralizados con imágenes locales como fallback
  const cards = candidatosParaCards.map(candidato => ({
    title: candidato.title,
    team: candidato.team,
    src: candidato.src,
    slug: candidato.slug, // Incluir slug para navegación
    partido: candidato.partido,
  }));

  return <FocusCards cards={cards} />;
}
