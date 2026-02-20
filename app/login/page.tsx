'use client';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full mx-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Iniciar Sesión</h1>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              placeholder="user@example.com"
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
            <input 
              type="password" 
              placeholder="password123"
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5">
            Entrar al Dashboard
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-6 text-center">
          Demo mockup - Proyecto Diario #2
        </p>
      </div>
    </div>
  )
}