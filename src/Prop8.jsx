function Prop8({ text,img,data,num  }) {
  return (

          <div className="flex flex-col justify-between  ">
     <div  className=" flex items-center gap-3 "> 
      {/**img */}
      <img src={img} className="w-10 rounded-md"/> 
      <div className="flex flex-col">
         {/**text and data */}
      <h1  className="font-bold">{text}</h1>
      <p className=" text-gray-500">{data}</p>
      
      </div>
        {/**num in end  */}
      <div className="bg-gray-200 w-15  px-2 rounded-md ml-auto  ">
      <p  >{num}</p> </div>
    
      </div>
       </div>
  
  );
}
export default  Prop8;