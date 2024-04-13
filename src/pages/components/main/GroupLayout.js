import axios from "axios";
import React, { useEffect, useRef, useState } from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import icon from '../../../images/people red.png'
import Popup from "./Popup";
import AddExpanse from "./AddExpanse";
import AuthServices from "../../../services/AuthServices";
import GroupInfo from "./GroupInfo";
import Protected from '../../AuthLayout';
const _ = require('lodash');


function GroupLayout () {
    const [data,setData]=useState([]);
    const[loading,setLoading]=useState(true);
    const[infoload,setInfoload]=useState(true)
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const[sendData,setSendData]=useState();
    const location=useLocation();
    const navigate=useNavigate();
    const [uniqueExpanses,setUniqueExpanses]=useState([]);
    
    const group_id=location.state.groupid;
    
    
    

    const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
    };


   
    useEffect(()=>{
      
        const fetchgroupdatas=async()=>{
          var uns=[];
          
          console.log(AuthServices.getAccessToken());
          try {
            const data= await axios.post('http://localhost:8000/api/v1/group/fetch-group-info',{group_id},
            { headers: { 'Authorization': `Bearer ${AuthServices.getAccessToken()}` } }
            );
    
            if(data){
              console.log(data);
              setSendData(data.data.data);
              var prev="aman";
              var flag=0;
              for(let exp of data.data.data.groupExpenses){
                  if(prev!==exp.nanoId){
                    console.log(exp);
                    // const dst=_.cloneDeep(exp);
                    uns.push(exp);
                     
                       flag=1;
                       prev=exp.nanoId;
                  }
              }
              

              setInfoload(false);
              if(flag===1 || data.data.data.groupExpenses.length===0){
                
                setUniqueExpanses(uns);
                setLoading(false);
                console.log(uniqueExpanses);
              }
             
              //console.log(sendData);
                   
                   
             // navigate('/dashboard/groupinfo',{ state: { name:group.groupName,groupid:group._id,member:group.members} })
                  
            }
            else{
              console.log("err while fetching group")
            }
            
          } catch (error) {
            console.log(error)
          }
        }
        fetchgroupdatas();
        //fetchdata();

        
    },[group_id,isPopupOpen])
  return (
    <div className="flex">
    <div className="w-2/3 shadow-xl rounded-xl p-2">
      <div>
        <div className="flex justify-center">
        <div className="w-10">
          <img src={icon} alt="icon" />
        </div>
        <div className="p-2">
        {location.state.name}
        </div>
       
        </div>
        <div className="flex justify-between">
        <div><button
        onClick={togglePopup} 
        className="bg-red-400 p-2 rounded-lg">Add Expanse</button></div>
        <div><button className="bg-green-400 p-2 rounded-lg">Settle Up</button></div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={togglePopup} >
                <AddExpanse onClose={togglePopup} members={location.state.member} grp_id={location.state.groupid} />
            </Popup>
      </div>

      {loading?(<div className="text-center">Loading</div>):
      ( <div>
        { uniqueExpanses.map((exp)=>(<>
                
        <div key={exp.nanoId} className="flex justify-between p-2 m-1 rounded-xl bg-gray-400">
          <div>{exp.description}</div>
          <div className="flex">
            <div className="p-1">paid by</div>
            <div className="p-1">you lent</div>
          </div>
        </div>
      </>))}
      </div>)
      }
     
    </div>
    <div className="w-1/3">
    {infoload?(<>loading</>):(<Protected><GroupInfo groupinfo ={sendData}/></Protected>)}
    
    </div>
    </div>
  )
};

export default GroupLayout;
