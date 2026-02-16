import Layout from "./Layout";
import Prop7 from "./Prop7";

function Card9() {
  return (
    <Layout title="Last Project Progress">
      <div className=" px-3 py-1  ">
        <div className="flex flex-col">

          {/**here the progress */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
                   {/**الدايره الفارغه */}
              <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center bg-white">
                {/**الدايره  */}
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>

              </div>
              {/**the line  */}
              <div className="border h-7  border-blue-500"></div>
            </div>
              {/**call to prop for text */}
            <div  className=" font-bold whitespace-nowrap">
            <Prop7 text="Got The Project" /> </div>
          </div>

          {/**here the progress */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
               {/**الدايره الفارغه */}
              <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center bg-white">
                 {/**الدايره  */}
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
               {/**the line  */}
              <div className="border h-7  border-blue-500"></div>
            </div>
            <div  className=" font-bold whitespace-nowrap">
               {/**call to prop for text */}
            <Prop7 text="Started The Project" /></div>
          </div>

          
          <div className="flex gap-4">
             {/**here the progress */}
            <div className="flex flex-col items-center">

              <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center bg-white">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
              <div className="border h-7  border-blue-500"></div>
            </div>
             {/**call to prop for text */}
            <div  className=" font-bold ">
            <Prop7 text="The Project About To Finish" /></div>
          </div>

          {/**here the progress */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full border-2 border-blue-500 bg-white flex items-center justify-center animate-pulse">
                 <div className="w-4 h-4 bg-blue-500 rounded-full "></div>
              </div>
             
              <div className="border h-7  border-blue-500"></div>
            </div>
            {/**call to prop for text */}
            <div  className=" font-bold whitespace-nowrap">
            <Prop7 text="Test The Project" /></div>
          </div>
 {/**here the progress */}
          <div className="flex gap-4 pb-3">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full border-2 border-blue-500 bg-white"></div>
            </div>
            {/**call to prop for text */}
            <div  className=" font-bold  ">
            <Prop7 text="Finish The Project&Get Money" /></div>
          </div>

        </div>

       {/**img*/}
        <img 
          src="/project.png" 
          className="w-40 opacity-10 absolute right-2 bottom-2 hidden lg:block md:block" 
        />
      </div>
    </Layout>
  );
}

export default Card9;