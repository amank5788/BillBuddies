import React, { useEffect, useState } from "react"
import icon from '../../../images/people red.png'
import axios from "axios";
import AuthServices from "../../../services/AuthServices";
import { nanoid } from "nanoid";

function AddExpanse ({members, onClose,grp_id}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPayee, setIsOpenPayee] = useState(false);
  const [selectedOption, setSelectedOption] = useState('INR');
  const [selectedOptionPayee, setSelectedOptionPayee] = useState('You');
  const [description,setDescription]=useState('');
  const [amount,setAmount]=useState()
  const [date,setDate]=useState(new Date().toISOString().split('T')[0])
  const [paidby,setPaidby]=useState()



  const options={"data":{"AUD":1.5333301915,"BGN":1.8065702179,"BRL":5.007060555,"CAD":1.3537501803,"CHF":0.9011800955,"CNY":7.2224711501,"CZK":23.4030126413,"DKK":6.9116712205,"EUR":0.9261801742,"GBP":0.7921201504,"HKD":7.8239010704,"HRK":6.7056611023,"HUF":365.2514581792,"IDR":15835.686100769,"ILS":3.6831706648,"INR":83.3172421594,"ISK":139.2105965825,"JPY":151.3371112921,"KRW":1343.5095529278,"MXN":16.5790119397,"MYR":4.7247906057,"NOK":10.8174616467,"NZD":1.6723402014,"PHP":56.1648977697,"PLN":3.9719906334,"RON":4.6031608916,"RUB":92.5755083068,"SEK":10.6708419086,"SGD":1.3479101904,"THB":36.3808243034,"TRY":32.3747744027,"USD":1,"ZAR":18.8626829594}}
    const currencies=Object.keys(options.data);
    //console.log(grp_id);



   

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the menu after selection
  };
  const handleOptionClickPayee = (option) => {
    setSelectedOptionPayee(option);
    setIsOpenPayee(false); // Close the menu after selection
  };
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleMenuPayee = () => {
    setIsOpenPayee(!isOpenPayee);
  };
  const handleSubmit=async(e)=>{
   e.preventDefault();
   const group_id=grp_id;
   const paidby=selectedOptionPayee;
   const moneyToMembers =[];
  //console.log(members.length)
   for( let member of members){
    if(member){
      const obj={};
      obj._id=member;
      obj.amount=(amount*1.00)/(members.length);
      //console.log(obj);
      moneyToMembers.push(obj)
    }
   }
   console.log(moneyToMembers);
    
   try {
       const response= await axios.post('http://localhost:8000/api/v1/group/add-group-expense',{group_id,moneyToMembers,paidby,description},
       { headers: { 'Authorization': `Bearer ${AuthServices.getAccessToken()}` } }
       );
       if(response){
        console.log('expanse added sucessfully')
       }
       else{
        console.log('err in connecting to server')
       }
   } catch (error) {
    console.log(error);
   }

  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <div className="flex">
    <div className="w-1/4 m-2">
    <div className="w-20">
    <img src={icon} alt="icon" />
    </div>
      
    </div>
    <div className="w-3/4 m-2">
      <div className="m-2">
        <input 
        onChange={(e)=>setDescription(e.target.value)}
          type="text"
          placeholder="description"
          value={description}
        />
      </div>
      <div>
        <div>
        <div className="relative">
      <button type="button" onClick={toggleMenu} className="inline-flex items-center px-2 bg-gray-300 text-gray-700 rounded-md focus:outline-none">
        {selectedOption}
        <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-3-3a1 1 0 1 1 1.414-1.414L10 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3A1 1 0 0 1 10 12z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
        {currencies.map((curr)=>(
          <>
          <li key={nanoid()} onClick={() => handleOptionClick(curr)} className="hover:bg-gray-100 px-4 py-2 cursor-pointer">{curr}</li>
          </>
      ))}
         
    
        </ul>
      )}
    </div>

        </div>
        <div>
            <input 
              onChange={(e)=>setAmount(e.target.value)}
              type="text"
              placeholder="amount"
              value={amount}
            />
        </div>
      </div>
      </div>
      </div>
      <div>
        <div className="flex justify-center">
            paid by 
            <div className=" px-2">
             <div className="text-red-500">
             <div className="relative">
      <button type="button" onClick={toggleMenuPayee} className="inline-flex items-center px-2 bg-gray-300 text-gray-700 rounded-md focus:outline-none">
        {selectedOptionPayee}
        <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-3-3a1 1 0 1 1 1.414-1.414L10 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3A1 1 0 0 1 10 12z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpenPayee && (
        <ul className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
        {members.map((member)=>(
          <>
          <li key={nanoid()} onClick={() => handleOptionClickPayee(member)} className="hover:bg-gray-100 px-4 py-2 cursor-pointer">{member}</li>
          </>
      ))}
         
    
        </ul>
      )}
    </div>
             </div>
            </div> 
            splits
            <button className="px-2">
            <div className="text-green-500">
            equally
            </div>
            
            </button>
        </div>
      </div>
      <div className="flex m-2 justify-center">
        <div>
          <input 
            onChange={(e)=>setDate(e.target.value)}
            type="date"
            value={date}
          />
        </div>
       
      </div>
      <div className="flex justify-center">
        <button type="submit"
        className="p-2 bg-green-500 rounded-lg">save</button>
      </div>
      </form>
    </div>
  )
};

export default AddExpanse;
