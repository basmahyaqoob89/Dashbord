import { FaInfoCircle } from "react-icons/fa";

function PCard({ title, price, borderColor, bgColor, children }) {
  return (
    <div className="bg-white rounded-xl shadow-sm flex flex-col border border-gray-100 w-full h-full">
      <div className="px-4 py-3">
        {/* الجزء العلوي (السعر) */}
        <div className={`border-2 ${borderColor} px-1 py-1`}>
          <div className={`font-bold ${bgColor} text-center p-8 text-3xl text-white`}>
            <h1>{title}</h1>
            <h1>{price}</h1>
          </div>
        </div>

        {/* هنا سيتم عرض كل الأسطر التي نضعها بين وسمي PCard */}
        <div className="flex flex-col mt-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default PCard;