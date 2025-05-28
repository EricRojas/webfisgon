import ScanTag_1 from "../../assets/images/ScanTag_1.jpg"
import ScanTag_2 from "../../assets/images/ScanTag_2.jpg"
import ScanTag_3 from "../../assets/images/ScanTag_3.jpg"
import FRScreen_1 from "../../assets/images/FRScreen_1.jpg"
import FRScreen_2 from "../../assets/images/FRScreen_2.jpg"
import FRScreen_3 from "../../assets/images/FRScreen_3.jpg"
import FRScreen_4 from "../../assets/images/FRScreen_4.jpg"
import FRScreen_5 from "../../assets/images/FRScreen_5.jpg"
import FRScreen_6 from "../../assets/images/FRScreen_6.jpg"
import FRScreen_7 from "../../assets/images/FRScreen_7.jpg"
import FRScreen_8 from "../../assets/images/FRScreen_8.jpg"
import FisgonPCScreen_1b from "../../assets/images/FisgonPCScreen_1b.jpg"
import FisgonPCScreen_2b from "../../assets/images/FisgonPCScreen_2c.jpg"
import FisgonPCScreen_3b from "../../assets/images/FisgonPCScreen_3b.jpg"
import FisgonPCScreen_4b from "../../assets/images/FisgonPCScreen_4c.jpg"

const features = [
  { name: 'Sencillo de instalar', description: 'Descarga la aplicación y la instala en equipos Android con NFC, convirtiéndolo en un lector' },
  { name: 'Puntos o etiquetas', description: 'Son únicos, no se pueden repetir, gracias a su numero único de identificación UID y guardan información del numero de lectura y la fecha y hora en que se realizó' },
  { name: 'Usuarios habilitados', description: 'El supervisor define los usuarios. Al iniciar el turno el usuario debe iniciar sesión para poder hacer las lecturas en las rondas' },
  { name: 'Detección y lectura', description: 'Cuando el lector detecta el punto, intercambia información guardando un registro del numero de la lectura, el nombre del punto, su UID, la fecha y hora y el usuario' },
  { name: 'Reportes de lecturas', description: 'Cuando se requiera un reporte de las lecturas realizadas, se genera y se envía al supervisor por correo o por WhatsApp' },
  { name: 'Aplicación para computador del supervisor', description: 'FisgonPC tiene dos funciones: Configuración y estudio de los puntos (o etiquetas) y una base de datos para el manejo de los reportes recibidos' },
  { name: 'Base de Datos FisgonPC', description: 'Nos permite en el computador del supervisor analizar y verificar el cumplimiento de las rondas, mediante la incorporación de los reportes de las lecturas' },
  { name: 'Configuración y manejo de Puntos', description: 'Podemos inicializar los puntos, asignándoles la ubicación antes de ser instalados. También leer las fechas y horas en que se realizaron las lecturas, borrar la información y reasignarlos' },
]

export default function FisgoRoute() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Fisgon-Route</h2>
          <p className="mt-4 text-gray-500">
            Esta aplicación utiliza el equipo móvil como lector y las etiquetas NFC como puntos en el Control de Rondas, 
            con seguridad, confiabilidad y eficiencia, generando registros de las lecturas en una base de datos y dejando una huella digital 
            en las etiquetas que corresponde con el momento de la lectura para una posible verificación posterior.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            alt="Scan Tag 1"
            src={ScanTag_1}
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Scan Tag 2"
            src={ScanTag_2}
            className="rounded-lg bg-gray-100"
          />
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              alt="FR Screen 1"
              src={FRScreen_1}
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="FR Screen 2"
              src={FRScreen_2}
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="FR Screen 5"
              src={FRScreen_5}
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="FR Screen 6"
              src={FRScreen_6}
              className="rounded-lg bg-gray-100"
            />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              alt="FR Screen 3"
              src={FRScreen_3}
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="FR Screen 4"
              src={FRScreen_4}
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="FR Screen 7"
              src={FRScreen_7}
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="FR Screen 8"
              src={FRScreen_8}
              className="rounded-lg bg-gray-100"
            />
          </div>
            <img
              alt="FisgonPC Screen 1"
              src={FisgonPCScreen_1b}
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="FisgonPC Screen 3"
              src={FisgonPCScreen_3b}
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="FisgonPC Screen 2"
              src={FisgonPCScreen_2b}
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="FisgonPC Screen 4"
              src={FisgonPCScreen_4b}
              className="rounded-lg bg-gray-100"
            />
        </div>
        
      </div>
    </div>
  )
}