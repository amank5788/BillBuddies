import React from "react"
import Menu from "./components/main/Menu";
import Dash from "./components/main/Dash";
import { Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import Activity from "./components/main/Activity";
import AllExpanses from "./components/main/AllExpanses";




function Dashboard () {
  return (
    <div className="flex p-3">
      <div className=" flex w-1/4">
      <Menu />
      </div>
      <div className="w-1/2 rounded-xl shadow-xl p-4">
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/expenses" element={<AllExpanses />} />
      
      </Routes>
      </div>
      <div className="w-1/4">

      </div>
    </div>
  )
};

export default Dashboard;
