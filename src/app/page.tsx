 'use client';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      {/* Mock Login */}
      <div className="max-w-md mx-auto mb-12 p-8 bg-white rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Login Mockup</h1>
        <input className="w-full p-3 border border-gray-300 rounded-lg mb-4" placeholder="Email: jesus@moran.com" />
        <input className="w-full p-3 border border-gray-300 rounded-lg mb-6" placeholder="Pass: monica2026" type="password" />
        <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700">Entrar</button>
      </div>

      {/* Mock Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Nav Mock */}
        <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-6">Navegación</h2>
          <nav className="space-y-4">
            <button className="w-full text-left p-3 bg-blue-100 rounded-lg font-medium">📊 Dashboard</button>
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded-lg">👥 Usuarios</button>
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded-lg">⚙️ Ajustes</button>
          </nav>
        </div>

        {/* Stats & Graphs */}
        <div className="lg:col-span-3 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-3xl font-bold text-blue-600">5</h3>
              <p className="text-gray-600">Usuarios Activos</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-3xl font-bold text-green-600">$2,450</h3>
              <p className="text-gray-600">Ingresos Mes</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-3xl font-bold text-purple-600">↑12%</h3>
              <p className="text-gray-600">Crecimiento</p>
            </div>
          </div>

          {/* Mock Graph */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Gráfico Actividad</h3>
            <div className="h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Línea mock: Actividad semanal ↑</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}