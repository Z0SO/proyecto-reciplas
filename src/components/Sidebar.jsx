import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { icons } from "react-icons";
import { Link, NavLink } from "react-router-dom";
import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import Navbar from "./Navbar";



const Sidebar = () => {

  const {activeMenu, setactiveMenu} = useStateContext()


  // const activeMenu = true;

  const normalLink =
    "items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-0 transition-all duration-300 ";

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 dark:text-gray-200  hover: bg-emerald-600 m-2 transition-all duration-400 font-extrabold";

  // const configIcono = require("../data/baseline_settings_black_24dp.png");
  const logoReciplas = require('../data/Reciplas_Logo.png')


  return (
    <div className=" ml-3 h-screen md:overflow-hidden overflow-auto hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => {}}
              className="items-center gap-3 ml-3 p-1 mt-4 flex font-extrabold tracking-tighter text-emerald-950 dark:text-white hover:text-emerald-200 transition-all duration-300 rounded-lg text-2xl w-14"
            >
              {/* <img src={config
                Icono} alt="Configuracion" /> */}
              <img src={logoReciplas} alt="Logo"/>
              Reciplas
            </Link>
          </div>

          <div className="mt-10">
            <div>
              <p className="text-gray-400 m-3 mt-4 uppercase hover:text-gray-50 transition-all duration-300 hover:font-extrabold">
                dashboard
              </p>
            </div>


            <NavLink
              to={'/ecommerce'}
              className={
                ({isActive})=>{
                  return isActive ? activeLink : normalLink
                }
              }
            >
              <span className="capitalize">Ecommerce</span>
            </NavLink>


            <div>
              <p className="text-gray-400 m-3 mt-4 uppercase hover:text-gray-50 transition-all duration-300 hover:font-extrabold">
                pages
              </p>
            </div>

            <div>
              <p className="text-gray-400 m-3 mt-4 uppercase hover:text-gray-50 transition-all duration-300 hover:font-extrabold">
                apps
              </p>
            </div>

            <div>
              <p className="text-gray-400 m-3 mt-4 uppercase hover:text-gray-50 transition-all duration-300 hover:font-extrabold">
                charts
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
