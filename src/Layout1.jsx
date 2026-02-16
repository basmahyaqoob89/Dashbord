import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { useState } from "react";

function Layout1({ children }){
  const [isOpen, setIsOpen] = useState(false);
  
  function toggleSidebar() {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
    return(

    <div className="bg-[#f1f5f9] min-h-screen grid grid-cols-[auto_1fr]">
       <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div>
        {/* Navbar */}
      <Navbar onMenuClick={toggleSidebar} />

    
        <div className="p-2 md:p-5">
          {children}
        </div>
      </div>



</div>
    )




}

export default Layout1;

