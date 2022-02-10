import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup';

function Formulario() {

    const navigate = useNavigate();

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(40, 'El nombre es muy largo')
            .required('El nombre del Cliente es Obligatorio'),

        empresa: Yup.string()
            .required('El nombre de la empresa es obligatorio'),

        email: Yup.string()
            .email('Email no Válido')
            .required('El E-mail es obligatorio'),

        telefono: Yup.number()
            .positive('Número no Válido')
            .integer('Número no Válido')
            .typeError('El número no es válido')
    });

    const handleSubmit = async valores => {
        try {
            const url = 'http://localhost:4000/clientes';
            const respuesta = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(valores),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const resultado = await respuesta.json();
            navigate('/clientes');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
            <h1 className="text-gray-600 font-bold text-xl uppercase text-center">Agregar Cliente</h1>

            <Formik
                initialValues={{
                    nombre: '',
                    empresa: '',
                    email: '',
                    telefono: '',
                    notas: ''
                }}
                onSubmit={async (values, { resetForm }) => {
                    await handleSubmit(values);
                    resetForm();
                }}
                validationSchema={nuevoClienteSchema}
            >
                {() => {

                    return (
                        <Form className="mt-10">
                            <div className="mb-4">
                                <label className="text-gray-800" htmlFor="nombre">Nombre:</label>
                                <Field
                                    id="nombre"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-100"
                                    placeholder="Nombre del Cliente"
                                    name="nombre"
                                />
                                <ErrorMessage name="nombre" component='div' className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase" />
                            </div>

                            <div className="mb-4">
                                <label className="text-gray-800" htmlFor="empresa">Empresa:</label>
                                <Field
                                    id="empresa"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-100"
                                    placeholder="Empresa del Cliente"
                                    name="empresa"
                                />
                                <ErrorMessage name="empresa" component='div' className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase" />
                            </div>

                            <div className="mb-4">
                                <label className="text-gray-800" htmlFor="email">Email:</label>
                                <Field
                                    id="email"
                                    type="email"
                                    className="mt-2 block w-full p-3 bg-gray-100"
                                    placeholder="Email del Cliente"
                                    name="email"
                                />
                                <ErrorMessage name="email" component='div' className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase" />
                            </div>

                            <div className="mb-4">
                                <label className="text-gray-800" htmlFor="telefono">Teléfono:</label>
                                <Field
                                    id="telefono"
                                    type="tel"
                                    className="mt-2 block w-full p-3 bg-gray-100"
                                    placeholder="Teléfono del Cliente"
                                    name="telefono"
                                />
                                <ErrorMessage name="telefono" component='div' className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase" />
                            </div>

                            <div className="mb-4">
                                <label className="text-gray-800" htmlFor="notas">Notas:</label>
                                <Field
                                    as="textarea"
                                    id="notas"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-100 h-40"
                                    placeholder="Notas del Cliente"
                                    name="notas"
                                />
                            </div>

                            <input
                                type="submit"
                                value="Agregar Cliente"
                                className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
                            />
                        </Form>
                    )
                }}
            </Formik>

        </div>
    )
}
export default Formulario;