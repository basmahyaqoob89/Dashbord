
import Layout from "./Layout";

import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

function Card12() {
  return (
    
        <Layout title="Social Media Stats">
            <div  >
               {/**icon  */}
                <div className=" flex flex-col  gap-4 px-4 pb-3   " >
             <div className="flex  items-center gap-4 bg-blue-100 pr-4     ">
                <div className="  bg-blue-400 size-14  flex items-center px-4">
             <FaTwitter   className=" text-white text-2xl "/></div>
            {/**text  */}
             <p className="text-blue-400 flex-1 text-sm md:text-md"> 90K Followers</p> 
            {/**button   */}
           
             <button className="bg-blue-500 text-white rounded px-2 cursor-pointer justify-center  ">follow</button>
             
             </div>

              
            {/**icon  */}
                
             <div className="flex  items-center gap-4 bg-blue-200 pr-4   ">
                <div className="  bg-blue-500 size-14  flex items-center px-4 ">
             <FaFacebookF    className=" text-white w-17 h-17  "/></div>
             {/**text  */}
             <p className="text-blue-500 flex-1  text-sm md:text-md"> 2M Like</p> 
              {/**button   */}
             <button className="bg-blue-600 text-white rounded px-2  cursor-pointer   ">like</button>
             
             </div>
             {/**icon  3*/}
             <div className="flex  items-center gap-4 bg-red-200 pr-4  ">
                <div className="  bg-red-600 size-14  flex items-center px-4 ">
             <IoLogoYoutube    className=" text-white w-17 h-17  "/></div>
            {/**text  */}
             <p className="text-red-500 flex-1 text-sm md:text-md"> 1M Subs</p> 
                {/**button   */}
             <button className="bg-red-600 text-white rounded px-2  cursor-pointer  ">Subscribe</button>
             
             </div>
               {/**icon  */}
                <div className="flex  items-center gap-4 bg-sky-200 pr-4    ">
                <div className="   bg-sky-700 size-14  flex items-center px-4 ">
             <FaLinkedinIn   className=" text-white w-17 h-17  "/></div>
            {/**text  */}
             <p className=" text-sky-600 flex-1  text-sm md:text-md"> 70K Followers</p> 
              {/**button   */}
             <button className="bg-sky-700 text-white rounded px-2  cursor-pointer  ">follow</button>
             
             </div>
             
             


           
         
      </div>
      </div>
     

        </Layout>

  
  );
}
export default Card12;