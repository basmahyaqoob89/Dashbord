
import Layout from "./Layout";
import Prop13 from "./Prop13";



function Card13() {
 const pro = [
  {
    id: 1,
    name: "Ministry Wikipedia",
    date: "10 May 2022",
    client: "Ministry",
    price: "$5300",
    status: "Pending",
    bg: "bg-amber-500",
    team: ["/team-01.png", "/team-02.png", "/team-03.png", "/team-05.png"]
  },
  {
    id: 2,
    name: "Elzero Shop",
    date: "12 May 2021",
    client: "Elzero Company",
    price: "$1500",
    status: "In Progress",
    bg: "bg-blue-500",
    team: ["/team-01.png", "/team-02.png", "/team-05.png"]
  },
  {
    id: 3,
    name: "Bouba App",
    date: "05 Sep 2021",
    client: "Bouba",
    price: "$800",
    status: "Completed",
    bg: "bg-green-500",
    team: ["/team-02.png", "/team-03.png"]
  },
  {
    id: 4,
    name: "Mahmoud Website",
    date: "22 May 2021",
    client: "Mahmoud",
    price: "$600",
    status: "Completed",
    bg: "bg-green-500",
    team: ["/team-01.png", "/team-02.png"]
  },
  {
    id: 5,
    name: "Sayed Website",
    date: "24 May 2021",
    client: "Sayed",
    price: "$300",
    status: "Rejected",
    bg: "bg-red-500",
    team: ["/team-01.png", "/team-03.png"]
  },
  {
    id: 6,
    name: "Arena Application",
    date: "01 Mar 2021",
    client: "Arena Company",
    price: "$2600",
    status: "Completed",
    bg: "bg-green-500",
    team: ["/team-01.png", "/team-02.png", "/team-03.png", "/team-04.png"]
  }
];

  return (
    /**the table */
        <Layout title="Projects">
            <div className="w-full  px-2 pb-3 overflow-x-auto" >
                <table   className=" min-w-full text-left overflow-x-auto " >
                   { /**the head */}
                    <thead>
                     <tr className=" bg-gray-200 w-full   ">
                     <th  className="border border-gray-200  p-4">Name</th>
                    <th className="border  border-gray-200  p-4">Finish Date</th>
                    <th className="border border-gray-200  p-4 ">Client</th>
                    <th className="border border-gray-200  p-4 ">Price</th>
                    
                    <th className="border  border-gray-200  px-4 ">Team</th>
                    <th className="border  border-gray-200  px-4 ">Status</th>
                    </tr>
                </thead>
                <tbody>
  {pro.map((project) => (
    <Prop13
      key={project.id}
      Name={project.name}
      FinishDate={project.date}
      Client={project.client}
      Price={project.price}
      Status={project.status}
      bg={project.bg}
    >
  
      {project.team.map((imgSrc, index) => (
        <img 
          key={index} 
          src={imgSrc} 
          className="w-8 h-8 rounded-full border-2 border-white shrink-0" 
        />
      ))}
    </Prop13>
  ))}
</tbody>



                </table>
                    

            </div>
            

        </Layout>

  
  );
}
export default Card13;