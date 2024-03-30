
import React, { useEffect, useState } from "react"
import addicon from '../../images/plus.png';
import Popup from "./main/Popup";
import GroupForm from "./main/GroupForm";
import axios from "axios";
import AuthServices from "../../services/AuthServices";
import {  useSelector } from "react-redux";
function Groups () {
    const [group,setGroup]=useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const user=useSelector((state)=>state.auth.userData);

    const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
    };
    useEffect(()=>{
        const getData=async()=>{
            try{
                   const fetchedGroupd= await axios.post('http://localhost:8000/api/v1/group/fetch-user-group',user._id,
                   { headers: { 'Authorization': `Bearer ${AuthServices.getAccessToken()}` } }
                   );
                   if(fetchedGroupd){
                    console.log(fetchedGroupd)
                    setGroup(fetchedGroupd);
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
    },[])
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
                <GroupForm />
            </Popup>
        </div>
    </div>
    <div>
  all groups
    </div>
      
    </div>
  )
};

export default Groups;
