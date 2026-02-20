import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
          Dashboard Pro
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 drop-shadow-lg">
          Mockup moderno de dashboard profesional con navegación, estadísticas y gráficos
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
        <Link href="/login">
          <div className="group bg-white/20 backdrop-blur-xl rounded-3xl p-8 text-center hover:bg-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/30">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-100">Iniciar Sesión</h3>
            <p className="text-white/80">Accede al dashboard demo</p>
          </div>
        </Link>
        <Link href="/dashboard">
          <div className="group bg-white/20 backdrop-blur-xl rounded-3xl p-8 text-center hover:bg-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/30">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-100">Ver Dashboard</h3>
            <p className="text-white/80">Vista previa completa</p>
          </div>
        </Link>
      </div>
      <p className="text-white/60 mt-12 text-sm">
        Demo: user@example.com / password123 | Proyecto Diario #2
      </p>
    </div>
  )
}