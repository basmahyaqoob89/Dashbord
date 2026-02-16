
  import Layout from "./Layout";
function Card1() {
  return (
   
       /**the cll for text+t */ 
        <Layout title="Welcome" text="Elzero">
            {/**here the img and icon and backround */}
         
        <div className="h-35  absolute -top-25 left-0 w-full bg-gray-100  "> </div>
          <img src="/welcome.png" className="absolute -top-20  right-0   w-50 hidden lg:block"/>
          <img src="/avatar.png" className="w-15 z-30 absolute  top-2  left-1/2 -translate-x-1/2 md:left-8 border-4 border-white rounded-full bg-white"/>
          
           {/** div the border +t*/}
           <div className="relative border-y border-gray-100 mt-32 flex flex-col md:flex-row justify-around items-center " > 
          {/**the text  */}
           <div className="text-center  ">
            <h1 className="font-bold text-m">Osama Elzero</h1>
            <p className="text-gray-400"> Developer</p>
           </div>
           <div className="text-center ">
            <h1 className="font-bold text-m">80</h1>
            <p className="text-gray-400"> Projects</p>
           </div>
            <div className="text-center ">
            <h1 className="font-bold text-m">$8500</h1>
            <p className="text-gray-400"> Earned</p>
           </div>
           </div>
           {/**the button */}
           <div className=" flex justify-center md:justify-end lg:justify-end  px-3 py-6">
           <button className=" rounded w-15 bg-blue-500  text-white cursor-pointer   " > Profile </button></div>

   

          
        </Layout>
        
       


     
    
  
  );
}
export default Card1;