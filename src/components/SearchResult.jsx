import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import ChannelCard from "./ChannelCard";
import { v4 as uuidv4 } from 'uuid';
import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  const { loading,setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      setResult(res?.contents);
      console.log(res);
      setLoading(false);
    });
  };

  return (
    <div className="flex flex-col w-full  md:flex-row">
      <LeftNav />
      <div className="grow  h-full w-[calc(100%-240px)]overflow-y-auto bg-black w-full hide-scrollbar">
        <div className="hide-scrollbar grid grid-cols-1 gap-2 p-5">
          {!loading && result?.map((item) => {
            if (item?.type === "video")
              {
                let video = item.video;
                return <SearchResultVideoCard key={uuidv4()} video={video} />;
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

export default SearchResult;
