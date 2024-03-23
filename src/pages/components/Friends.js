
import React, { useEffect, useState } from "react"
import addicon from '../../images/plus.png';

function Friends () {
    const [friend,setFriend]=useState([]);

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
        <div>Friends</div>
        <div>
            <button>
                <img className="w-3"
                src={addicon} alt="add" />
            </button>
        </div>
    </div>
    <div>
        list of Friends
    </div>
      
    </div>
  )
};

export default Friends;
