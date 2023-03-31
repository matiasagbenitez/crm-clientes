import React from "react";

export const Cliente = ({ cliente }) => {
  const { id, nombre, telefono, email, empresa } = cliente;
  return (
    <tr key={id} className="border-b">
      <td className="p-3 space-y-1">
        <p className="font-bold text-gray-800">{nombre}</p>
        <p className="text-gray-600 text-xs">{empresa}</p>
      </td>
      <td className="p-3 text-sm">
        <p className="text-gray-600">
          <span className="font-bold text-gray-800">TELÉFONO:</span>{" "}
          {telefono}
        </p>
        <p className="text-gray-600">
            <span className="font-bold text-gray-800">EMAIL:</span>{" "}
            {email}
        </p>
      </td>
        <td className="p-3 text-sm flex items-center justify-center gap-3">
            <button className="bg-blue-800 text-white rounded-lg py-1 px-2">
                Editar
            </button>
            <button className="bg-red-800 text-white rounded-lg py-1 px-2">
                Eliminar
            </button>
        </td>
    </tr>
  );
};
