import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";

import { useState } from "react";

import { Ecommerce, Calendar, Employees, Customers, Editor } from "./pages";

const App = () => {
  const [activeMenu, setactiveMenu] = useState(false);

  return (
    <>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            
            <button
              type="button"
              className="shadow-2xl hover:shadow-black text-3xl bg-red-400 p-3 transition-all duration-400 hover:drop-shadow-2xl hover:bg-blue-800 hover:text-white hover:rounded-xl
              "
            >
              Kick Me
            </button>
          </div> */}

          {activeMenu ? (
            <div className="bg-emerald-800 w-72 fixed sidebar dark:bg-secondary-dark-bg transition-all duration-300">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg transition-all duration-300">
              <Sidebar />
            </div>
          )}

          <button
            className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}
            type="button"
            onClick={() => {
              if (activeMenu) {
                setactiveMenu(false)
              }else{
                setactiveMenu(true)
              }
            }}
          >
            Kick Me
          </button>

          {/* fondo */}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg w-full">
              <Navbar />
            </div>

            {/* enrutamiento div */}
            <div>
              <Routes>
                {/* dashboard */}

                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}

                <Route path="/employees" element={<Employees />} />
                <Route path="/Customers" element={<Customers />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
