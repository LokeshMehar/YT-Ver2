import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex flex-col w-full  md:flex-row ">
      <LeftNav />
      <div className="grow  h-full w-[calc(100%-240px)]overflow-y-auto bg-black w-full ">
        <div className="hide-scrollbar grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 ">
          {!loading &&
            searchResults?.map((item) => {
              if (item?.type === "video")
              {
                return (
                  <VideoCard key={item?.video?.videoId} video={item?.video} />
                );
              }
              else if(item?.type === "channel")
              {
                console.log("here");
                return <ChannelCard key={item?.channel?.channelId} channelDetail={item?.channel}/>
              }
              else{
                return false;
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
