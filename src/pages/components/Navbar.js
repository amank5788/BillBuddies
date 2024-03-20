function Navbar(){
    return(
        <>
          <div>
          <div className="flex justify-between p-2 px-4 ">
            <div className="p-2">BillBuddies</div>
            <div className="flex">
            <button className="m-2 hover:bg-blue-500 p-2 rounded-lg hover:text-white">Friends</button>
            <button className="m-2  hover:bg-blue-500 p-2 rounded-lg hover:text-white">Groups</button>
            <button className="m-2  hover:bg-blue-500 p-2 rounded-lg hover:text-white">Activity</button>
            </div>
            <div className="flex">
            <button className="m-2 bg-blue-500 p-2 rounded-lg text-white">Login</button>
            <button className="m-2  hover:bg-blue-500 p-2 rounded-lg hover:text-white">Signup</button>
            </div>
            </div>
          </div>
        </>
    )
}
export default Navbar;