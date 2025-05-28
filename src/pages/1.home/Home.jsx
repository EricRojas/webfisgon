import fisgonLogo from '../../assets/FisgonLogo.svg'

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center">
      <div className="mb-4"></div>
      <p className="text-2xl font-semibold text-gray-900">Fisgon-Route</p>
      <div className="p-4 mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-4">
          <label htmlFor
          ="username" className="text-start block text-sm/6 font-medium text-gray-900">Paradigma</label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <p className="mt-1 p-4 text-start text-sm/6 text-gray-800">Necesidad de tener un lector exclusivamente dedicado para el control de rondas.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-4">
          <label htmlFor="username" className="text-start block text-sm/6 font-medium text-gray-900">Consideraciones</label>
          <div className="mt-2">
            <div className="flex flex-col items-start rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <p className="mt-1 p-4 text-start text-sm/6 text-gray-800">- Actualmente los equipos móviles (entre otros: celulares, tabletas) tienen incorporadas las nuevas y ventajosas tecnologías, las cuales son herramientas 
              que están disponibles para desarrollar aplicaciones que solucionen nuestras necesidades.</p>
              <p className="mt-1 p-4 text-start text-sm/6 text-gray-800">- NFC (Near Field Communication, lo que traducido al español sería Comunicación por Campo Cercano) es una tecnologia de comunicaciones que permite 
              una conexión para el intercambio de datos con otros dispositivos en distancias inferiores a 10 centímetros.</p>
              <p className="mt-1 p-4 text-start text-sm/6 text-gray-800">- NFC intercambia inhtmlFor
              mación con alta seguridad y se aplica en: las billeteras digitales, control de acceso, transporte publico; 
              Sincronización con otros dispositivos: audífonos, parlantes; Compartir datos: fotos, archivos, enlaces a paginas web, etc.</p>
              <p className="mt-1 p-4 text-start text-sm/6 text-gray-800">- Las etiquetas (o tags) para NFC son seguras, de bajo costo, tienen un numero de identificación único (UID) y permiten almacenar inhtmlFor
              mación.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-4">
          <label htmlFor="username" className="text-start block text-sm/6 font-medium text-gray-900">Solución</label>
          <div className="mt-2">
            <div className="flex flex-col items-start rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <p className="mt-1 p-4 text-start text-sm/6 text-gray-800">- Fisgon-Route es una aplicación desarrollada por Ericel, que utiliza el equipo móvil como lector y las etiquetas NFC como puntos en el Control de Rondas, con seguridad, 
              confiabilidad y eficiencia, generando registros de las lecturas en una base de datos y dejando una huella digital en las etiquetas que corresponde con el momento de la lectura para una posible verificación posterior.</p>
              <p className="mt-1 p-4 text-start text-sm/6 text-gray-800">- Fisgon-Route genera reportes que se pueden enviar por Whatsapp o por correo electrónico, los cuales se pueden descargar y analizar en la otra 
              aplicación FisgonPC, que hace parte del paquete y se instala en cualquier computador de escritorio o portatil, para estudiar y analizar la informacion por un supervisor o administrador.</p>
            </div>
          </div>
        </div>
      </div>
        <div className="logo-container flex justify-center items-center">
          <img src={fisgonLogo} className="logo fisgon" alt="Fisgon logo" />
        </div>
    </div>
    
  )
}

export default Home