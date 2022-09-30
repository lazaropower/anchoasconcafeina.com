import React from 'react';
import Navbar from './Navbar';
import ScratchCard from 'react-scratch-coupon';
import couponCover from './assets/cupon-cover3.png';
import { Link } from 'react-router-dom';

const getCoupon = () => {
    const picaBillete = Math.random() < 0.25;
    if (picaBillete) {
        return 'SI vas a picar billete 😢';
    }
    return 'NO vas a picar billete 😁';
}

const renderCoupon = () => {
    return (
        <ScratchCard cover={couponCover}>
            <form className="form" >
                <h1 className="text-2xl text-semibold pt-6">{getCoupon()}</h1>
            </form>
        </ScratchCard>
    )
}

export default () => {
    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">¿Picaré billete esta noche? ⛏️💶</span>
                    <span className="block primary-yellow">Rasca tu cupón y descúbrelo.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a
                            href="/coupon"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-stone-700 px-5 py-3 text-base font-medium text-white hover:bg-stone-600"
                        >
                            Nuevo cupón
                        </a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center rounded-md border border-transparent px-5 py-3 text-base font-medium primary-yellow-bg text-black hover:bg-yellow-600"
                        >
                            Volver atrás
                        </Link>
                    </div>
                </div>
            </div>
            {renderCoupon()}
        </>
    );
}