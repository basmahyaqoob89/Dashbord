
import Layout from "./Layout";
import Prop8 from "./Prop8";
function Card8() {
  const print = [
  { id: 1, img: "/pdf.svg", text: "my-file.pdf", data: "Elzero", num: "2.9mb" },
  { id: 2, img: "/avi.svg", text: "My-Video-File.avi", data: "Admin", num: "4.9mb" },
  { id: 3, img: "/psd.svg", text: "My-Psd-File.pdf", data: "Osama", num: "4.5mb" },
  { id: 4, img: "/zip.svg", text: "My-Zip-File.pdf", data: "User", num: "8.9mb" },
  { id: 5, img: "/dll.svg", text: "My-DLL-File.pdf", data: "Admin", num: "4.9mb" },
  { id: 6, img: "/eps.svg", text: "My-Eps-File.pdf", data: "Designer", num: "8.9mb" }
];
  return (
    
     
        
        
        
        <Layout title="Latest Uploads">
          <div className=" px-3" >
            {/**call to prop aand take this thing */}
           {print.map((file, index) => (
  <div key={file.id}>
    <Prop8 
      img={file.img} 
      text={file.text} 
      data={file.data} 
      num={file.num} 
    />
    
    {/* حركة ذكية: الخط يظهر فقط إذا لم يكن هذا هو العنصر الأخير */}
    {index !== print.length - 1 && (
      <div className="border-b border-gray-200 pb-2"></div>
    )}
  </div>
))}



          </div>
     
      
        </Layout>

  
  );
}
export default Card8;