import React from "react";
import { Outlet, Link, useLocation, NavLink } from "react-router-dom";

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-2 py-5">
        <h2 className="text-white text-2xl font-bold text-center">
          CRM Clientes
        </h2>
        <nav className="mt-5">
          <Link
            to="/"
            className={`${
              pathname === "/" ? "bg-blue-800" : ""
            } text-white hover:text-blue-300 block p-1 font-bold`}
          >
            Clientes
          </Link>
          <Link
            to="/clientes/nuevo"
            className={`${
              pathname === "/clientes/nuevo" ? "bg-blue-800" : ""
            } text-white hover:text-blue-300 block p-1 font-bold`}
          >
            Nuevo cliente
          </Link>
        </nav>
      </aside>

      <main className="md:w-3/4 p-5 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};
