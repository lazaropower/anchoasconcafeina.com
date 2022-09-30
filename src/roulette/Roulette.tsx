import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const data = [
  { option: 'Arriquitáun a grito pelao', style: { backgroundColor: 'white', textColor: 'black' }},
  { option: 'Chupito con tu pana', style: { backgroundColor: 'green', textColor: 'black' }},
  { option: 'Hacer un Hidalgo', style: { backgroundColor: 'black', textColor: 'white' }},
  { option: 'Premio especial Barraca 8', style: { backgroundColor: 'yellow', textColor: 'black' }},
  { option: 'Bailar una sevillana', style: { backgroundColor: 'blue', textColor: 'white' }},
  { option: 'Preguntar en barraca 8 por Miluca', style: { backgroundColor: 'red', textColor: 'white' }},
  { option: 'Subir foto con tu crush', style: { backgroundColor: 'brown', textColor: 'white' }},
  { option: 'Chupito con tu pana', style: { backgroundColor: 'green', textColor: 'black' }},
  { option: 'Hacer un Hidalgo', style: { backgroundColor: 'black', textColor: 'white' }},
  { option: 'Premio especial Barraca 8', style: { backgroundColor: 'yellow', textColor: 'black' }},
  { option: '10 flexiones', style: { backgroundColor: 'blue', textColor: 'white' }},
  { option: 'Conseguir pegatina', style: { backgroundColor: 'red', textColor: 'white' }},
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
    <Navbar />
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
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link
              to='/'
              className="inline-flex items-center justify-center rounded-md border border-transparent px-5 py-3 text-base font-medium primary-yellow-bg text-black hover:bg-yellow-600"
            >
              Volver atrás
            </Link>
          </div>
        </div>
      </div>
      <div className="centered">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          fontSize={13}

          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
      </div>
    </>
  )
}