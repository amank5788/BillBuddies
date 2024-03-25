import React from "react";
import menuData from "../../assets/menu";
import Groups from "../Groups";
import Friends from "../Friends";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";

function Menu () {
    const navigate=useNavigate();
  return (
    <div className="w-3/4 m-auto">
      <div>
        {menuData.map((data)=>{
            return(
                <div className="flex" key={data.index}>
                    <div className="w-5">
                    <img src={data.logo} alt={data.name} />
                    </div>
                    <div>
                    <button className=""
                    onClick={()=>navigate(data.path)}
                    >
                    {data.name}
                    </button>
                    </div>
                </div>
            )
        })}
      </div>
      <Groups />
      <Friends />
    </div>
  )
};

export default Menu;
