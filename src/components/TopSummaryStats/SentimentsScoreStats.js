import {socialIcon,socialIcon1} from '../data'
function SentimentsScoreStats(){
    return (
      <>
        <div className="h-full bg-gray-100 rounded-md shadow-lg mt-2 ">
          <div className=" h-full flex flex-col    px-2">
            <div className="h-4 flex justify-start">
              <h1 className="text-blue-600 py-2 ">Sentiments Score</h1>
            </div>

            <div className=" h-60 flex items-center justify-start">
              <ul className="flex flex-col">
                {socialIcon1
                  .filter((item) => item.title !== "Facebook")
                  .map((item, index) => (
                    <li key={index} className="flex flex-col px-4 py-2">
                      <span className={`w-10 h-10 ${item.color}`}>
                        {item.icon}
                      </span>
                      {/* <span><XAxisOnlyGraph/></span> */}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}
export default SentimentsScoreStats;