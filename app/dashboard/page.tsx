'use client';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-white/80 backdrop-blur-xl shadow-2xl z-50 border-r border-gray-200">
        <div className="p-8">
          <h2 className="text-3xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-10">
            Dashboard Pro
          </h2>
          <nav className="space-y-3">
            <a href="#" className="flex items-center p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              📊 Dashboard
            </a>
            <a href="#" className="flex items-center p-4 hover:bg-gray-100 rounded-2xl transition-all duration-200 hover:shadow-md">
              👥 Usuarios
            </a>
            <a href="#" className="flex items-center p-4 hover:bg-gray-100 rounded-2xl transition-all duration-200 hover:shadow-md">
              💼 Facturación
            </a>
            <a href="#" className="flex items-center p-4 hover:bg-gray-100 rounded-2xl transition-all duration-200 hover:shadow-md">
              ⚙️ Ajustes
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-72 p-10">
        <header className="mb-12">
          <h1 className="text-5xl font-black bg-gradient-to-r from-gray-800 to-slate-700 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-xl text-gray-600 mt-3">Bienvenido de vuelta</p>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="group bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-blue-200">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-blue-100 rounded-2xl group-hover:bg-blue-200 transition-all duration-300">
                👥
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Usuarios Activos</h3>
            <p className="text-5xl font-black text-blue-600">247</p>
            <p className="text-green-600 font-semibold mt-2">↑ 18% vs mes anterior</p>
          </div>
          <div className="group bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-green-200">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-green-100 rounded-2xl group-hover:bg-green-200 transition-all duration-300">
                💰
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Ingresos Mes</h3>
            <p className="text-5xl font-black text-green-600">$12,450</p>
            <p className="text-green-600 font-semibold mt-2">↑ 32% vs mes anterior</p>
          </div>
          <div className="group bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-purple-200">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-purple-100 rounded-2xl group-hover:bg-purple-200 transition-all duration-300">
                📈
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Crecimiento</h3>
            <p className="text-5xl font-black text-purple-600">+28%</p>
            <p className="text-green-600 font-semibold mt-2">Mejor mes histórico</p>
          </div>
        </div>

        {/* Graph */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
          <div className="flex items-center mb-8">
            <h3 className="text-3xl font-black text-gray-800 mr-4">Actividad Semanal</h3>
            <div className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
              ↑ 24% vs semana pasada
            </div>
          </div>
          <div className="h-96 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl border-2 border-dashed border-gray-300 flex items-center justify-center shadow-inner">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-2xl font-bold text-gray-600 mb-2">Gráfico de Líneas</p>
              <p className="text-lg text-gray-500">Actividad crecimiento semanal mockup</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}