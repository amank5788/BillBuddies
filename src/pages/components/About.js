import happy from '../../images/happy.svg';

function About(){
    return(
        <>
          <div className="flex">
          <div className="w-3/5 text-center m-auto">
                content
            </div>
            
            <div className="w-2/5 m-auto ">
                <img src={happy} alt="aman" />
            </div>
          </div>
        </>
    )
}
export default About;