import { FaCheck } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import PCard from "./PCard";


function PCard2() {
  return (
    
      <PCard
   title="Basic" 
          price="$ 7.99"
          bgColor="bg-blue-500" 
          borderColor="border-blue-500"
>
  {/* Feature 1 */}
  <div className="flex items-center gap-3 py-4 border-b border-gray-100">
    <FaCheck className="text-green-500" />
    <div className="flex flex-col">
      <h1>Access All Text Lessons</h1>
    </div>
    <div className="ml-auto">
      <FaInfoCircle className="text-gray-400" />
    </div>
  </div>

  {/* Feature 2 */}
  <div className="flex items-center gap-3 py-4 border-b border-gray-100">
    <FaCheck className="text-green-500" />
    <div className="flex flex-col">
      <h1>Access All Video Lessons</h1>
    </div>
    <div className="ml-auto">
      <FaInfoCircle className="text-gray-400" />
    </div>
  </div>

  {/* Feature 3 */}
  <div className="flex items-center gap-3 py-4 border-b border-gray-100">
    <FaCheck className="text-green-500" />
    <div className="flex flex-col">
      <h1>Browse Content Without Ads</h1>
    </div>
    <div className="ml-auto">
      <FaInfoCircle className="text-gray-400" />
    </div>
  </div>

  {/* Button */}
  <div className="mt-4">
    <button className="bg-blue-500 rounded w-15 text-white">Join</button>
  </div>
</PCard>

  );
}

export default PCard2;
