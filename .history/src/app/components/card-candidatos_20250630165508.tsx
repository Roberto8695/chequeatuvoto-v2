import { FocusCards } from "@/components/ui/focus-cards";
import { candidatosParaCards } from "@/data/partidos-politicos";

export function CardCandidatos() {
  // Usar los datos centralizados de partidos-politicos.ts
  const cards = candidatosParaCards.map(candidato => ({
    title: candidato.title,
    team: candidato.team,
    src: candidato.src,
    slug: candidato.slug,
    partido: candidato.partido,
  }));

  return <FocusCards cards={cards} />;
}
