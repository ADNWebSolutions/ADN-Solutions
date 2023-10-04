import React from 'react';
import logo from '../assets/logo-ico.png';
import { useNavbar } from '../services/useNavbar';

function Header({ isDark, setIsDark }) {
    const { isOpen, setIsOpen } = useNavbar()

    const darkMode = isDark ? "bg-dark" : "bg-light"
    const textDarkMode = isDark ? "text-light" : "text-dark"
    const burgerLine = `h-2 w-7 my-1 rounded-full ${isDark ? 'bg-light' : 'bg-dark'} transition ease transform duration-300`;
    const navLinkStyleDesktop = `${textDarkMode} subray gradient-text-hover font-bold hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]`
    /* const handleSwitch = () => {
        setIsDark(!isDark)
    } */

    return (
        <header className={darkMode} >
            <nav className={`flex justify-between min-w-full fixed top-0 left-0 py-1 px-1 items-center  z-10 ${darkMode}`}>
                <a href="#"><img src={logo} alt="logo" className="h-12 hover:scale-110 hover:rotate-180 transform origin-center transition-all duration-300" /></a>
                <div className={`flex pr-5 items-center ${isOpen ? 'basis-full lg:basis-0 justify-center lg:justify-end' : ''}`}>
                    <ul className={`space-x-2 md:space-x-4 md:mr-2 [&>li]:inline hidden lg:inline-block ${textDarkMode}`}>
                        <li><a href="#inicio" className={navLinkStyleDesktop}>Inicio</a></li>
                        <li><a href="#soluciones" className={navLinkStyleDesktop}>Soluciones</a></li>
                        <li><a href="#experiencia" className={navLinkStyleDesktop}>Experiencia</a></li>
                        <li><a href="#team" className={navLinkStyleDesktop}>Team</a></li>
                        <li><a href="#contactanos" className={navLinkStyleDesktop}>Contactános</a></li>
                    </ul>
                    {/* <button type="button" className={`switch transition-all ${isOpen ? "order-2" : ''} ${isDark ? '' : 'active'}`} id="switch" onClick={handleSwitch}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="sun-icon">
                            <path
                                d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="moon-icon">
                            <path
                                d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                        </svg>
                    </button> */}
                    <button
                        className="h-10 w-10 rounded flex flex-col justify-center items-center group lg:hidden transition-all"
                        onClick={() => setIsOpen(!isOpen)}>
                        <div
                            className={`${burgerLine} ${isOpen
                                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                                : "opacity-50 group-hover:opacity-100"
                                }`}/>
                        <div className={`${burgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`}/>
                        <div
                            className={`${burgerLine} ${isOpen
                                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                                : "opacity-50 group-hover:opacity-100"
                                }`}/>
                    </button>
                    <div className={`${isOpen ? 'grid' : 'hidden'} absolute ${darkMode} h-fit top-full w-full left-0 lg:hidden font-primary`} onClick={() => { isOpen ? setIsOpen(false) : '' }}>
                        <ul className="flex flex-col gap-4 rounded-lg items-center transition-all">
                            <li>
                                <a href="#inicio" className={navLinkStyleDesktop}>Inicio</a>
                            </li>
                            <li>
                                <a href="#soluciones" className={navLinkStyleDesktop} > Soluciones</a>
                            </li>
                            <li>
                                <a href="#experiencia" className={navLinkStyleDesktop}>Experiencia</a>
                            </li>
                            <li>
                                <a href="#team" className={navLinkStyleDesktop}>Team</a>
                            </li>
                            <li>
                                <a href="#contactanos" className={navLinkStyleDesktop}>Contactános</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </header >
    );
}

export default Header;
