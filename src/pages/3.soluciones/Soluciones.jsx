import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import ScanTag_1 from "../../assets/images/ScanTag_1.jpg"
import kitFisgon3 from "../../assets/images/kitFisgon3.jpg"
import kitFisgon1 from "../../assets/images/kitFisgon1.jpg"
import kitFisgon2 from "../../assets/images/kitFisgon2.jpg"
import FisgonRouteX3 from "../../assets/images/FisgonRouteX3_1.jpg"
import FisgonPCScreen1 from "../../assets/images/FisgonPCScreen_1b.jpg"

const product = {
  name: 'Kit FisgonRoute',
  name1: 'Kit FisgonRoute1',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
  ],
  images: [
    {
      src: kitFisgon2,
      alt: 'Lector NFC conexion USB.',
    },
    {
      src: FisgonPCScreen1,
      alt: 'Fisgon PC App.',
    },
    {
      src: FisgonRouteX3,
      alt: 'FisgonRoute App.',
    },
    {
      src: kitFisgon1,
      alt: 'Siete tags NFC de FisgonRoute.',
    },
  ],

  description:
    'El kit o paquete básico esta compuesto por los accesorios mostrados en las fotos. Si requieren mas elementos se venden por separado.',
  highlights: [
    'Aplicación para el equipo móvil FisgonRoute',
    'Aplicación para el computador de escritorio o portátil FisgonPC',
    'Seis (6) puntos (etiquetas o tags) tipo llavero NFC',
    'Un punto tipo carnet PVC',
    'Un lector NFC con entrada USB',
  ],
  details:
    'Cada punto tiene un UID que lo hace único e irrepetible. Los seis puntos tipo llavero tienen diferentes colores.',
}

const Soluciones = () => {
  return (
    <div className="bg-white">
      <div className="pt-6">
      <p className="text-2xl font-semibold text-gray-900">Paquete básico Fisgon-Route</p>
        {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="grid grid-cols-1 gap-y-4 lg:hidden">
              <img
                alt={product.images[0].alt}
                src={product.images[0].src}
                className="w-full rounded-lg object-cover"
              />
              <img
                alt={product.images[1].alt}
                src={product.images[1].src}
                className="w-full rounded-lg object-cover"
              />
              <img
                alt={product.images[2].alt}
                src={product.images[2].src}
                className="w-full rounded-lg object-cover"
              />
            </div>
            <img
              alt={product.images[0].alt}
              src={product.images[0].src}
              className="hidden size-full rounded-lg object-cover lg:block"
            />
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <img
                alt={product.images[1].alt}
                src={product.images[1].src}
                className="aspect-3/2 w-full rounded-lg object-cover"
              />
              <img
                alt={product.images[2].alt}
                src={product.images[2].src}
                className="aspect-3/2 w-full rounded-lg object-cover"
              />
            </div>
            <img
              alt={product.images[3].alt}
              src={product.images[3].src}
              className="aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto"
            />
          </div>
              </div>
              <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h2 className="text-2xl font-bold tracking-tight text-start text-gray-900 sm:text-3xl">{product.name}</h2>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <img
                        alt="Kit Fisgon 3"
                        src={kitFisgon3}
                        className="rounded-lg bg-gray-100"
                      />
            <p className="text-3xl tracking-tight text-gray-900">{product.name1}</p>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            {/* Description and details */}
            <div>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10 text-start">
              <h3 className="text-sm font-medium text-gray-900">Incluye:</h3>

              <div className="mt-4 text-start">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 text-start">
              <h2 className="text-sm font-medium text-gray-900">Detalles</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Soluciones