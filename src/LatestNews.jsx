import Layout from "./Layout";
function Card5() {
  return (
    
     
        
        
        /**call */
        <Layout title="Latest News">
           <div className="  px-2 " >
           { /**1 */}
            <div className="flex flex-col justify-between gap-3 ">
     <div  className="   gap-4 flex flex-col md:flex-row items-center text-center md:text-left py-1"> 
      <img src="/news-01.png" className="w-24 rounded-md"/> 
      <div className="flex flex-col justify-between ">
      <h1  className="font-bold text-sm ">Created SASS Section</h1>
      <p className=" text-gray-500 text-xs  "> New SASS Examples & Tutorials</p>
     
      </div>
       { /**butten1 */}
       <div className="bg-gray-200  text-sm px-2  py-1 rounded-md md:ml-auto    ">
      <p  >3 Days Ago</p> </div>
      </div>
       { /** border */}
<div  className=" border-b  border-gray-200 "> </div>

       { /** 2 */}
       <div  className=" gap-4 py-3 flex flex-col md:flex-row items-center text-center md:text-left "> 
      <img src="/news-02.png" className="w-24 rounded-md"/>
      <div className="flex flex-col  ">
      <h1  className="font-bold text-sm ">Changed The Design</h1>
      <p className=" text-gray-500 text-xs "> A Brand New Website Design</p>
      </div>
      { /** butten2 */}
      <div className="bg-gray-200 text-sm px-2 py-1 rounded-md  md:ml-auto   ">
      <p >5 Days Ago</p> </div>
      </div>
       { /**  border */}
      <div  className=" border-b  border-gray-200 "> </div>
        { /** 3 */}
      <div  className="  gap-4 py-3 flex flex-col md:flex-row items-center text-center md:text-left"> 
      <img src="/news-03.png" className="w-24 rounded-md"/>
       <div className="flex flex-col ">
      <h1 className="font-bold text-sm ">Team Increased</h1>
      <p className=" text-gray-500 text-xs "> 3 Developers Joined The Team</p>
      
      </div>
      { /** butten3 */}
      <div className="bg-gray-200 text-sm  px-2  py-1 rounded-md  md:ml-auto  ">
      <p >7 Days Ago</p> </div>
      </div> 
      
       { /**  border */}
        < div  className=" border-b  border-gray-200 "> </div>
      
      </div>
      { /** 4 */}
       <div  className=" gap-4 py-3 flex flex-col md:flex-row items-center text-center md:text-left  "> 
      <img src="/news-04.png" className="w-24 rounded-md"/>
      <div className="flex flex-col ">
      <h1 className="font-bold text-sm ">Added Payment Gateway</h1>
      <p className=" text-gray-500 text-xs "> Many New Payment Gateways Added</p>
      
      </div>
       { /** butten4*/}
      <div className="bg-gray-200 text-sm  px-2  py-1 rounded-md md:ml-auto  ">
      <p >9 Days Ago</p> </div>
      
       </div>
      
      
      
      
      </div>
      
        </Layout>

  
  );
}
export default Card5