"use client";

import { FaUserGroup } from "react-icons/fa6";
import { IoMdPerson, IoMdSearch } from "react-icons/io";
import { IoHome, IoNotifications } from "react-icons/io5";
import { MdBusinessCenter, MdWork } from "react-icons/md";
import { RiArrowDownSFill, RiMessage2Fill } from "react-icons/ri";
import Profile from "./Profile";
import Business from "./Business";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [profileOpen, setProfileOpen] = useState(false);
    const [businessOpen, setBusinessOpen] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);

    const profileRef = useRef(null);
    const businessRef = useRef(null);
    const inputRef = useRef(null);

    const toggleProfileMenu = () => {
        setProfileOpen((prev) => !prev);
    };

    const toggleBusinessMenu = () => {
        setBusinessOpen((prev) => !prev);
    };

    const handleBlurBackground = () => {
        setIsBlurred(true);
    };

    const handleRemoveBlur = () => {
        setIsBlurred(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                profileRef.current &&
                !(profileRef.current.contains(event.target as Node))
            ) {
                setProfileOpen(false);
            }
            if (
                businessRef.current &&
                !(businessRef.current.contains(event.target as Node))
            ) {
                setBusinessOpen(false);
            }
            if (
                inputRef.current &&
                !(inputRef.current.contains(event.target as Node))
            ) {
                setIsBlurred(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    return (
        <nav className="relative w-full max-w-[1707px] h-[52px] bg-white mx-auto flex items-center justify-between px-20 pr-56">
            {/* Fondo desenfocado */}
            {isBlurred && (
                <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm backdrop-filter z-10" />
            )}

            {/* Contenido de la barra de navegación */}
            <div className="relative z-20 flex items-center space-x-2 ml-72">
                <Link href="/">
                    <Image alt="Logo" width={40} height={40} src="/logo.png" />
                </Link>

                <div className="relative" ref={inputRef}>
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700">
                        <IoMdSearch size={20} />
                    </span>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="w-[250px] h-[41px] pl-10 pr-3 rounded-lg border border-gray-300 bg-[#edf3f8] focus:outline-none focus:w-[370px] transition-all duration-400 ease-in-out focus:border-black"
                        onFocus={handleBlurBackground}
                        onBlur={handleRemoveBlur}
                    />
                </div>
            </div>

            {/* Contenedor de Iconos */}
            <div className="flex space-x-7 text-gray-500 ml-auto">
                <Link href="/" className="flex flex-col items-center">
                    <IoHome size={24} className="hover:text-black" />
                    <span className="text-xs">Inicio</span>
                </Link>

                <Link href="/mi-red" className="flex flex-col items-center">
                    <FaUserGroup size={24} className="hover:text-black" />
                    <span className="text-xs">Mi red</span>
                </Link>

                <Link href="/empleo" className="flex flex-col items-center">
                    <MdWork size={24} className="hover:text-black" />
                    <span className="text-xs">Empleo</span>
                </Link>

                <Link href="/mensajes" className="flex flex-col items-center">
                    <RiMessage2Fill size={24} className="hover:text-black" />
                    <span className="text-xs">Mensajes</span>
                </Link>

                <Link href="/notificaciones" className="flex flex-col items-center">
                    <IoNotifications size={24} className="hover:text-black" />
                    <span className="text-xs">Notificaciones</span>
                </Link>

                {/* Botón Yo con Menú Desplegable */}
                <div className="relative" ref={profileRef}>
                    <button onClick={toggleProfileMenu} className="flex flex-col items-center">
                        <IoMdPerson size={24} className="hover:text-black" />
                        <span className="text-xs flex items-center">
                            Yo
                            <RiArrowDownSFill className="ml-1 text-[10px] text-gray-700" />
                        </span>
                    </button>
                    {/* Ventana Perfil */}
                    <div
                        className={clsx(
                            { hidden: !profileOpen }
                        )}
                    >
                        {profileOpen && <Profile />}
                    </div>
                </div>

                {/* Línea de separación vertical */}
                <div className="h-10 border-l border-gray-300"></div>

                <div className="relative" ref={businessRef}>
                    <button onClick={toggleBusinessMenu} className="flex flex-col items-center">
                        <MdBusinessCenter size={24} className="hover:text-black" />
                        <span className="text-xs flex items-center">
                            Para negocios
                            <RiArrowDownSFill className="ml-1 text-[10px] text-gray-700" />
                        </span>
                    </button>
                    {/* Ventana de Negocios */}
                    <div
                        className={clsx(
                            { hidden: !businessOpen }
                        )}
                    >
                        {businessOpen && <Business />}
                    </div>
                </div>

                <div className="text-xs underline text-center text-[#915907] hover:text-black">
                    Encuentra a posibles <br /> clientes gratis
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
