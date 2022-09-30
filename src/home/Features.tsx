import { BoltIcon, HeartIcon, LifebuoyIcon, ScaleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const features = [
  {
    name: '¿Unas fiestas con diana o sin diana?',
    description:
      'Hombre, las fiestas sin diana no son fiestas. Por lo tanto, está bastante claro.',
    icon: ScaleIcon,
  },
  {
    name: '¿Una bicicleta o una barca a pedales?',
    description:
      'Quizá Carlos, un conocido ciclista urbano de Bullas elija la bicicleta. Pero una barca a pedales es una fantasía.',
    icon: LifebuoyIcon,
  },
  {
    name: '¿Una pizza o una tortilla de patatas con pimiento y cebolla?',
    description:
      'No hay pizza que valga frente a una tortilla de patatas con pimiento y cebolla, no hay debate alguno.',
    icon: BoltIcon,
  },
  {
    name: '¿Una pizza o que tú le devuelvas 7 cajas de Valeriana?',
    description:
      'Una pizza gusta a todos. Pero si padeces de ansiedad o trastorno del sueño, 7 cajas de Valeriana te vienen como anillo al dedo.',
    icon: HeartIcon,
  },
]

export default () => {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            ¿Tú que prefieres?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Probablemente te hayan hecho esta pregunta muchas veces. Sin embargo, no siempre respondemos de la misma manera. La clave radica en el variopinto significado del <b>ánimo de lucro</b>.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md primary-yellow-bg text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
