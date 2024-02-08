import {socialIcon,socialIcon1} from '../data'
const FollowerStats=()=>{
    return (
      <>
        <div className="h-full mt-2 bg-gray-900/10 rounded-md shadow-lg">
          <div className=" h-full flex flex-col items-center    px-2">
            <div className="h-4 flex justify-start">
              <h1 className="text-blue-600 py-2 ">Followers Stats </h1>
            </div>

            <div className=" h-60 flex items-center justify-center">
              <ul className="flex ">
                {socialIcon1.map((item, index) => (
                  <li key={index} className="flex flex-col px-4 ">
                    <span className={`w-10 h-10 ${item.color}`}>
                      {item.icon}
                    </span>
                    <span className="pt-2 font-bold">
                      {item.followerscount}
                    </span>
                    <span className="text-sm whitespace-nowrap">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}
export default FollowerStats;