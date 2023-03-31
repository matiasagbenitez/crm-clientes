import { useRouteError } from "react-router-dom";

import React from "react";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="space-y-8">
      <h1 className="text-center text-4xl font-extrabold mt-10 text-sky-900">
        CRM Clientes
      </h1>
      <p className="text-center">Hubo un error</p>
      <p className="text-center">{error.statusText || error.message}</p>
    </div>
  );
};
