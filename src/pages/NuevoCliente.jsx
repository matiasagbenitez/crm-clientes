import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import { Error } from "../components/Error";
import { Formulario } from "../components/Formulario";
import { agregarCliente } from "../data/clientes";

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

  // Agregar el cliente
  await agregarCliente(datos);

  // Redireccionar
  return redirect("/");
};

export const NuevoCliente = () => {
  const navigate = useNavigate();
  const errores = useActionData();

  return (
    <>
      <h1 className="font-black text-2xl text-sky-900 uppercase">
        Nuevo cliente
      </h1>
      <p>
        Llena todos los campos para registrar un nuevo cliente
      </p>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto p-5 mt-8">
        <Form method="POST" noValidate>
          <Formulario />

          {errores?.length &&
            errores.map((error, i) => (
              <Error key={i} className="mb-1">
                {error}
              </Error>
            ))}

          <input
            type="submit"
            value="Registrar cliente"
            className="mt-2 w-full bg-sky-800 p-3 uppercase font-bold text-white"
          />
        </Form>
      </div>
    </>
  );
};
