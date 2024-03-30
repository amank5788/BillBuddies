import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AuthServices from '../../../services/AuthServices';

function GroupForm() {
  const [inputFields, setInputFields] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const[groupName,setGroupName]=useState('');
  const [users,setUsers]=useState([]);


  useEffect(()=>{
    const fetchuser=async()=>{
       try{
           const Allusers= await axios.get('http://localhost:8000/api/v1/users/fetch-users',);
           if(Allusers){
            
            setUsers(Allusers.data.data);
            
           }
       }catch(err){
        console.log(err);
       }
    }
    fetchuser();
  },[])

  const handleAddField = () => {
   
    
    setInputFields([...inputFields, searchQuery]);
    console.log(inputFields)
    setSearchQuery('');
    setSuggestions([]);
  };

  const handleRemoveField = index => {
    const newFields = [...inputFields];
    newFields.splice(index, 1);
    setInputFields(newFields);
  };

  const handleInputChange = event => {
    const value = event.target.value;
    setSearchQuery(value);

    // Simulate fetching suggestions from an API
    // Here, you should make an API call to fetch suggestions based on the value
    //console.log(users[1].username);
    const allusername=users.map(user=>user.username);
    //console.log(allusername);
    const fetchedSuggestions = allusername.filter(username =>
      username.toLowerCase().includes(value.toLowerCase())
    );
     if(value !==''){
    setSuggestions(fetchedSuggestions);}
    else{
      setSuggestions('')
    }
  };

  const handleSuggestionClick = suggestion => {
    
    setSearchQuery(suggestion);
    setSuggestions([]);
  };

  const handleSubmit =async(event) => {
    event.preventDefault();
  
    const groupmember=([...inputFields, searchQuery]);
    setSearchQuery('');
    setSuggestions([]);
    setInputFields([])
    const members=[];
    console.log(groupmember);
    for(const username of groupmember){
      console.log(username);
      for(const user of users){
        if(username===user.username){
          members.push(user._id)
          
        }
      }
    }
   // console.log(members);
    try{
      
      const response=await axios.post('http://localhost:8000/api/v1/group/create-group',{groupName,members},
      { headers: { 'Authorization': `Bearer ${AuthServices.getAccessToken()}` } }
      );

      if(response){ 
          console.log("successfully acreated")
      }
      else{
        console.log("err while connecting to server");
      }
   
    }catch(err){
      console.log(err);
    }

  };

  return (
    <>
     <div className=" flex justify-center">
         <img  src="" alt="group icon" />

         </div>
         <div className='flex justify-center m-2'>
          <input 
            type="text"
            className="border border-gray-300 p-2 mr-2"
            placeholder="Enter Group Name"
            value={groupName}
            onChange={(e)=>setGroupName(e.target.value)}
          />
         </div>
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="text"
          className="border border-gray-300 p-2 mr-2 w-64"
          placeholder="Enter username"
          value={searchQuery}
          onChange={handleInputChange}
        />
        {suggestions.length > 0 && (
          <ul className="absolute z-10 bg-white w-64 mt-1 border border-gray-300">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-2 py-1 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mr-2"
        onClick={handleAddField}
      >
        Add Person
      </button>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
      >
        Submit
      </button>
      {inputFields.map((input, index) => (
        <div key={index} className="flex items-center mt-2 ">
          <input
            type="text"
            className="border border-gray-300 p-2 mr-2"
            value={input}
            readOnly
          />
          <button
            type="button"
            className="text-red-500 hover:text-red-700 focus:outline-none"
            onClick={() => handleRemoveField(index)}
          >
            &#10006;
          </button>
        </div>
      ))}
    </form>
    </>
  );
};

export default GroupForm;
