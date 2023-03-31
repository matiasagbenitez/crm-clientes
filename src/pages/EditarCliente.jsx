import {
  Form,
  useNavigate,
  useLoaderData,
  redirect,
  useActionData,
} from "react-router-dom";
import { Formulario } from "../components/Formulario";
import { actualizarCliente, obtenerCliente } from "../data/clientes";
import { Error } from "../components/Error";

export const loader = async ({ params }) => {
  const cliente = await obtenerCliente(params.id);
  if (Object.keys(cliente).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Cliente no encontrado",
    });
  }
  return cliente;
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData.entries());
  const email = formData.get("email");
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  // Validar los datos
  const errores = [];

  if (Object.values(datos).some((value) => value === "")) {
    errores.push("Todos los campos son obligatorios");
  }

  if (!regex.test(email)) {
    errores.push("El formato del email es incorrecto");
  }

  if (Object.keys(errores).length) {
    return errores;
  }

  // Actualizar el cliente
  actualizarCliente(params.id, datos);
  return redirect("/");
};

export const EditarCliente = () => {
  const navigate = useNavigate();
  const cliente = useLoaderData();
  const errores = useActionData();

  return (
    <>
      <h1 className="font-black text-3xl text-blue-900">Editar cliente</h1>
      <p className="mt-3">
        A continuación, puedes editar los datos del cliente
      </p>

      <div className="flex justify-end">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-800 text-white rounded-lg py-1 px-5 font-bold uppercase text-sm"
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto p-5 mt-10">
        {errores?.length &&
          errores.map((error, i) => (
            <Error key={i} className="mb-4">
              {error}
            </Error>
          ))}

        <Form method="POST" noValidate>
          <Formulario cliente={cliente} />
          <input
            type="submit"
            value="Guardar cambios"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white"
          />
        </Form>
      </div>
    </>
  );
};
