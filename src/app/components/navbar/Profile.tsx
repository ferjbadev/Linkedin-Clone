
const Profile = () => {
    return (
        <div className="absolute top-10 right-0 w-[264px] h-[111px] bg-white shadow-lg border border-gray-300 rounded-lg p-4">
            <p className="text-sm text-gray-700">Bienvenido a tu perfil</p>
            <ul className="mt-2">
                <li className="text-sm hover:text-blue-600 cursor-pointer">Ver perfil</li>
                <li className="text-sm hover:text-blue-600 cursor-pointer">Configuración</li>
                <li className="text-sm hover:text-blue-600 cursor-pointer">Cerrar sesión</li>
            </ul>
        </div>
    )
}

export default Profile
