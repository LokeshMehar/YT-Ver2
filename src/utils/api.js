import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "en", gl: "IN" },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url,id="") => {
  if(id==="")
  {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }
  else
  {
    options.params.id = id;
    options.params.filter = "videos_latest";
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }
};


// const dat  = 
// (
//   <div className="flex flex-col w-full  md:flex-row ">
//     <LeftNav />
//     <div className="grow  h-full w-[calc(100%-240px)]overflow-y-auto bg-black w-full ">
//       <div className="hide-scrollbar grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 ">
//         {!loading &&
//           searchResults?.map((item) => {
//             if (item?.type === "video")
//             {
//               return (
//                 <VideoCard key={item?.video?.videoId} video={item?.video} />
//               );
//             }
//             else if(item?.type === "channel")
//             {
//               console.log("here");
//               return <ChannelCard key={item?.channel?.channelId} channelDetail={item?.channel}/>
//             }
//             else{
//               return false;
//             }
//           })}
//       </div>
//     </div>
//   </div>
// );
