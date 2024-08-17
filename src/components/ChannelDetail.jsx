import React, { useContext, useEffect, useState } from 'react';
import LeftNav from './LeftNav';
import { useParams } from 'react-router-dom';
import { Context } from '../context/contextApi';
import { fetchDataFromApi } from '../utils/api';
import ChannelDesCard from './ChannelDesCard';
import ChannelVideoCard from './ChannelVideoCard';

const GradientOverlay = () => (
  <div className="absolute inset-0 z-10 rounded-xl"
    style={{
      height: '300px',
      background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)'
    }}
  />
);

const Box = ({ children }) => (
  <div className="relative">
    {children}
  </div>
);

const ChannelCardContainer = () => {
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [channelData, setChannelData] = useState({});
  const { id } = useParams();
  const { loading, setLoading } = useContext(Context);
  
  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchChannelData();
    fetchChannelVideo();
  }, [id]);

  const fetchChannelData = () => {
    setLoading(true);
    fetchDataFromApi(`channel/details/?id=${id}`)
      .then((res) => {
        console.log("Channel Data Response:", res);
        setChannelData(res); // Assuming `res` contains the correct data structure you expect
        console.log(channelData);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching channel data:", error);
        setLoading(false);
      });
  };

  const fetchChannelVideo = () => {
    setLoading(true);
    fetchDataFromApi(`channel/videos/?id=${id}`)
      .then((res) => {
        setRelatedVideos(res?.contents || []);
        console.log(relatedVideos);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <div className="flex flex-col w-full md:flex-row">
      <LeftNav />
      <div className="grow h-full w-[calc(100%-240px)] overflow-y-auto bg-black w-full">
        <Box>
          <div className="flex flex-col items-center justify-center">
            <GradientOverlay />
            {!loading && <ChannelDesCard channelDetail={channelData} verified={true} />}
            
          </div>
        </Box>
        <div className="hide-scrollbar grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading && relatedVideos.map((item) => {
            if (item?.type === "video") {
              const video = item.video;
              return (
                <ChannelVideoCard 
                  key={video.videoId} 
                  video={video} 
                  verified={true}
                  logo={channelData?.avatar?.[0]?.url} 
                  name={channelData?.title}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default ChannelCardContainer;
