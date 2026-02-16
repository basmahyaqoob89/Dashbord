
import Card1 from "./card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
import Card7 from "./Card7";
import Card8 from "./Card8";
import Card9 from "./Card9";
import Card10 from "./Card10";
import Card11 from "./Card11";
import Card12 from "./Card12";
import Card13 from "./Card13";
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