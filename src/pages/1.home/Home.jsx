
import ScanTag_1 from "../../assets/images/fisgon_scanF1.jpg"
import ScanTag_2 from "../../assets/images/fisgon_scanF2.jpg"
import fisgonLogo from '../../assets/FisgonLogo.svg'

const features = [
  { name: 'Sencillo de instalar', description: 'Descarga la aplicación y la instala en equipos Android con NFC, convirtiéndolo en un lector' },
  { name: 'Puntos o etiquetas', description: 'Son únicos, no se pueden repetir, gracias a su numero único de identificación UID y guardan información del numero de lectura y la fecha y hora en que se realizó' },
  { name: 'Detección y lectura', description: 'Cuando el lector detecta el punto, intercambia información guardando un registro del numero de la lectura, el nombre del punto, su UID, la fecha y hora, el usuario y Nota para novedades encontradas' },
  { name: 'Reportes de lecturas', description: 'Cuando se requiera un reporte de las lecturas realizadas, se genera y se envía al supervisor por correo o por WhatsApp' },
  { name: 'Supervisor y Usuarios habilitados', description: <>El supervisor crea los usuarios, lee las lecturas guardadas en los puntos, modifica los puntos y elimina antiguas lecturas de la base de datos.<br />El usuario o vigilante al empezar su turno debe iniciar sesión para poder hacer las lecturas de los puntos en las rondas</> },
  { name: 'Aplicación para computador del supervisor FisgonPC', description: 'Se instala en un computador de escritorio o portatil y conforma el Centro de Operaciones donde se reciben los reportes de las lecturas realizadas y se programan los puntos (o etiquetas) antes de ser usados.' },
  { name: 'Base de Datos en FisgonPC', description: 'Nos permite en el computador del supervisor analizar y verificar el cumplimiento de las rondas, mediante la incorporación de los reportes recibidos de las lecturas' },
  { name: 'Configuración y manejo de Puntos en FisgonPC', description: 'Podemos inicializar los puntos, asignándoles la ubicación antes de ser instalados. También leer las fechas y horas en que se realizaron las lecturas, borrar la información y reasignarlos' },
]

const Home = () => {
  return (
    <div className="select-none min-h-screen flex flex-col justify-center">
      <div className="mb-2"></div>
      <p className="text-2xl pt-4 font-bold text-gray-900">Fisgon-Route</p>
      <div className="p-4 mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-4">
          <label htmlFor
          ="username" className="text-start block text-sm/6 font-medium text-gray-900">Paradigma</label>
          <div className="mt-1">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <p className="mt-1 p-2 text-start text-sm/6 text-gray-800">Necesidad de tener un lector exclusivamente dedicado para el control de rondas.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-4">
          <label htmlFor="username" className="text-start block text-sm/6 font-medium text-gray-900">Consideraciones</label>
          <div className="mt-1">
            <div className="flex flex-col items-start rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <p className="mt-1 p-2 text-start text-sm/6 text-gray-800">- Actualmente los equipos móviles (entre otros: celulares, tabletas) tienen incorporadas las nuevas y ventajosas tecnologías, las cuales son herramientas 
              que están disponibles para desarrollar aplicaciones que solucionen nuestras necesidades.</p>
              <p className="mt-1 p-2 text-start text-sm/6 text-gray-800">- NFC (Near Field Communication, lo que traducido al español sería Comunicación por Campo Cercano) es una tecnologia de comunicaciones que permite 
              una conexión para el intercambio de datos con otros dispositivos en distancias inferiores a 10 centímetros.</p>
              <p className="mt-1 p-2 text-start text-sm/6 text-gray-800">- NFC intercambia información con alta seguridad y se aplica en: las billeteras digitales, control de acceso, transporte publico; 
              Sincronización con otros dispositivos: audífonos, parlantes; Compartir datos: fotos, archivos, enlaces a paginas web, etc.</p>
              <p className="mt-1 p-2 text-start text-sm/6 text-gray-800">- Las etiquetas (o tags) para NFC son seguras, de bajo costo, son irrepetibles por tener un numero de identificación único (UID) y permiten almacenar información.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-4">
          <label htmlFor="username" className="text-start block text-sm/6 font-medium text-gray-900">Solución</label>
          <div className="mt-1">
            <div className="flex flex-col items-start rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <div className="bg-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-4">
                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
                      <div className="group relative">
                        <img src={ScanTag_1} alt="ScanTag 1" className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-auto" />
                      </div>
                      <div className="group relative">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:py-8">Fisgon-Route</h2>
                        <p className="mt-4 text-gray-500">
                          Es una aplicación desarrollada por Ericel, que utiliza el equipo móvil como lector y las etiquetas NFC como puntos en el Control de Rondas, con seguridad, 
                          confiabilidad y eficiencia, generando registros de las lecturas en una base de datos y dejando una huella digital en las etiquetas que corresponde con el momento de la 
                          lectura para una posible verificación posterior. Incluye Notas de novedades encontradas durante la lectura.
                        </p>
                      </div>
                      <div className="group relative">
                        <img src={ScanTag_2} alt="ScanTag 2" className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Distribuir features en dos columnas */}
              <div className="bg-gray-100">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-8 px-4 py-12 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                  <div className="col-span-2 w-full">
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      {features.map((feature) => (
                        <div key={feature.name} className="border-t border-gray-200 pt-2">
                          <dt className="font-medium text-gray-900">{feature.name}</dt>
                          <dd className="mt-1 text-sm text-gray-500">{feature.description}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>

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