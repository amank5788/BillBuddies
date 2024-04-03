import React, { useEffect } from "react"
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const _ = require('lodash');

function GroupInfo ({groupinfo}) {
    const location=useLocation();
    var membersDetail=_.cloneDeep(useSelector((state)=>state.auth.allUserData));
    console.log(groupinfo)
    var members=groupinfo.group.members;
    console.log(membersDetail)


    //(here group info is missing out og user fullname and avatae )
 // adding net pay to all user with user detail 
 for(let amount of groupinfo.netpay){
    //console.log(amount)
    for(let member of membersDetail){
        //console.log(member)
        if(amount.member===member._id){
            //console.log(amount.net)
            member.net=amount.net;
            //console.log(member.net)
        }
    }
}

//adding overall detail back to groupinfo
var i=0;

for(let member of members){
    for(let user of membersDetail){
        if(user._id===member){
            console.log('found')
            groupinfo.group.members[i]=user;
            i++
        }
    }
}
console.log(groupinfo)

//console.log(location.state)

 

    
  return (
    <div className="rounded-xl  m-2">
      <div className="flex justify-between mx-2">
        <div>Group Balance</div>
        <div>edit</div>
      </div>
      <div>
         {(groupinfo.group.members).map((member)=>(
              <div className="p-2">
                <div>
                    
                </div>
                <div className="text-green-500"> {member.fullName} </div>
                <div className="text-red-500">
                    {member.net}
                </div>

              </div>
         ))}
      </div>
    </div>
  )
};

export default GroupInfo;
