function Prop7({ text,c  }) {
  return (
  
    <div className="flex flex-col justify-between gap-5 ">
         <div  className=" flex items-center  px-3 "> 
            {/**text */}
            <h1 className=" text-gray-800"> {text}</h1>
            <div className="bg-gray-200 w-10  px-2 rounded-md ml-auto   ">
               {/**text */}
      <p>{c}</p> </div>


   

    
    </div>
     </div>
       
  
  );
}
export default  Prop7;