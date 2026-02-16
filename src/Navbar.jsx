import { IoIosMenu } from "react-icons/io";
function Navbar({ onMenuClick }){

    return(
        /** */
<div  className=" px-6 py-3 w-full flex  bg-white justify-between items-center border border-gray-100 shadow-md  " >
     <IoIosMenu className="text-2xl md:hidden shrink-0" onClick={onMenuClick}/>
     
    <div className="relative flex items-center">
        
         {/** img  serach*/}
       
       < img src="/serr.png" className="  absolute left-3 w-4"/>
     {/**search  */}
    <input type=" search" placeholder="Type A Keyword" 
    className="  pl-8  h-9 text-xs   ml-2 border border-gray-200 rounded "/>
</div>
{/**icon  */}
 <div className="  flex items-center ml-2 shrink-0 ">
    < img src="/icons.png" className="  w-15 h-auto  md:w-24" />
</div>


</div>

    )
}
export default Navbar;