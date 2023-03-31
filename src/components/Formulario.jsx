import React from "react";

export const Formulario = ({ cliente }) => {
  return (
    <>
      <div className="mb-3 text-sm">
        <label className="text-gray-800 font-semibold" htmlFor="nombre">
          Nombre:
        </label>
        <input
          id="nombre"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Nombre del cliente"
          name="nombre"
          defaultValue={cliente?.nombre}
        />
      </div>
      <div className="mb-3 text-sm">
        <label className="text-gray-800 font-semibold" htmlFor="empresa">
          Empresa:
        </label>
        <input
          id="empresa"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Empresa del cliente"
          name="empresa"
          defaultValue={cliente?.empresa}
        />
      </div>

      <div className="mb-3 text-sm">
        <label className="text-gray-800 font-semibold" htmlFor="email">
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Email del cliente"
          name="email"
          defaultValue={cliente?.email}
        />
      </div>

      <div className="mb-3 text-sm">
        <label className="text-gray-800 font-semibold" htmlFor="telefono">
          Teléfono:
        </label>
        <input
          id="telefono"
          type="tel"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Teléfono del cliente"
          name="telefono"
          defaultValue={cliente?.telefono}
        />
      </div>

      <div className="mb-3 text-sm">
        <label className="text-gray-800 font-semibold" htmlFor="notas">
          Notas:
        </label>
        <textarea
          as="textarea"
          id="notas"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
          placeholder="Notas del cliente"
          name="notas"
          defaultValue={cliente?.notas}
          rows="3"
        />
      </div>
    </>
  );
};
