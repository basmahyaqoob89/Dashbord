import { Link } from "react-router-dom";

import { IoIosMenu } from "react-icons/io";

function SideBar( { isOpen, toggleSidebar }) {
 

  return (
    /**div الي ماسكه الكل */
    <aside className={`${isOpen ? "w-60" : "w-0 md:w-20"} ${isOpen ? "block" : "hidden md:block"} md:px-4 h-screen fixed md:relative z-50 bg-white px-4 py-3 shadow-md border-r border-gray-100`}>
      
      <div className="font-bold flex flex-row items-center gap-2 cursor-pointer" onClick={toggleSidebar}>
        <IoIosMenu className="text-2xl ml-2" />
        <h1 className={`text-lg ${isOpen ? "block" : "hidden"}`}>Elzero</h1> {/** text */}
      </div>

      {/** 1-dashbord */}
      <div className="w-20 md:w-40">
        <div className="flex items-center gap-4 pt-7 px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-md">
          <img src="/dash.png" className="w-4" />
          {isOpen ? <button title="dashbord" className="text-m cursor-pointer">Dashbord</button> : null}
        </div>

        {/** 2-Setting */}
        <div className="flex items-center gap-4 px-2 py-3 cursor-pointer hover:bg-gray-100">
          <img src="/set.png" className="w-4" />
          {isOpen ? <button className="text-m cursor-pointe">Setting</button> : null}
        </div>

        {/** 3 */}
        <div className="flex items-center gap-4 px-2 py-2 cursor-pointer hover:bg-gray-100">
          <img src="/pro.png" className="w-4" />
          {isOpen ? <button className="text-m cursor-pointe">Profile</button> : null}
        </div>

        {/** 4 */}
        <div className="flex items-center gap-4 px-2 py-2 cursor-pointer hover:bg-gray-100">
          <img src="/proj.png" className="w-4" />
          {isOpen ? <button className="text-m cursor-pointer">Project</button> : null}
        </div>

        {/** 5 */}
        <div className="flex items-center gap-4 px-2 py-2 cursor-pointer hover:bg-gray-100">
          <img src="/cor.png" className="w-4" />
          {isOpen ? <button className="text-m cursor-pointer">Courses</button> : null}
        </div>

        {/** 6 */}
        <div className="flex items-center gap-4 px-2 py-2 cursor-pointer hover:bg-gray-100">
          <img src="/fren.png" className="w-4" />
          {isOpen ? <button className="text-m cursor-pointer">Friends</button> : null}
        </div>

        {/** 7 */}
        <div className="flex items-center gap-4 px-2 py-2 cursor-pointer hover:bg-gray-100">
          <img src="/file.png" className="w-4" />
          {isOpen ? <button className="text-m cursor-pointer">Files</button> : null}
        </div>

        {/** 8 */}
        <Link to="/plans" className="flex items-center gap-4 px-2 pt-3 cursor-pointer hover:bg-gray-100">
          <img src="/plan.png" className="w-4" />
          {isOpen ? <div className="text-m">Plans</div> : null}
        </Link>
      </div>
    </aside>
  );
}

export default SideBar;
