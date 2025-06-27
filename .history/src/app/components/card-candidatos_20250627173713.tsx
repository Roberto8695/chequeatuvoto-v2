import { FocusCards } from "@/components/ui/focus-cards";
import { candidatosParaCards } from "@/data/partidos-politicos";

export function CardCandidatos() {
  return <FocusCards cards={candidatosParaCards} />;
}
dxf