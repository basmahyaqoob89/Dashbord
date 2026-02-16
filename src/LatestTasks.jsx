import Layout from "./Layout";
import { RiDeleteBin6Line } from "react-icons/ri";

function Card6() {
  return (
    
     
        
        /**call */
        <Layout title="Latest Tasks">
           <div className="  px-4 flex flex-col  gap-3" >
           
     <div  className=" flex items-center py-2 "> 
      {/**1 */}
      <div className="flex flex-col">
      <h1  className="font-bold text-sm">Record One New Video</h1>
      <p className=" text-gray-500 text-xs">Record Python Create Exe Project</p>
      
      </div>
      {/**icon */}
      <div className="    md:ml-auto  ml-auto   ">
     <RiDeleteBin6Line className="size-4 cursor-pointer hover:text-red-700 " />
       </div>

      </div>
       {/**border*/}
    <div  className=" border-b  border-gray-200 "> </div>
{/**4*/}
       <div  className="flex items-center py-2"> 
      <div className="flex flex-col  ">
      <h1  className="font-bold text-sm">Write Article</h1>
      <p className=" text-gray-500 text-xs"> Write Low Level vs High Level Languages</p>
      
      </div>
        {/**icon */}
      <div className="   md:ml-auto  ml-auto   ">
       <RiDeleteBin6Line className="size-4 cursor-pointer hover:text-red-700 " /></div>
      </div>
        {/**border*/}
      <div  className=" border-b  border-gray-200 "> </div>
      {/**4*/}
      <div  className=" flex items-center py-2 "> 
      
       <div className="flex flex-col ">
      <h1 className="font-bold text-sm ">Finish Project</h1>
      <p className=" text-gray-500 text-xs"> Publish Academy Programming Project</p>
      
      </div>
      {/**icon */}
      <div className="   md:ml-auto  ml-auto   ">
       <RiDeleteBin6Line className="size-4 cursor-pointer hover:text-red-700 " /></div>
      </div> 
      
       {/**border*/}
        < div  className=" border-b  border-gray-200 "> </div>
      
     
       {/**5*/}
       <div  className=" flex items-center py-2 opacity-30 "> 
      
      <div className="flex flex-col ">
      <h1 className="font-bold text-sm line-through">Attend The Meeting</h1>
      <p className=" text-gray-500 text-xs line-through"> Attend The Project Business Analysis Meeting</p>
      
      </div>
        {/**icon */}
       <div className=" md:ml-auto  ml-auto   ">
       <RiDeleteBin6Line className="size-4 cursor-pointer hover:text-red-700 " /></div>
      
      
       </div>
       {/**border*/}
       <div  className=" border-b  border-gray-200 "> </div>
      
       {/**5*/}
      <div  className=" flex items-center  py-2 "> 
      <div className="flex flex-col ">
      <h1 className="font-bold text-sm ">Finish Lesson</h1>
      <p className=" text-gray-500 text-xs"> Finish Teaching Flex Box</p>
      
      </div>
         {/**icon */}
       <div className=" md:ml-auto  ml-auto  ">
       <RiDeleteBin6Line className="size-4 cursor-pointer hover:text-red-700 " /></div>
       
      
       </div>
      
      
      
       </div>
      
      
        </Layout>

  
  );
}

  
  

export default Card6