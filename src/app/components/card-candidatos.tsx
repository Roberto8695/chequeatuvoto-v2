import { FocusCards } from "@/components/ui/focus-cards";

export function CardCandidatos() {
  const cards = [
    {
      title: "Andrónico Rodríguez",
      team: "ALIANZA POPULAR",
      src: "/imagenes2/IMAGENES PAGINA WEB/andronico.webp",
      slug: "alianza-popular",
    },
    {
      title: "Pavel Antonio Aracena Vargas",
      team: "ADN",
      src: "/imagenes2/IMAGENES PAGINA WEB/pavel.webp",
      slug: "adn",
    },
    {
      title: "Manfred Reyes Villa",
      team: "APB-SUMATE",
      src: "/imagenes2/IMAGENES PAGINA WEB/Manfred.webp",
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
      src: "/imagenes2/IMAGENES PAGINA WEB/tutito.webp",
      slug: "libre",
    },
    {
      title: "Jhonny Fernández",
      team: "FP",
      src: "/imagenes2/IMAGENES PAGINA WEB/jhonny-fernandez.webp",
      slug: "fp",
    },
    {
      title: "Eduardo Del Castillo",
      team: "MAS-IPSP",
      src: "/imagenes2/IMAGENES PAGINA WEB/eduardo-del-castillo.webp",
      slug: "mas-ipsp",
    },
    {
      title: "Decidió No Participar",
      team: "MORENA",
      src: "/imagenes2/IMAGENES PAGINA WEB/Morena.webp",
      slug: "morena",
    },
     {
      title: "Samuel Doria Medina",
      team: "Alianza Unidad",
      src: "/imagenes2/IMAGENES PAGINA WEB/samuel-doria-medina.webp",
      slug: "alianza-unidad",
    },
    {
      title: "Rodrigo Paz Pereira",
      team: "PDC",
      src: "/imagenes2/IMAGENES PAGINA WEB/rodrigo-paz.webp",
      slug: "pdc",
    },
    
   
    
  ];

  return (
    <div id="candidatos-cards" className="w-full">
      <FocusCards cards={cards} />
    </div>
  );
}
