import React from "react"

export default () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">¿Estás preparado?</span>
          <span className="block primary-yellow">Pulsa en girar y verás tu premio o reto.</span>
        </h2>
      </div>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <button
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              Girar
            </button>
          </div>
        </div>
    </div>
  )
}
