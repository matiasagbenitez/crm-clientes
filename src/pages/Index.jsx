import { useLoaderData } from "react-router-dom";
import { Cliente } from "../components/Cliente";

// El loader se ejecuta cuando se está cargando la página, y se muestra mientras se carga el componente.
export const loader = () => {
  const clientes = [
    {
      id: 1,
      nombre: "Juan",
      telefono: 102013313,
      email: "juan@juan.com",
      empresa: "Codigo Con Juan",
    },
    {
      id: 2,
      nombre: "Karen",
      telefono: 138198313,
      email: "karen@juan.com",
      empresa: "Codigo Con Juan",
    },
    {
      id: 3,
      nombre: "Josue",
      telefono: 31983913,
      email: "josue@juan.com",
      empresa: "Codigo Con Juan",
    },
    {
      id: 4,
      nombre: "Miguel",
      telefono: 319381983,
      email: "miguel@juan.com",
      empresa: "Codigo Con Juan",
    },
    {
      id: 5,
      nombre: "Pedro",
      telefono: 1398198938,
      email: "pedro@juan.com",
      empresa: "Codigo Con Juan",
    },
  ];

  return clientes;
};

export const Index = () => {
  const clientes = useLoaderData();
  return (
    <>
      <h1 className="font-black text-3xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>

      {clientes.length > 0 ? (
        <table className="w-full bg-white mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-3">Cliente</th>
              <th className="p-3">Contacto</th>
              <th className="p-3">Acciones</th>
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
