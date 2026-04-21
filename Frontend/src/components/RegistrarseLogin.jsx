import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function RegistrarseLogin() {
  const navigate = useNavigate()
  const [isRegister, setIsRegister] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/home')
  }

  return (
    <section className='w-screen h-screen flex items-center justify-center bg-gradient-to-br from-red-200 via-white to-red-200'>

      <div className='flex items-center bg-white w-[1000px] h-[580px] rounded-3xl shadow-2xl overflow-hidden'>

        {/* LADO IZQUIERDO — formularios */}
        <div className='overflow-hidden h-[500px] w-[520px] px-10'>

          <div
            className={`flex flex-col transition-transform duration-700 ease-in-out ${
              isRegister ? '-translate-y-1/2' : 'translate-y-0'
            }`}
          >

            {/* FORM LOGIN */}
            <div className='h-[500px] flex flex-col justify-center gap-5'>

              <div className='mb-2'>
                <h2 className='text-2xl font-bold text-gray-800 tracking-tight'>Bienvenido de vuelta</h2>
                <p className='text-sm text-gray-400 mt-1'>Ingresa tus datos para continuar</p>
              </div>

              <form onSubmit={handleSubmit} className='flex flex-col gap-5'>

                <div className='relative group'>
                  <label className='text-xs font-medium text-gray-400 uppercase tracking-widest'>
                    Correo electrónico
                  </label>
                  <input
                    type='email'
                    placeholder='tu@correo.com'
                    className='border-b-2 border-gray-200 pt-1 pb-2 w-full focus:outline-none bg-transparent text-gray-700 placeholder:text-gray-300 transition-colors duration-300 group-focus-within:border-red-400'
                  />
                  <span className='absolute bg-red-400 w-0 h-[2px] bottom-0 left-0 transition-all duration-500 group-focus-within:w-full'></span>
                </div>

                <div className='relative group'>
                  <label className='text-xs font-medium text-gray-400 uppercase tracking-widest'>
                    Contraseña
                  </label>
                  <input
                    type='password'
                    placeholder='••••••••'
                    className='border-b-2 border-gray-200 pt-1 pb-2 w-full focus:outline-none bg-transparent text-gray-700 placeholder:text-gray-300 transition-colors duration-300 group-focus-within:border-red-400'
                  />
                  <span className='absolute bg-red-400 w-0 h-[2px] bottom-0 left-0 transition-all duration-500 group-focus-within:w-full'></span>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <input type='checkbox' id='recordar' className='w-4 h-4 accent-red-400 cursor-pointer' />
                    <label htmlFor='recordar' className='text-sm text-gray-400 cursor-pointer'>Recordar sesión</label>
                  </div>
                  <Link to='/Recuperar' className='text-xs text-red-400 hover:text-red-500 hover:underline transition-colors'>
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <button
                  type='submit'
                  className='bg-red-400 hover:bg-red-500 active:scale-95 text-white rounded-xl py-3 w-full cursor-pointer transition-all duration-300 font-semibold tracking-wide shadow-md shadow-red-200 mt-1'
                >
                  Entrar
                </button>

              </form>

              <p className='text-sm text-gray-400 text-center'>
                ¿No tienes cuenta?{' '}
                <button onClick={() => setIsRegister(true)} className='text-red-400 font-semibold hover:text-red-500 transition-colors cursor-pointer'>
                  Regístrate aquí
                </button>
              </p>

            </div>

            {/* FORM REGISTER */}
            <div className='h-[500px] flex flex-col justify-center gap-4'>

              <div className='mb-1'>
                <h2 className='text-2xl font-bold text-gray-800 tracking-tight'>Crear cuenta</h2>
                <p className='text-sm text-gray-400 mt-1'>Únete y empieza ahora</p>
              </div>

              <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

                <div className='flex gap-4'>
                  <div className='relative group flex-1'>
                    <label className='text-xs font-medium text-gray-400 uppercase tracking-widest'>Nombre</label>
                    <input
                      type='text'
                      placeholder='Juan'
                      className='border-b-2 border-gray-200 pt-1 pb-2 w-full focus:outline-none bg-transparent text-gray-700 placeholder:text-gray-300 transition-colors duration-300 group-focus-within:border-red-400'
                    />
                    <span className='absolute bg-red-400 w-0 h-[2px] bottom-0 left-0 transition-all duration-500 group-focus-within:w-full'></span>
                  </div>
                  <div className='relative group flex-1'>
                    <label className='text-xs font-medium text-gray-400 uppercase tracking-widest'>Apellido</label>
                    <input
                      type='text'
                      placeholder='García'
                      className='border-b-2 border-gray-200 pt-1 pb-2 w-full focus:outline-none bg-transparent text-gray-700 placeholder:text-gray-300 transition-colors duration-300 group-focus-within:border-red-400'
                    />
                    <span className='absolute bg-red-400 w-0 h-[2px] bottom-0 left-0 transition-all duration-500 group-focus-within:w-full'></span>
                  </div>
                </div>

                <div className='relative group'>
                  <label className='text-xs font-medium text-gray-400 uppercase tracking-widest'>Correo electrónico</label>
                  <input
                    type='email'
                    placeholder='tu@correo.com'
                    className='border-b-2 border-gray-200 pt-1 pb-2 w-full focus:outline-none bg-transparent text-gray-700 placeholder:text-gray-300 transition-colors duration-300 group-focus-within:border-red-400'
                  />
                  <span className='absolute bg-red-400 w-0 h-[2px] bottom-0 left-0 transition-all duration-500 group-focus-within:w-full'></span>
                </div>

                <div className='relative group'>
                  <label className='text-xs font-medium text-gray-400 uppercase tracking-widest'>Contraseña</label>
                  <input
                    type='password'
                    placeholder='Mínimo 6 caracteres'
                    className='border-b-2 border-gray-200 pt-1 pb-2 w-full focus:outline-none bg-transparent text-gray-700 placeholder:text-gray-300 transition-colors duration-300 group-focus-within:border-red-400'
                  />
                  <span className='absolute bg-red-400 w-0 h-[2px] bottom-0 left-0 transition-all duration-500 group-focus-within:w-full'></span>
                </div>

                <button
                  type='submit'
                  className='bg-red-400 hover:bg-red-500 active:scale-95 text-white rounded-xl py-3 w-full cursor-pointer transition-all duration-300 font-semibold tracking-wide shadow-md shadow-red-200 mt-1'
                >
                  Crear cuenta
                </button>

              </form>

              <p className='text-sm text-gray-400 text-center'>
                ¿Ya tienes cuenta?{' '}
                <button onClick={() => setIsRegister(false)} className='text-red-400 font-semibold hover:text-red-500 transition-colors cursor-pointer'>
                  Inicia sesión
                </button>
              </p>

            </div>

          </div>
        </div>

        {/* LADO DERECHO — branding */}
        <div className='relative flex flex-col items-center justify-center w-[580px] h-[580px] bg-gradient-to-br from-red-400 to-red-600 overflow-hidden'>

          <div className='absolute w-80 h-80 bg-white opacity-5 rounded-full -top-16 -right-16'></div>
          <div className='absolute w-60 h-60 bg-white opacity-5 rounded-full -bottom-10 -left-10'></div>

          <p className='text-white text-8xl font-black tracking-tighter select-none drop-shadow-lg'>RED</p>
          <div className='w-24 h-[3px] bg-white opacity-60 my-3 rounded-full'></div>
          <p className='text-white text-8xl font-black italic tracking-tighter select-none drop-shadow-lg'>LAB</p>
          <p className='text-white text-sm opacity-60 mt-6 tracking-widest uppercase'>Bienvenido al sistema</p>

        </div>

      </div>
    </section>
  )
}