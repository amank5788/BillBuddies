
import React, { useEffect, useState } from "react"
import addicon from '../../images/plus.png';
import Popup from "./main/Popup";

function Friends () {
    const [friend,setFriend]=useState([]);
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
        <div>Friends</div>
        <div>
            <button onClick={togglePopup} >
                <img className="w-3"
                src={addicon} alt="add" />
            </button>
            <Popup isOpen={isPopupOpen} onClose={togglePopup} />
        </div>
    </div>
    <div>
        list of Friends
    </div>
      
    </div>
  )
};

export default Friends;
