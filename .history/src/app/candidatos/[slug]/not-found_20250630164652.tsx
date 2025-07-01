import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <h2 className="text-3xl font-semibold text-gray-700">
            Partido no encontrado
          </h2>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            El partido político que buscas no existe o ha sido movido.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Volver al inicio
          </Link>
          
          <p className="text-gray-500">
            o explora todos los{' '}
            <Link 
              href="/#candidatos" 
              className="text-blue-600 hover:text-blue-700 underline font-medium"
            >
              candidatos disponibles
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
