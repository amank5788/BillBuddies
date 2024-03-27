
import React, { useEffect, useState } from "react"
import addicon from '../../images/plus.png';
import Popup from "./main/Popup";
import GroupForm from "./main/GroupForm";
function Groups () {
    const [group,setGroup]=useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    

    const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
    };
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
        list of groups
    </div>
      
    </div>
  )
};

export default Groups;
