import React from "react";
import { Link } from "react-router-dom";
import logo from './assets/logo-footer.png'

export default () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 light:bg-gray-900">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/" className="flex items-center mb-4 sm:mb-0">
                        <img src={logo} className="mr-3 h-20" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap light:text-white text-gray-900">Anchoas con <b>cafeína</b>.</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 light:text-gray-400">
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6 ">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/roulette" className="mr-4 hover:underline md:mr-6">Ruleta</Link>
                    </li>
                    <li>
                        <Link to="/coupon" className="mr-4 hover:underline md:mr-6 ">Cupón</Link>
                    </li>
                    <li>
                        <a href="https://github.com/lazaropower/anchoasconcafeina.com" className="hover:underline">Código</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto light:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center light:text-gray-400">© {currentYear} <a href="/" className="hover:underline">Fiestas de Bullas</a>. Developed by Lázaro Amor, checkout source code <a href="https://github.com/lazaropower/anchoasconcafeina.com" className="hover:underline">here</a>.
            </span>
        </footer>

    )
}