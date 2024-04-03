import React from "react"
import Menu from "./components/main/Menu";
import Dash from "./components/main/Dash";
import { Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import Activity from "./components/main/Activity";
import AllExpanses from "./components/main/AllExpanses";
import Protected from "./AuthLayout";
import GroupLayout from "./components/main/GroupLayout";
import GroupInfo from "./components/main/GroupInfo";




function Dashboard () {
  return (
    <div className="flex p-3">
      <div className=" flex w-1/4">
      <Menu />
      </div>
      <div className="w-3/4 ">
      <Routes>
        <Route path="/" element={
          <Protected authentication={true}>
            <Dash />
          </Protected>
        } />
        <Route path="/dash" element={
          <Protected authentication={true}>
            <Dash />
          </Protected>
        } />
        <Route path="/activity" element={
          <Protected authentication={true}>
            <Activity />
          </Protected>
        } />
        <Route path="/expenses" element={
          <Protected authentication={true}>
            <AllExpanses />
          </Protected>
        } />
         <Route path="/group" element={
          <Protected authentication={true}>
            <GroupLayout />
          </Protected>
        } />
      
      </Routes>
      </div>
     
    </div>
  )
};

export default Dashboard;
