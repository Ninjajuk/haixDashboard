import SingleLineGraph from '../charts/SingleLinegraph';
import {socialIcon,socialIcon1} from '../data'
const userrating = 80;
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
                    <li key={index} className="flex items-center  px-4 py-2">
                      <div className={`w-10 h-10 ${item.color}`}>
                        {item.icon}
                      </div>
                        <div className=" bg-gray-100 text-center text-white">
                          <div className={`ml-2  h-2 bg-green-500 rounded-full shadow-md ${item.width}`}></div>
                        </div>

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