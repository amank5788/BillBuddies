import { useNavigate } from "react-router-dom";
import { logout } from "../../../app/authSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AuthServices from "../../../services/AuthServices";


function Navbar(){
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const user=useSelector((state)=>state.auth.userData);
  const Logout=async()=>{
    try {
           console.log(user); 
      const response=  await AuthServices.logout(user);
      if(response){
        dispatch(logout());
        navigate('/');
      }
      else{
          
          console.log('error while connecting server')
      }
  } catch (error) {
      
      console.log(error.message)
  }
    
  }
    return(
        <>
          <div>
          <div className="flex justify-between p-2 px-4 ">
            <div className="p-2">
           <button 
           onClick={()=>navigate('/')}
           className="">
           BillBuddies
           </button>
            </div>
            <div className="flex">
            <button 
             onClick={()=>navigate('/dashboard')}
            className="m-2 hover:bg-blue-500 p-2 rounded-lg hover:text-white">Friends</button>
            <button className="m-2  hover:bg-blue-500 p-2 rounded-lg hover:text-white">Groups</button>
            <button className="m-2  hover:bg-blue-500 p-2 rounded-lg hover:text-white">Activity</button>
            </div>
            <div className="flex">
            
            {authStatus ?
             <> 
             <button>
             <div className="flex">
             <div className="rounded-full overflow-hidden w-7 h-auto  m-2">
                <img src={user.avatar} alt="avatar"/>
              </div>
              <div className="text-center  m-2 p-2">
                {user.username}
              </div>
             </div>
             </button>
             <button 
            onClick={()=>Logout()}
            className="m-2  hover:bg-blue-500 p-2 rounded-lg hover:text-white">Logout</button>
            </>
            :
            <>
            <button 
            onClick={()=>navigate('/login')}
            className="m-2 bg-blue-500 p-2 rounded-lg text-white">Login</button>
            <button 
            onClick={()=>navigate('/signup')}
            className="m-2  hover:bg-blue-500 p-2 rounded-lg hover:text-white">Signup</button>
            </>
            }
           
           
            </div>
            </div>
          </div>
        </>
    )
}
export default Navbar;