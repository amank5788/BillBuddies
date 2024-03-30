import axios from "axios";
import React, { useEffect, useState } from "react"

function GroupLayout () {
    const [data,setData]=useState([]);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        const fetchdata=async()=>{
           try{
            const response=await axios.get('',);
            if(response){
               setData(response.data);
               setLoading(false);
            }
            else{
              console.log("errr in fetching data");
            }
           }
           catch(err){
            console.log(err);
           }
        }
        fetchdata();
    },[data])
  return (
    <div>
      <div>
        <div>Group Name</div>
        <div className="flex justify-between">
        <div><button className="bg-red-400 p-2 rounded-lg">Add Expanse</button></div>
        <div><button className="bg-green-400 p-2 rounded-lg">Settle Up</button></div>
      </div>
      </div>
      {loading?(<></>):
      ( <div>all records</div>)
      }
     
    </div>
  )
};

export default GroupLayout;
