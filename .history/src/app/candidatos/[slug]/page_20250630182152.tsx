import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SectionCandidatos from '@/app/components/sectioncandidatos';
import { getPartidoBySlug, partidosPoliticos } from '@/data/partidos-politicos';

// Generar metadata dinámicamente
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const partido = getPartidoBySlug(slug);
  
  if (!partido) {
    return {
      title: 'Partido no encontrado - Chequea tu Voto',
      description: 'El partido político solicitado no existe.'
    };
  }

  return {
    title: `${partido.nombre} (${partido.sigla}) - Chequea tu Voto`,
    description: `Conoce al binomio presidencial de ${partido.nombre}: ${partido.presidente} y ${partido.vicepresidente}. Información completa sobre este partido político.`,
    keywords: [
      partido.nombre,
      partido.sigla,
      partido.presidente,
      partido.vicepresidente,
      'elecciones bolivia',
      'candidatos presidenciales',
      'partidos políticos bolivia'
    ],
    openGraph: {
      title: `${partido.nombre} - ${partido.presidente}`,
      description: `${partido.presidente} y ${partido.vicepresidente} - Binomio presidencial de ${partido.sigla}`,
      images: [
        {
          url: partido.imagenes.presidente,
          width: 800,
          height: 600,
          alt: `${partido.presidente} - ${partido.sigla}`
        }
      ]
    }
  };
}

// Generar rutas estáticas para todos los partidos
export async function generateStaticParams() {
  return partidosPoliticos.map((partido) => ({
    slug: partido.slug,
  }));
}

interface CandidatoPageProps {
  params: {
    slug: string;
  };
}

export default function CandidatoPage({ params }: CandidatoPageProps) {
  const partido = getPartidoBySlug(params.slug);

  // Si el partido no existe, mostrar 404
  if (!partido) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <SectionCandidatos slug={params.slug} />
    </main>
  );
}