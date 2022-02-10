import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../components/Formulario";
import Spinner from "../components/Spinner";

function EditarCliente() {

    const [cliente, setCliente] = useState({});
    const [cargando, setCargando] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const obtnerClienteAPI = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`;
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();

                setCliente(resultado);

            } catch (error) {
                console.log(error);
            }
            setCargando(!cargando);
        }
        obtnerClienteAPI();
    }, [])

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
            {cargando ? <Spinner /> : cliente?.nombre ? (
                <>
                    <p className="mt-3">Utiliza este formulario para editar datos de un cliente</p>
                    <Formulario
                        cliente={cliente}
                        cargando={cargando}
                    />
                </>
            ) : <p className="mt-5 font-bold text-red-500">{`El Cliente con el id ${id}, no fue encontrado.`}</p>
            }
        </>
    )
}

export default EditarCliente;