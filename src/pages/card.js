function Card(props){
    return(
        <>
           
            <div className="p-2 rounded-xl  bg-blue-500 text-white m-auto">
                 <div className="p-2 text-center py-7 ">
                    {props.function}
                 </div>
                 <div className="p-2 text-center py-5">
                    {props.description} 
                 </div>
            </div>
          
        </>
    )
}
export default Card;