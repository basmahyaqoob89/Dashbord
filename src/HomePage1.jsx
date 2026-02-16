
import Card1 from "./Welcome";
import Card2 from "./QuickDraft";
import Card3 from "./YearlyTargets";
import Card4 from "./TicketsStatistics";
import Card5 from "./LatestNews";
import Card6 from "./LatestTasks";
import Card7 from "./TopSearchItems";
import Card8 from "./LatestUploads";
import Card9 from "./LastProjectProgress";
import Card10 from "./Reminders";
import Card11 from "./LatestPost";
import Card12 from "./SocialMediaStats";
import Card13 from "./Projects";
import Layout1 from "./Layout1";

function Cards(){
  const print=[Card1,Card2,Card3,Card4,Card5,Card6,Card7,Card8,Card9,Card10,Card11,Card12];
    return (
      <div>
       <Layout1>
       
        <div>
          <div className=" py-5 ">
                   
                    {/**علامه الي موجوده*/}
                       <h1 className="text-3xl font-bold ">Dashboard</h1>


              <div className="flex items-center -mt-3 ">
                <h1 className="font-bold text-2xl">ـــــــــــ</h1>
               <h1 className="font-bold text-2xl text-white">ــــــــــــــ</h1>


                    </div>
                    </div>

                    
                
       
           { /**cards*/}
         <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-6  ">
          {print.map((Card,index) => (
            <div key={index}>
              <Card />
            </div>
            
          
         )) }
                 
              <div className="col-span-1 md:col-span-2">
                <Card13/></div>
                    
                 </div>
                
                 </div>
                   </Layout1>
                   </div>
                
                 
                 
            
    
      

    )

    




}
    export default Cards;