import Layout from "./Layout";
import { FaRegListAlt } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { LiaWindowClose } from "react-icons/lia";

function Card4() {
  return (

        <Layout title="Tickets Statistics" text="Everything About Support Tickets">
              <div className="  grid grid-cols-1 sm:grid-cols-2 gap-4 px-3 " >
               
            {/**icon 1 */}
                <div className="flex flex-col items-center border border-gray-200 h-25 rounded-lg py-2 ">
                    <FaRegListAlt  className="text-amber-500 w-7 h-10"/>
                    <h1 className="font-bold"> 2500</h1>
                    <p className="text-gray-400">Total</p>
                    
                    </div>
                     {/**icon 2 */}
               <div className="flex flex-col items-center  border border-gray-200 h-25 rounded-lg py-2">
                <FaSpinner  className="text-blue-500 w-7 h-10"/>
                <h1 className="font-bold"> 500</h1>
                    <p className="text-gray-400">Pending</p>
                </div> 
                {/**icon 3 */}
                 <div className="flex flex-col items-center border border-gray-200 h-25 rounded-lg py-2"> <FaRegCheckCircle  className="text-emerald-500 w-7 h-10" />
                 <h1 className="font-bold"> 1900</h1>
                    <p className="text-gray-400">Closed</p></div> 
                       {/**icon 4 */}
                <div className="flex flex-col items-center  border border-gray-200 h-25 rounded-lg py-2 "> <LiaWindowClose className="text-red-500 w-10 h-10" />
                <h1 className="font-bold"> 100</h1>
                    <p className="text-gray-400">Deleted</p>
                <div>
                </div>
</div>
</div>

              
           
      
      
      
      
        </Layout>


      
    
  
  );
}
export default Card4;