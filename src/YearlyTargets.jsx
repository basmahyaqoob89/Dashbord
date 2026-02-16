import Layout from "./Layout";
import Prop3 from "./prop3"
import { FaDollarSign, FaCode } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

function Card3() {
  const print = [{id:1, icon:<FaDollarSign className="text-blue-500 size-6" />,
          title:"money",
          value:"$20.000",
          percent:80,
          bgColor:"bg-blue-200",
          barBg:"bg-blue-100",
          barColor:"bg-blue-500",
          borderColor:"border-t-blue-500"} ,
          {id:2, icon:<FaCode className="text-amber-600 size-6" />,
          title:"Projects",
          value:"24",
          percent:55,
          bgColor:"bg-amber-200",
          barBg:"bg-amber-100",
          barColor:"bg-amber-500",
           borderColor:"border-t-amber-500"
          },
          {id:3,icon:<IoPerson className="text-emerald-600 size-6" />,
          title:"Team",
          value:"12",
          percent:75,
          bgColor:"bg-emerald-200",
          barBg:"bg-emerald-100",
          barColor:"bg-emerald-500",
            borderColor:"border-t-emerald-500"}
        
        
        
        ]
  
  return (
    <Layout title="Yearly Targets" text="Targets Of The Year">
      <div className="px-6 py-4 flex flex-col gap-4">
{/** maony */}
        
        {print.map((item)=>(<Prop3
        key={item.id}
          icon={item.icon}
          title={item.title}
          value={item.value}
          percent={item.percent}
          bgColor={item.bgColor}
          barBg={item.barBg}
          barColor={item.barColor}
          borderColor={item.borderColor}
        />))}


      </div>
    </Layout>
  );
}

export default Card3;
