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
      <h1 className="font-black text-2xl text-sky-900 uppercase">
        Editar cliente
      </h1>
      <p>
        A continuación, puedes editar los datos del cliente
      </p>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto p-5 mt-8">
        <Form method="POST" noValidate>
          <Formulario cliente={cliente} />

          {errores?.length &&
            errores.map((error, i) => (
              <Error key={i} className="mb-1">
                {error}
              </Error>
            ))}

          <input
            type="submit"
            value="Guardar cambios"
            className="mt-2 w-full bg-sky-800 p-3 uppercase font-bold text-white"
          />
        </Form>
      </div>
    </>
  );
};
