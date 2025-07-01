import { FocusCards } from "@/components/ui/focus-cards";

export function CardCandidatos() {
  const cards = [
    {
      title: "Andronico Rodríguez",
      team: "ALIANZA POPULAR",
      src: "/imagenes2/IMAGENES PAGINA WEB/andronico.jpg",
      slug: "alianza-popular",
    },
    {
      title: "A confirmar",
      team: "ADN",
      src: "/imagenes2/IMAGENES PAGINA WEB/proximamente-extra.jpg",
      slug: "adn",
    },
    {
      title: "Manfred Reyes Villa",
      team: "APB-SUMATE",
      src: "/imagenes2/IMAGENES PAGINA WEB/Manfred.jpg",
      slug: "apb-sumate",
    },
    {
      title: "Jaime Dunn",
      team: "NGP",
      src: "/imagenes2/IMAGENES PAGINA WEB/jaime-dunn.jpg",
      slug: "ngp",
    },
    {
      title: "Jorge Tuto Quiroga",
      team: "FRI",
      src: "/imagenes2/IMAGENES PAGINA WEB/tutito.jpg",
      slug: "fri",
    },
    {
      title: "Jhonny Fernández",
      team: "UCS",
      src: "/imagenes2/IMAGENES PAGINA WEB/jhonny-fernandez.jpg",
      slug: "ucs",
    },
    {
      title: "Eduardo Del Castillo",
      team: "MAS-IPSP",
      src: "/imagenes2/IMAGENES PAGINA WEB/eduardo-del-castillo.jpg",
      slug: "mas-ipsp",
    },
    {
      title: "Eva Copa",
      team: "MORENA",
      src: "/imagenes2/IMAGENES PAGINA WEB/eva-copa.jpg",
      slug: "morena",
    },
    {
      title: "Rodrigo Paz Pereira",
      team: "PDC",
      src: "/imagenes2/IMAGENES PAGINA WEB/rodrigo-paz.jpg",
      slug: "pdc",
    },
    
    {
      title: "Samuel Doria Medina",
      team: "UN",
      src: "/imagenes2/IMAGENES PAGINA WEB/samuel-doria-medina.jpg",
      slug: "un",
    },
    
  ];

  return <FocusCards cards={cards} />;
}
