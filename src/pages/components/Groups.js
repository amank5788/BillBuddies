
import React, { useEffect, useState } from "react"
import addicon from '../../images/plus.png';
function Groups () {
    const [group,setGroup]=useState([]);

    useEffect(()=>{
        const getData=async()=>{
            try{

            }
            catch(err){

            }
        }
        getData();
    },[])
  return (
    <div>
    <div className="flex justify-between">
        <div>Groups</div>
        <div>
            <button>
            <img className="w-3"
                src={addicon} alt="add" />
            </button>
        </div>
    </div>
    <div>
        list of groups
    </div>
      
    </div>
  )
};

export default Groups;
