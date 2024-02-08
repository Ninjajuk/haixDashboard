import LineGraph from "../charts/LineGraph";



function SocialMediaSentimentalTimeline(){
    return (
      <>
        <div className="w-full h-full mt-2 bg-white  rounded-md shadow-lg">
          <div className="w-full h-64 flex ">
            <LineGraph />
          </div>
        </div>
      </>
    );
}
export default SocialMediaSentimentalTimeline;