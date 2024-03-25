import func from "../../assets/functions"
import Card from "../../card";

function    Functionalities(){
    return(
        
          <>
          <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-4 md:gap-3 md:p-1 h-auto">
              {func.map((data)=>{
                return(
                  <Card key={data.index}
                  function={data.function}
                  description={data.description}
                  pic={data.pic}
                 />
              )
                 
              })}
              </div>
          </>
        
    )
}
export default Functionalities;