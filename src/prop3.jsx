function Prop3({icon, title,value ,percent,bgColor,barBg,barColor,borderColor}) {
  return (
    <div className="flex items-center gap-4">

      {/* icon */}
      <div className={`${bgColor} w-14 h-14 flex items-center justify-center`}>
        {icon}
      </div>

      {/* content */}
      <div className="flex flex-col flex-1">
        <div>
          <div className="text-gray-500">{title}</div>
          <div className="font-bold">{value}</div>
        </div>

        {/* progress bar */}
        <div className={`relative h-1 ${barBg} w-full mt-1`}>
          <div
            className={`absolute left-0 top-0 h-full ${barColor}`}
            style={{ width: `${percent}%` }}
          >
            {/*icon num */}
            <div
              className={`${barColor} absolute -right-3 -top-7 text-white text-xs px-1 py-0.5 rounded-sm`}
            >
              {percent}%
              <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent  ${borderColor}`}></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default  Prop3 ;
