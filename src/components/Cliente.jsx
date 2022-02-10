import { useNavigate } from "react-router-dom";

function Cliente({ cliente }) {

    const navigate = useNavigate();

    const { nombre, empresa, email, telefono, notas, id } = cliente;

    return (
        <tr className="border-b hover:bg-gray-50 text-center">
            <td className="p-3">{nombre}</td>
            <td className="p-3 text-left">
                <p><span className="text-gray-800 uppercase font-bold">Email:</span> {email}</p>
                <p><span className="text-gray-800 uppercase font-bold">Télefono:</span> {telefono}</p>
            </td>
            <td className="p-3">{empresa}</td>
            <td className="p-3">
                <button
                    className="bg-emerald-600 hover:bg-emerald-700 block w-full text-white p-2 uppercase font-bold text-xs"
                    type="button"
                    onClick={() => navigate(`/clientes/${id}`)}
                >Ver</button>
                <button
                    className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
                    type="button"
                    onClick={() => navigate(`/clientes/editar/${id}`)}
                >Editar</button>
                <button
                    className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
                    type="button"
                >Eliminar</button>
            </td>
        </tr>
    )
}
export default Cliente;