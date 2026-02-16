import Layout from "./Layout";
function Card2() {
  return (
    
/**the cll for text+t */ 
        <Layout title="Quick Draft" text="Write A Draft For Your Ideas">
           <div className="  px-3" >
            {/**input */}
             <input type="text" placeholder="title" 
    className=" px-3 h-8 w-full bg-gray-100 rounded "/>
     {/**textarea */}
           <textarea
  placeholder="your thought"
  className=" bg-gray-100 p-4 w-full mt-5 h-40  "
/>
             </div>
             {/**button */}
              <div className=" flex justify-end px-3 py-6">
           <button className=" rounded w-15 bg-blue-500 text-white cursor-pointer" > save </button></div>
      
      
        </Layout>


      
    
  
  );
}
export default Card2;