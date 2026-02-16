function Prop10({ text,data }) {
  return (

          <div className="flex flex-col justify-between   ">
     <div  className=" flex items-center "> 
       {/**text and data */}
      <div className="flex flex-col  ">
      <h1  className="font-bold">{text}</h1>
      <p className=" text-gray-500">{data}</p>
      
      </div>
      
      </div>
       </div>
  
  );
}
export default  Prop10;