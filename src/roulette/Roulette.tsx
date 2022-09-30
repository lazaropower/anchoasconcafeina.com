import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import Hero from './Hero';

const data = [
  { option: 'Anchoas con cafeína' },
  { option: 'Picando billete' },
  { option: 'Sin ánimo de lucro' },
  { option: 'Cernícalos marinos' },
  { option: 'Búfalos alquimistas' },
  { option: 'Elefantes alpinos' },
  { option: 'Chirimollas africanas' },
  { option: 'Altramuces japoneses' },
]

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }

  return (
    <>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">¿Estás preparado?</span>
          <span className="block primary-yellow">Pulsa en girar y verás tu premio o reto.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <button onClick={handleSpinClick}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-stone-700 px-5 py-3 text-base font-medium text-white hover:bg-stone-600"
            >
              GIRAR
            </button>
          </div>
        </div>
      </div>
      <div className="centered">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          fontSize={15}

          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
      </div>
    </>
  )
}