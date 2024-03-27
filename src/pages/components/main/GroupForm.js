import React from "react"
import { useForm } from "react-hook-form";
import Button from "../../Button";
import Input from "../../Input";
import axios from "axios";

function GroupForm () {
    const {register, handleSubmit} = useForm();
    const Add=async(data)=>{
       try{
        const res= axios.await('',data);
        if(res){

        }
        else{
            console.log("err while connecting to backend");
        }

       }
       catch(err){
        console.log(err);

       }
    }
  return (
    <div>
    <form onSubmit={handleSubmit(Add)} >
      <div>
         <div className=" flex justify-center">
         <img  src="" alt="group icon" />
         </div>
         <Input
                        label="Group Icon: "
                        type='file'
                        accept="image/*"
                        {...register("icon", {
                            required: true,
                        })}
                        />
      </div>
      <div>
      <Input
                        label="Group Name: "
                        type='text'
                       
                        {...register("name", {
                            required: true,
                        })}
                        />
        <Button className="m-2" type="submit">
              Add Group
        </Button>
      </div>
      </form>
    </div>
  )
};

export default GroupForm;
