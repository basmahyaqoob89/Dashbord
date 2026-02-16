import PCard from "./PCard";
import { FaCheck } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import PCard2 from "./PCard2";
import Layout1 from "./Layout1"
function PlansPage() {
  return (
    <div>
       <Layout1>
    <div className=" py-5 ">
                   
                    
                       <h1 className="text-3xl font-bold ">Plans</h1>

              <div className="flex items-center -mt-3 ">
                <h1 className="font-bold text-2xl">ـــــــــــ</h1>
               <h1 className="font-bold text-2xl text-white">ــــــــــــــ</h1>
</div>
</div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
        
        <PCard 
          title="Free" 
          price="$ 0.00"
          bgColor="bg-green-500" 
          borderColor="border-green-500"
        >
          <div className="flex flex-col justify-between  ">
     <div  className=" flex items-center gap-3 py-4 border-b border-gray-100 "> 
      <FaCheck className="text-green-500" />
      <div className="flex flex-col">
         {/**text and data */}
      <h1  > Access All Text Lessons</h1>
      </div>
   
      <div className=" w-15  px-10 rounded-md ml-auto  ">
       <FaInfoCircle className="text-gray-400" /> </div>
    
      </div>
       </div>

        <div className="flex flex-col justify-between  ">
     <div  className=" flex items-center gap-3 py-4 border-b border-gray-100 "> 
      <FaCheck className="text-green-500" />
      <div className="flex flex-col">
         {/**text and data */}
      <h1  > Access All Videos Lessons</h1>
      </div>
   
      <div className=" w-15  px-10 rounded-md ml-auto  ">
       <FaInfoCircle className="text-gray-400" /> </div>
    
      </div>
       </div>
<div className="flex flex-col justify-between  ">
     <div  className=" flex items-center gap-3 py-4 border-b border-gray-100 "> 
      <ImCross className="text-red-500" />
      <div className="flex flex-col">
         {/**text and data */}
      <h1  > Browse Content Without Ads</h1>
      </div>
   
      <div className=" w-15  px-10 rounded-md ml-auto  ">
       <FaInfoCircle className="text-gray-400" /> </div>
    
      </div>
       </div>
       <div className="mt-4">
       <button className="bg-green-500 rounded w-15">Join</button></div>

         

        </PCard>
        
<PCard2 />
      </div>
     </Layout1>
    </div>
    
  

 

  );
}

export default PlansPage;