import { useNavigate, Form, useActionData } from "react-router-dom";
import { Error } from "../components/Error";
import { Formulario } from "../components/Formulario";

export const action = async ({ request }) => {
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
};

export const NuevoCliente = () => {
  const navigate = useNavigate();
  const errores = useActionData();

  return (
    <>
      <h1 className="font-black text-3xl text-blue-900">Nuevo cliente</h1>
      <p className="mt-3">
        Llena todos los campos para registrar un nuevo cliente
      </p>

      <div className="flex justify-end">
        <button
          onClick={() => navigate(-1)}
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
          <Formulario />
          <input
            type="submit"
            value="Registrar cliente"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white"
          />
        </Form>
      </div>
    </>
  );
};
