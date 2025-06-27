import { FocusCards } from "@/components/ui/focus-cards";

export function CardCandidatos() {
  const cards = [
    {
      title: "Andronico Rodríguez",
      team: "ALIANZA POPULAR",
      src: "/imagenes2/IMAGENES PAGINA WEB/andronico.jpg",
    },
    {
      title: "Manfred Reyes Villa",
      team: "APB-SUMATE",
      src: "/imagenes2/IMAGENES PAGINA WEB/manfred.jpg",
    },
    {
      title: "Jorge Tuto Quiroga",
      team: "FRI",
      src: "/imagenes2/IMAGENES PAGINA WEB/tutito.jpg",
    },
    {
      title: "Eduardo Del Castillo",
      team: "MAS-IPSP",
      src: "/imagenes2/IMAGENES PAGINA WEB/eduardo-del-castillo.jpg",
    },
    {
      title: "Eva Copa",
      team: "MORENA",
      src: "/imagenes2/IMAGENES PAGINA WEB/eva-copa.jpg",
    },
    {
      title: "Rodrigo Paz Pereira",
      team: "PDC",
      src: "/imagenes2/IMAGENES PAGINA WEB/rodrigo-paz.jpg",
    },
    {
      title: "Jhonny Fernández",
      team: "UCS",
      src: "/imagenes2/IMAGENES PAGINA WEB/jhonny-fernandez.jpg",
    },
    {
      title: "Samuel Doria Medina",
      team: "UN",
      src: "/imagenes2/IMAGENES PAGINA WEB/samuel-doria-medina.jpg",
    },
    {
      title: "Jaime Dunn",
      team: "NGP",
      src: "/imagenes2/IMAGENES PAGINA WEB/jaime-dunn.jpg",
    },
    {
      title: "A confirmar",
      team: "ADN",
      src: "/imagenes2/IMAGENES PAGINA WEB/proximamente-extra.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
