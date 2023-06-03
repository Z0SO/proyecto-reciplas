import React from "react";
import { icons } from "react-icons";
import { Link, NavLink } from "react-router-dom";

import { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import UserProfile from "./UserProfile";
import { useState } from "react/cjs/react.development";

const hambMenu = require("../data/HambMenuMain.png");

const hambMenu_Active = require("../data/icon-back.png");

export const NavButton = ({ prop, customFunction }) => {
  return (
    <div>
      <button
        onClick={customFunction}
        className="relative text-xl w-9 hover:rounded-full p-2 hover:bg-emerald-600 hover:text-emerald-200 font-extrabold transition-all duration-300"
      >
        <img src={prop} className="transition-all duration-300" />
      </button>
    </div>
  );
};

const Navbar = () => {
  const { activeMenu, setactiveMenu } = useStateContext();

  const [change_Link_Menu, setchange_Link_Menu] = useState(hambMenu); // por defecto va a contener el menu hamburguesa por default

  return (
    <div className="flex justify-between p-2 md:mx-6 relative bg-emerald-700 duration-300 transition-all ">
      

      {/* boton del menu hamburguesa */}
      <NavButton

        prop={change_Link_Menu}
      
        customFunction={() => {
          if (activeMenu) {
            
            setactiveMenu(false);
            setchange_Link_Menu(hambMenu)

          } else {
            
            setactiveMenu(true);
            
            setchange_Link_Menu(hambMenu_Active);
            
          }
        }}

      />

    </div>
  );
};

export default Navbar;
