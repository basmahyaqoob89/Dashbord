function Prop13({ Name,FinishDate,	Client,Price,children,Status,bg }){
      return (
       <tr  className="hover:bg-gray-100">
                     <td className="border border-gray-200  p-6 whitespace-nowrap">{Name}</td>
                    <td className="border border-gray-200  p-6 whitespace-nowrap">{FinishDate}</td>
                    <td className="border border-gray-200  p-6 whitespace-nowrap">{	Client}</td>
                    <td className="border  border-gray-200  p-6 ">{Price}</td>
                    <td className="border border-gray-200  p-6 ">  
                                   <div className="flex -space-x-4 ">
                                       {children}
                            

                        </div></td>
                    
                    <td className="border border-gray-200 p-6 ">
                        <span className={ `${bg} rounded   px-4 py-0.5  text-white whitespace-nowrap`}>{Status}</span></td>
                   
                    </tr>
     
  
  );
}
export default  Prop13;