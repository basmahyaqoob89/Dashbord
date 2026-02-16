function Layout({ title, text, children }) {
  return (
  /**for all card  */
    <div className="bg-white rounded-xl shadow-sm flex flex-col border border-gray-100 w-full h-full ">
      {/** prop for all card text +title */}
      <div className=" p-6">
        <h1 className="text-xl font-bold text-gray-800 relative z-20 ">{title}</h1> 
        <p className="text-gray-400 text-sm relative  z-20  ">{text}</p>
        
      </div>
       {/** the diffrent */}
      <div className="relative">
        {children}
    </div>
    </div>
  );
}
export default Layout;