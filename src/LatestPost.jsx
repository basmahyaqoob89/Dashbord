
import Layout from "./Layout";

import { FaRegHeart } from "react-icons/fa";
import { PiChatsCircleBold } from "react-icons/pi";

function Card11() {
  return (
    
        <Layout title="Latest Post">
            <div className=" " >
                {/**img and text in the top */}
                <div className=" flex  gap-4 px-4 items-center " >
                    <img src="/avatar.png" className="w-10 border rounded-full border-white "/>
                    <div>
                    <h1>Osama Elzero  </h1>
                    <p className="text-gray-500" >About 3 Hours Ago</p></div>

                </div>
                {/**border */}
                <div className="border-b border-gray-200 py-3 "></div>
                {/** text  */}
                <p className=" px-10  py-4  text-center lg:text-left md:text-left"> You can fool all of the people some of the time, 
                    and some of the people all of the time, 
                    but you can't fool all of the people all of the time.</p>
                <div className="border-b border-gray-200 py-4  "></div>
                <div className="flex justify-between text-gray-400 px-5 py-3">
              {/** icon  */}
               <h1 className=" flex  gap-2 items-center "> <FaRegHeart  />1.8K </h1>
              
              <h1 className=" flex  gap-2 items-center "> <PiChatsCircleBold />500 </h1>
                
                </div>


            </div>
         
      
        </Layout>

  
  );
}
export default Card11;