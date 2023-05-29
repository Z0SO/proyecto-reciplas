
import React from "react";
import { Link, NavLink } from "react-router-dom";



const Sidebar = () => {
  const activeMenu = true;

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="./"
              onClick={() => {}}
              className="items-center gap-3 ml-3 p-1 mt-4 flex font-extrabold tracking-tighter text-slate-900 dark:text-white hover:text-gray-200 transition-all duration-300 rounded-lg text-2xl"
            >
              Reciplas
            </Link>
          </div>

          <div className="mt-10">
            <div className="text-gray-400 m-3 mt-4 uppercase hover:text-gray-50 transition-all duration-300 hover:font-extrabold">
              dashboard
            </div>
            <div className="text-gray-400 m-3 mt-4 uppercase hover:text-gray-50 transition-all duration-300 hover:font-extrabold">
              pages
            </div>
            <div className="text-gray-400 m-3 mt-4 uppercase hover:text-gray-50 transition-all duration-300 hover:font-extrabold">
              apps
            </div>

            <div className="text-gray-400 m-3 mt-4 uppercase hover:text-gray-50 transition-all duration-300 hover:font-extrabold">
              charts
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
