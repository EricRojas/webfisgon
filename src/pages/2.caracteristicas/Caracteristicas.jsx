
import fisgonLogo from '../../assets/FisgonLogo.svg'
import fisgon_login from "../../assets/images/fisgon_login.jpg"
import fisgon_home from "../../assets/images/fisgon_home.jpg"
import fisgon_scan from "../../assets/images/fisgon_scan.jpg"
import fisgon_lectura from "../../assets/images/fisgon_lectura.jpg"
import fisgon_lecturas from "../../assets/images/fisgon_lecturas.jpg"
import fisgon_csv1 from "../../assets/images/fisgon_csv1.jpg"
import fisgon_csv2 from "../../assets/images/fisgon_csv2.jpg"
import fisgon_supervisor from "../../assets/images/fisgon_supervisor.jpg"
import fisgon_borrarLects from "../../assets/images/fisgon_borrarLects.jpg"
import fisgon_cambiarUbic from "../../assets/images/fisgon_cambiarUbic.jpg"
import fisgon_lecturasTag from "../../assets/images/fisgon_lecturasTag.jpg"
import fisgon_crearUser2 from "../../assets/images/fisgon_crearUser2.jpg"
import fisgon_deleteUser from "../../assets/images/fisgon_deleteUser.jpg"
import fisgonPC_db from "../../assets/images/fisgonPC_db.jpg"
import fisgonPC_formatear from "../../assets/images/fisgonPC_formatear.jpg"
import fisgonPC_etiquetas from "../../assets/images/fisgonPC_etiquetas.jpg"
import fisgonPC_inicial from "../../assets/images/fisgonPC_inicial.jpg"
import fisgon_iniSupervisor from "../../assets/images/fisgon_iniSupervisor.jpg"
import arrow from "../../assets/images/arrow.png"
import star from "../../assets/images/star.png"
import oki from "../../assets/images/oki.png"

export default function FisgoRoute() {
  return (
    <div className="select-none min-h-screen flex flex-col justify-center">
      <div className="mb-2"></div>
      <p className="text-2xl pt-4 font-bold text-gray-900">Fisgon-Route</p>
      <div className="p-4 mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-4">
          <label htmlFor="username" className="text-start block text-sm/6 font-medium text-gray-900">Características</label>
          <div className="mt-1">
            <div className="flex flex-col items-start rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              {/* Imágenes del kit en la parte inferior */}
              <label htmlFor="username" className="p-2 text-start block text-sm/4 font-medium text-gray-800">
                Procedimiento seguido por el Vigilante o Usuario en el lector usando FisgonRoute:
              </label>
              <div className="flex flex-wrap justify-center items-center gap-6 mt-4 p-2">
                {/* Cada paso */}
                <div className="flex flex-col items-center w-24 sm:w-32 mb-2">
                  <img src={fisgon_login} alt="fisgon_login" className="w-full h-auto rounded shadow" />
                  <p className="mt-1 text-center text-xs sm:text-sm text-gray-800">Inicio sesión</p>
                  <img src={arrow} alt="arrow" className="w-5 mx-auto" />
                </div>
                <div className="flex flex-col items-center w-24 sm:w-32 mb-2">
                  <img src={fisgon_home} alt="fisgon home" className="w-full h-auto rounded shadow" />
                  <p className="mt-1 text-center text-xs sm:text-sm text-gray-800">Menú usuario</p>
                  <img src={arrow} alt="arrow" className="w-5 mx-auto" />
                </div>
                <div className="flex flex-col items-center w-24 sm:w-32 mb-2">
                  <img src={fisgon_scan} alt="fisgon scan" className="w-full h-auto rounded shadow" />
                  <p className="mt-1 text-center text-xs sm:text-sm text-gray-800">Lectura punto</p>
                  <img src={arrow} alt="arrow" className="w-5 mx-auto" />
                </div>
                <div className="flex flex-col items-center w-24 sm:w-32 mb-2">
                  <img src={fisgon_lectura} alt="fisgon lectura" className="w-full h-auto rounded shadow" />
                  <p className="mt-1 text-center text-xs sm:text-sm text-gray-800">Datos lectura</p>
                  <img src={arrow} alt="arrow" className="w-5 mx-auto" />
                </div>
                <div className="flex flex-col items-center w-24 sm:w-32 mb-2">
                  <img src={fisgon_lecturas} alt="fisgon lecturas" className="w-full h-auto rounded shadow" />
                  <p className="mt-1 text-center text-xs sm:text-sm text-gray-800">Base de datose</p>
                  <img src={arrow} alt="arrow" className="w-5 mx-auto" />
                </div>
                <div className="flex flex-col items-center w-24 sm:w-32 mb-2">
                  <img src={fisgon_csv1} alt="fisgon csv1" className="w-full h-auto rounded shadow" />
                  <p className="mt-1 text-center text-xs sm:text-sm text-gray-800">Crear Reporte</p>
                  <img src={arrow} alt="arrow" className="w-5 mx-auto" />
                </div>
                <div className="flex flex-col items-center w-24 sm:w-32 mb-2">
                  <img src={fisgon_csv2} alt="fisgon csv2" className="w-full h-auto rounded shadow" />
                  <p className="mt-1 text-center text-xs sm:text-sm text-gray-800">Envio Reporte</p>
                  <img src={star} alt="star" className="w-5 mx-auto" />
                </div>
              </div>
              <br></br>
              <label htmlFor="username" className="p-2 text-start block text-sm/4 font-medium text-gray-800">
                Funciones que puede realizar el Supervisor en el lector usando FisgonRoute:
              </label>
              <div className="flex flex-wrap justify-center items-center gap-6 mt-4 p-2">
                {/* Cada paso */}
                <div className="flex flex-col items-center w-24 sm:w-32 mb-2">
                  <img src={fisgon_iniSupervisor} alt="fisgon_iniSupervisor" className="w-full h-auto rounded shadow" />
                  <p className="mt-1 text-start text-sm/6 text-gray-800">Inicio Supervisor</p>
                  <img src={oki} alt="oki" className="w-5 mx-auto" />
                </div>
                <div className="flex flex-col items-center w-24 sm:w-32 mb-2">
                  <img src={fisgon_supervisor} alt="fisgon_supervisor" className="w-full h-auto rounded shadow" />
                  <p className="mt-1 text-center text-xs sm:text-sm text-gray-800">Menú Supervisor</p>
                  <img src={oki} alt="oki" className="w-5 mx-auto" />
                </div>
                <div className="flex flex-col items-center w-24 sm:w-32 mb-2">
                  <img src={fisgon_crearUser2} alt="fisgon_crearUser2" className="w-full h-auto rounded shadow" />
                  <p className="mt-1 text-start text-sm/6 text-gray-800">Crear Usuario</p>
                  <img src={oki} alt="oki" className="w-5 mx-auto" />
                </div>
                <div className="flex flex-col items-center w-24 sm:w-32 mb-2">
                  <img src={fisgon_deleteUser} alt="fisgon_deleteUser" className="w-full h-auto rounded shadow" />
                  <p className="mt-1 text-start text-sm/6 text-gray-800">Borrar Usuario</p>
                  <img src={oki} alt="oki" className="w-5 mx-auto" />
                </div>
                <div className="flex flex-col items-center w-24 sm:w-32 mb-2">
                  <img src={fisgon_borrarLects} alt="fisgon_borrarLects" className="w-full h-auto rounded shadow" />
                  <p className="mt-1 text-start text-sm/6 text-gray-800">Borrar Lecturas</p>
                  <img src={oki} alt="oki" className="w-5 mx-auto" />
                </div>
                <div className="flex flex-col items-center w-24 sm:w-32 mb-2">
                  <img src={fisgon_lecturasTag} alt="fisgon_lecturasTag" className="w-full h-auto rounded shadow" />
                  <p className="mt-1 text-start text-sm/6 text-gray-800">Leer Puntos</p>
                  <img src={oki} alt="oki" className="w-5 mx-auto" />
                </div>
                <div className="flex flex-col items-center w-24 sm:w-32 mb-2">
                  <img src={fisgon_cambiarUbic} alt="fisgon_cambiarUbic" className="w-full h-auto rounded shadow" />
                  <p className="mt-1 text-start text-sm/6 text-gray-800">Editar Ubicación</p>
                  <img src={oki} alt="oki" className="w-5 mx-auto" />
                </div>
              </div>
              <br></br>
              <label htmlFor="username" className="p-2 text-start block text-sm/4 font-medium text-gray-800">
                Funciones que puede realizar el Supervisor en el Computador usando FisgonPC:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-4 pr-2">
                <div className="flex flex-col items-center w-full mb-2">
                  <img src={fisgonPC_inicial} alt="fisgonPC_inicial" className="w-full h-auto" />
                  <p className="mt-1 text-center text-xs sm:text-sm text-gray-800">Base Datos</p>
                  <img src={oki} alt="oki" className="w-5 mx-auto" />
                </div>
                <div className="flex flex-col items-center w-full mb-2">
                  <img src={fisgonPC_db} alt="fisgonPC_db" className="w-full h-auto" />
                  <p className="mt-1 text-center text-xs sm:text-sm text-gray-800">Revisar Etiquetas</p>
                  <img src={oki} alt="oki" className="w-5 mx-auto" />
                </div>
                <div className="flex flex-col items-center w-full mb-2">
                  <br></br>
                  <img src={fisgonPC_etiquetas} alt="fisgonPC_etiquetas" className="w-full h-auto" />
                  <br></br>
                  <p className="mt-1 text-center text-xs sm:text-sm text-gray-800">Editar Etiquetas</p>
                  <img src={oki} alt="oki" className="w-5 mx-auto" />
                </div>
                <div className="flex flex-col items-center w-full mb-2">
                  <br></br>
                  <img src={fisgonPC_formatear} alt="fisgonPC_formatear" className="w-full h-auto" />
                  <br></br>
                  <p className="mt-1 text-center text-xs sm:text-sm text-gray-800">Formatear Etiquetas</p>
                  <img src={oki} alt="oki" className="w-5 mx-auto" />
                </div>
              </div>
              <br></br>
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