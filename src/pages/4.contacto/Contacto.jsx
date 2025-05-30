//import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

const ContactForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    empresa: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    departamento: '',
    pais: 'Colombia',
    mensaje: '',
  });

  // State to manage validation errors
  const [errors, setErrors] = useState({});

// Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

// Validate form data
  const validateInputs = () => {
    const newErrors = {};
    // Required fields
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio.';
    if (!formData.apellido.trim()) newErrors.apellido = 'El apellido es obligatorio.';
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido.';
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es obligatorio.';
    } else if (!/^\d+$/.test(formData.telefono)) {
      newErrors.telefono = 'El teléfono debe contener solo números.';
    }
    if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es obligatorio.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const [submittedData, setSubmittedData] = useState(null);

  // Submit form data to API
  const submitToAPI = async (e) => {
    e.preventDefault();
    if (validateInputs()){
        const Invoke_URL = "https://a75ue5vhtj.execute-api.us-east-1.amazonaws.com/InitialStage";
        const API_URL = "https://a75ue5vhtj.execute-api.us-east-1.amazonaws.com/InitialStage/contactUs";
        console.log('Form Data Submitted:', formData);
        //setSubmittedData(formData); // Save the submitted data to state
        //alert('Formulario enviado y esperando respuesta:\n' + JSON.stringify(formData, null, 2));
        /*
        // Custom alert with duration of 3 second
        const aviso = window.alert;
        setTimeout(() => {
          if (window.confirm) window.confirm = aviso; // restore if needed
        }, 1000);
        // Custom aviso con duración de 1 segundo
        const avisoDiv = document.createElement('div');
        avisoDiv.textContent = 'Formulario enviado y esperando respuesta:\n' + JSON.stringify(formData, null, 2);
        avisoDiv.style.position = 'fixed';
        avisoDiv.style.top = '20px';
        avisoDiv.style.left = '50%';
        avisoDiv.style.transform = 'translateX(-50%)';
        avisoDiv.style.background = '#4f46e5';
        avisoDiv.style.color = '#fff';
        avisoDiv.style.padding = '16px 24px';
        avisoDiv.style.borderRadius = '8px';
        avisoDiv.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
        avisoDiv.style.zIndex = 9999;
        document.body.appendChild(avisoDiv);
        setTimeout(() => {
          document.body.removeChild(avisoDiv);
        }, 3000);
        */
        try {
            const response = await fetch(API_URL, {
                //mode: 'no-cors',
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert("¡Formulario enviado con éxito!");
                console.log('¡Formulario enviado con éxito!');

            // Reset form data
            setFormData({
                empresa: '',
                nombre: '',
                apellido: '',
                email: '',
                telefono: '',
                direccion: '',
                ciudad: '',
                departamento: '',
                pais: 'Colombia',
                mensaje: '',
            });

            } else {
                alert("Error al enviar el formulario.");
                console.error("Error al enviar el formulario:", response.statusText);
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            alert("Error al enviar el formulario: " + error.message);
        }
    } else {
        alert("Por favor, corrija los errores en el formulario.");
    }
  };

// Render the form
  return (
    <div className="bg-white">
    <form id='contact-form' onSubmit={submitToAPI}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
        <div className="mb-4"></div>
          <h2 className="text-base/7 font-semibold text-gray-900">Contacto</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Gracias por su interés en Fisgon-Route. Por favor, complete el siguiente formulario y nos pondremos en contacto con usted lo antes posible.
            <br></br>
          </p>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          {/* Empresa */}
          <div className="sm:col-span-4">
              <label htmlFor="empresa" className="block text-sm/6 font-medium text-gray-900">
                Empresa
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    placeholder="Opcional"
                    value={formData.empresa}
                    onChange={handleChange}
                    maxLength={50} // Limit to 50 characters
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Nombre */}
            <div className="sm:col-span-3">
              <label htmlFor="nombre" className="block text-sm/6 font-medium text-gray-900">
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Obligatorio"
                  value={formData.nombre}
                  onChange={handleChange}
                  maxLength={20} // Limit to 20 characters
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            {/* Apellido */}
            <div className="sm:col-span-3">
              <label htmlFor="apellido" className="block text-sm/6 font-medium text-gray-900">
                Apellido
              </label>
              <div className="mt-2">
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  autoComplete="apellido"
                  placeholder="Obligatorio"
                  value={formData.apellido}
                  onChange={handleChange}
                  maxLength={20} // Limit to 20 characters
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Correo Electrónico */}
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Correo electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Obligatorio"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={50} // Limit to 50 characters
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Telefono */}
            <div className="sm:col-span-4">
              <label htmlFor="telefono" className="block text-sm/6 font-medium text-gray-900">
                Teléfono
              </label>
              <div className="mt-2">
                <input
                  id="telefono"
                  name="telefono"
                  type="text"
                  autoComplete="tel"
                  placeholder="Obligatorio"
                  value={formData.telefono}
                  onChange={handleChange}
                  maxLength={15} // Limit to 15 characters
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Dirección */}
            <div className="col-span-full">
              <label htmlFor="direccion" className="block text-sm/6 font-medium text-gray-900">
                Dirección
              </label>
              <div className="mt-2">
                <input
                  id="direccion"
                  name="direccion"
                  type="text"
                  autoComplete="direccion"
                  placeholder="Opcional"
                  value={formData.direccion}
                  onChange={handleChange}
                  maxLength={50} // Limit to 50 characters
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Ciudad */}
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="ciudad" className="block text-sm/6 font-medium text-gray-900">
                Ciudad
              </label>
              <div className="mt-2">
                <input
                  id="ciudad"
                  name="ciudad"
                  type="ciudad"
                  autoComplete="city-name"
                  placeholder="Opcional"
                  value={formData.ciudad}
                  onChange={handleChange}
                  maxLength={20} // Limit to 20 characters
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Departamento */}
            <div className="sm:col-span-2">
              <label htmlFor="departamento" className="block text-sm/6 font-medium text-gray-900">
                Departamento
              </label>
              <div className="mt-2">
                <input
                  id="departamento"
                  name="departamento"
                  type="text"
                  autoComplete="department-name"
                  placeholder="Opcional"
                  value={formData.departamento}
                  onChange={handleChange}
                  maxLength={20} // Limit to 20 characters
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* País */}
            <div className="sm:col-span-2">
              <label htmlFor="pais" className="block text-sm/6 font-medium text-gray-900">
                País
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="pais"
                  name="pais"
                  autoComplete="country-name"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>Colombia</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje */}
        <div className="col-span-full">
              <label htmlFor="mensaje" className="block text-sm/6 font-medium text-gray-900">
                Mensaje
              </label>
              <div className="mt-2">
                <textarea
                  id="mensaje"
                  name="mensaje"
                  type="text"
                  placeholder="Obligatorio"
                  rows={3}
                  value={formData.mensaje}
                  onChange={handleChange}
                  maxLength={500} // Limit to 500 characters
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <p className="mt-3 text-sm/6 text-gray-600">Déjenos saber el propósito de su contacto a través de este mensaje</p>
            </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-700">
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Enviar
        </button>
      </div>
      <div className="mb-4"></div>
      <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Contacto</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
          Tels. +57: (601)3590025, 310-3011575, Bogota D. C. Colombia. v.1.2          </p>
      </div>
      
      {/* Display submitted data in Contacto form */}
      {/*}
      <div>
        {submittedData && (
          <div className="mt-6">
            <h3>Submitted Data:</h3>
            <pre>{JSON.stringify(submittedData, null, 2)}</pre>
          </div>
        )}
      </div> */}
      <div className="mb-2"></div>
    </form>
    </div>
  )
}

export default ContactForm