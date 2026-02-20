 'use client';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-md w-full mx-4 p-12 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
            Dashboard Pro
          </h1>
          <p className="text-white/70 text-lg">Inicia sesión para continuar</p>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-3">Email</label>
            <input 
              type="email"
              placeholder="user@example.com"
              className="w-full p-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:ring-4 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-3">Contraseña</label>
            <input 
              type="password"
              placeholder="password123"
              className="w-full p-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:ring-4 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-5 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-[1.02] transform"
          >
            Entrar al Dashboard
          </button>
        </form>
        <p className="text-center mt-8 text-white/50 text-sm">
          Demo mockup - user@example.com / password123
        </p>
      </div>
    </div>
  )
}