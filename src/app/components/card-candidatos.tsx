import { FocusCards } from "@/components/ui/focus-cards";

export function CardCandidatos() {
  const cards = [
    {
      title: "Andrónico Rodríguez",
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
      title: "Decidió No Participar",
      team: "NGP",
      src: "/imagenes2/IMAGENES PAGINA WEB/ngp-noparticipa.webp",
      slug: "ngp",
    },
    {
      title: "Jorge Tuto Quiroga",
      team: "LIBRE",
      src: "/imagenes2/IMAGENES PAGINA WEB/tutito.jpg",
      slug: "libre",
    },
    {
      title: "Jhonny Fernández",
      team: "FP",
      src: "/imagenes2/IMAGENES PAGINA WEB/jhonny-fernandez.jpg",
      slug: "fp",
    },
    {
      title: "Eduardo Del Castillo",
      team: "MAS-IPSP",
      src: "/imagenes2/IMAGENES PAGINA WEB/eduardo-del-castillo.jpg",
      slug: "mas-ipsp",
    },
    {
      title: "Decidió No Participar",
      team: "MORENA",
      src: "/imagenes2/IMAGENES PAGINA WEB/eva-copa.jpg",
      slug: "morena",
    },
     {
      title: "Samuel Doria Medina",
      team: "Alianza Unidad",
      src: "/imagenes2/IMAGENES PAGINA WEB/samuel-doria-medina.jpg",
      slug: "alianza-unidad",
    },
    {
      title: "Rodrigo Paz Pereira",
      team: "PDC",
      src: "/imagenes2/IMAGENES PAGINA WEB/rodrigo-paz.jpg",
      slug: "pdc",
    },
    
   
    
  ];

  return (
    <div id="candidatos-cards" className="w-full">
      <FocusCards cards={cards} />
    </div>
  );
}
