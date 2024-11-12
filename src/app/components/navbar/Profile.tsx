import Image from "next/image";

const Profile = () => {
    return (
        <div className="absolute top-10 right-0 w-[264px] bg-white shadow-lg border border-gray-300 rounded-lg p-4">
            {/* Contenedor de información */}
            <div className="flex items-center">
                {/* Imagen de perfil */}
                <Image src="/fotoo.jpg" alt="profile" width={50} height={40} className="rounded-full w-14 h-14 object-cover mr-2" />
                <ul className="space-y-1">
                    <li className="font-bold text-black">Fernando Barrera</li>
                    <li className="text-sm">Intern Front-End Engineer <br /> at Vainilla Labs</li>
                    <div className="flex justify-center mt-2">
                        <button className="text-sm bg-white border border-blue-500 text-blue-600 w-full max-w-[248px] h-[24px] p-1 flex items-center justify-center rounded-full hover:bg-[#378fe9] hover:bg-opacity-10 hover:border-blue-900">
                            Ver perfil
                        </button>
                    </div>
                </ul>
            </div>

            {/* Línea horizontal que cubre todo el ancho del contenedor */}
            <hr className="w-full border-t border-gray-300 mt-2" />

            {/* Opciones adicionales */}
            <ul className="mt-1 space-y-1">
                <li className="text-sm font-bold text-black">Cuenta</li>
                <li className="text-sm text-gray-800 hover:text-blue-600 cursor-pointer">Prueba 1 mes de Premium 0 <br /> USD</li>
                <li className="text-sm hover:underline cursor-pointer">Ajustes y privacidad</li>
                <li className="text-sm hover:underline cursor-pointer">Ayuda</li>
                <li className="text-sm hover:underline cursor-pointer">Idioma</li>
                {/* Línea horizontal que cubre todo el ancho del contenedor */}
                <hr className="w-full border-t border-gray-300 mt-2" />
                <li className="text-sm font-bold text-black">Gestionar</li>
                <li className="text-sm hover:underline cursor-pointer">Publicaciones y actividad</li>
                <li className="text-sm hover:underline cursor-pointer">Cuenta de anuncios de empleo</li>
                {/* Línea horizontal que cubre todo el ancho del contenedor */}
                <hr className="w-full border-t border-gray-300 mt-2" />
                <li className="text-sm hover:underline cursor-pointer">Cerrar sesión</li>
            </ul>
        </div>
    );
};

export default Profile;
