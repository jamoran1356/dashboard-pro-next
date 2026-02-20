'use client';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl z-40">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Dashboard Pro</h2>
          <nav className="space-y-4">
            <a href="#" className="flex items-center p-4 bg-blue-100 rounded-2xl font-semibold text-blue-800">
              📊 Dashboard
            </a>
            <a href="#" className="flex items-center p-4 hover:bg-gray-100 rounded-2xl transition-all duration-200">
              👥 Usuarios
            </a>
            <a href="#" className="flex items-center p-4 hover:bg-gray-100 rounded-2xl transition-all duration-200">
              ⚙️ Ajustes
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="flex items-center">
              <div className="p-4 bg-blue-100 rounded-2xl mr-4">
                👥
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Usuarios Activos</p>
                <p className="text-4xl font-bold text-gray-900">247</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="flex items-center">
              <div className="p-4 bg-green-100 rounded-2xl mr-4">
                💰
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Ingresos Mes</p>
                <p className="text-4xl font-bold text-gray-900">$12,450</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="flex items-center">
              <div className="p-4 bg-purple-100 rounded-2xl mr-4">
                📈
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Crecimiento</p>
                <p className="text-4xl font-bold text-green-600">+28%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Graph */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Actividad Semanal</h3>
          <div className="h-96 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
            <p className="text-xl text-gray-500 font-semibold">📊 Gráfico Mockup - Línea crecimiento ↑</p>
          </div>
        </div>
      </div>
    </div>
  )
}