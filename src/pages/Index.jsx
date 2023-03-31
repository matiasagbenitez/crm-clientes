import { useLoaderData } from "react-router-dom";
import { Cliente } from "../components/Cliente";
import { obtenerClientes } from "../data/clientes";

// El loader se ejecuta cuando se está cargando la página, y se muestra mientras se carga el componente.
export const loader = () => {
  const clientes = obtenerClientes();
  return clientes;
};

export const Index = () => {
  const clientes = useLoaderData();
  return (
    <>
      <h1 className="font-black text-2xl text-sky-900 uppercase">
        Listado de clientes
      </h1>
      <p className="mt-3">Administra tus clientes</p>

      {clientes.length > 0 ? (
        <table className="w-full bg-white mt-5 table-auto">
          <thead className="bg-sky-800 text-white">
            <tr>
              <th className="p-2 uppercase">Cliente</th>
              <th className="p-2 uppercase">Contacto</th>
              <th className="p-2 uppercase">Notas</th>
              <th className="p-2 uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {clientes.map((cliente) => (
              <Cliente key={cliente.id} cliente={cliente} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-5 text-center text-2xl">No hay clientes</p>
      )}
    </>
  );
};
