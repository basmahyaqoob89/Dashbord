
import Layout from "./Layout";
import Prop10 from "./Prop10";

function Card10() {
  const print = [
  { 
    id: 1, 
    text: "Check My Tasks List", 
    data: "28/09/2022 - 12:00am", 
    color: "bg-blue-500" 
  },
  { 
    id: 2, 
    text: "Check My Projects", 
    data: "26/10/2022 - 12:00am", 
    color: "bg-emerald-500" 
  },
  { 
    id: 3, 
    text: "Call All My Clients", 
    data: "05/11/2022 - 12:00am", 
    color: "bg-amber-500" 
  },
  { 
    id: 4, 
    text: "Finish The Development Workshop", 
    data: "20/12/2022 - 12:00am", 
    color: "bg-red-500" 
  }
];
  return (
    
     
        
        
        
        <Layout title="Reminders">
          <div className=" px-5 text-sm " >
           
           
           {print.map((item) => (
      <div key={item.id} className="py-3 flex">
        
      
        <div className="flex flex-row items-center gap-3">
          <div className={`w-4 h-4 ${item.color} rounded-full`}></div>
          <div className={`w-0.5 h-10 ${item.color} mr-3`}></div>
        </div>

       
        <Prop10 
          text={item.text} 
          data={item.data} 
        />
        
      </div>
    ))}


</div>
        
     
      
        </Layout>

  
  );
}
export default Card10;