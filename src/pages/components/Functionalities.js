import func from "../assets/functions"
import Card from "../card";

function    Functionalities(){
    return(
        
          <>
          <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-4 md:gap-2 md:p-2 ">
              {func.map((data,inddex)=>{
                return(
                  <Card 
                  function={data.function}
                  description={data.description}
                 />
              )
                 
              })}
              </div>
          </>
        
    )
}
export default Functionalities;