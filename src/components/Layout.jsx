import React from "react";
import { Outlet, Link, useLocation, NavLink } from "react-router-dom";

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-sky-900 px-2 py-5">
        <h2 className="text-white text-4xl font-bold text-center uppercase">
          CRM Clientes
        </h2>
        <nav className="mt-5">
          <Link
            to="/"
            className={`${
              pathname === "/" ? "bg-sky-800" : ""
            } text-white hover:text-sky-300 block p-2 font-bold uppercase`}
          >
            Clientes
          </Link>
          <Link
            to="/clientes/nuevo"
            className={`${
              pathname === "/clientes/nuevo" ? "bg-sky-800" : ""
            } text-white hover:text-sky-300 block p-2 font-bold uppercase`}
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
