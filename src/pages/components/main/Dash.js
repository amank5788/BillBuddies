import React from "react"

function Dash () {
  return (
    <div>
    <div>
      <div className="text-center bg-gray-400 p-3 font-semibold text-lg">Dashboard</div>
      <div className="flex justify-between">
        <div><button className="bg-red-400 p-2 rounded-lg">Add Expanse</button></div>
        <div><button className="bg-green-400 p-2 rounded-lg">Settle Up</button></div>
      </div>
    </div>

    <div className="flex w-full">
        <div className="w-1/2 border-r-2 text-center">you owe</div>
        <div className="w-1/2 text-center">you are owed</div>
    </div>
    </div>
  )
};

export default Dash;
