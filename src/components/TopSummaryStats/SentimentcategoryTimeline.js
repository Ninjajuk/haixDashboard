import GroupedBarChart from "../charts/GroupBarChart";

function SentimentcategoryTimeline(){
    return(
        <>
       
        <div className="w-full h-full mt-2 bg-white  rounded-md shadow-lg">
          <div className="w-full h-64 flex ">
          <GroupedBarChart/>
          </div>
        </div>

        </>
    )
}
export default SentimentcategoryTimeline;