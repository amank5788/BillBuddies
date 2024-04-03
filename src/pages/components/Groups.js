
import React, { useEffect, useState } from "react"
import addicon from '../../images/plus.png';
import Popup from "./main/Popup";
import GroupForm from "./main/GroupForm";
import axios from "axios";
import AuthServices from "../../services/AuthServices";
import {  useSelector } from "react-redux";
import grpicon from '../../images/people.png'
import { useNavigate } from "react-router-dom";


function Groups () {
    const [group,setGroup]=useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const user=useSelector((state)=>state.auth.userData);
    const navigate=useNavigate();

    const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
    };
    useEffect(()=>{
        console.log(AuthServices.getAccessToken());
        if(user._id){
        const getData=async()=>{
            try{
                   const fetchedGroupd= await axios.post('http://localhost:8000/api/v1/group/fetch-user-group',user._id,
                   { headers: { 'Authorization': `Bearer ${AuthServices.getAccessToken()}` } }
                   );
                   if(fetchedGroupd){
                    //console.log(fetchedGroupd.data.data)
                    setGroup(fetchedGroupd.data.data);
                   }
                   else{
                    console.log("err in fetching")
                   }
            }
            catch(err){
                  console.log(err);
            }
        }
        getData();
    }
    },[isPopupOpen])
  return (
    <div>
    <div className="flex justify-between">
        <div>Groups</div>
        <div>
            <button onClick={togglePopup} >
            <img className="w-3"
                src={addicon} alt="add" />
            </button>
            <Popup isOpen={isPopupOpen} onClose={togglePopup} >
                <GroupForm onClose={togglePopup} />
            </Popup>
        </div>
    </div>
    <div>
    {group.map((group)=><>
            <button key={group._id} className="flex mx-2"
            onClick={()=> navigate('/dashboard/group',{ state: { name:group.groupName,groupid:group._id,member:group.members} })}
            >
            <div className="w-5">
                <img src={grpicon} alt="group icon" />
            </div>
            <div className="mx-1">
            {group.groupName}
            </div>
            
            </button>
        </>)}
    </div>
      
    </div>
  )
};

export default Groups;
