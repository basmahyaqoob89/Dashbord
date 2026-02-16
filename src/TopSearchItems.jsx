import Layout from "./Layout";
import Prop7 from "./Prop7";
function Card7() {
  const print=[
  
    {id : 1, text:"Programming" ,c:"200" },
    {id:2,text:"JavaScript" ,c:"180"},
    {id:3,  text:"php", c:"160" },
    {id:4,text:"code", c:"145"},
    {id:5,text:" Design", c:"110"},
    {id:6,text:" Logic" ,c:"95" }
  

  ]
  return (
    
     
        
        /**call for card */
        <Layout title="Top Search Items">
           <div className=" px-3 pb-3 " >
            <div className="flex flex-col justify-between gap-5 ">
     <div  className=" flex items-center "> 
        { /**text the top*/}
      <h1  className="text-gray-500 px-2">Keyword</h1>
      <div className="w-30  px-2 rounded-md ml-auto text-gray-500  ">
         <p> Search Count</p>
       </div>
       
      
      </div>
       { /**call to prop*/}
       {print.map((item)=>(
       <Prop7 key={item.id}
       text={item.text} c= {item.c}
      
      
      
      
    /> ) )}
       
      </div>
      </div>
       
        </Layout>

  
  );
}

  
  

export default Card7;