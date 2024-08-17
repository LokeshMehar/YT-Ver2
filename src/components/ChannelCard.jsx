import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Context } from '../context/contextApi';

const ChannelCard = ({ channelDetail, marginTop = '8 '}) => {
  const { selectedChannel, setSelectedChannel, selectedChannelLink, setSelectedChannelLink } = useContext(Context);
  
  
  return (
    <div className="flex flex-row justify-center w-full rounded-lg ">
    <div
      className={`flex flex-col items-center justify-center w-[356px] md:w-[320px] z-10 h-[326px] mt-${marginTop}`}
    >
      <Link to={`/channel/${channelDetail?.channelId}`}>
        <div className="flex flex-col items-center justify-center text-center text-white">
          <img
            src={channelDetail?.avatar?.[1]?.url}
            alt={channelDetail?.title}
            className="rounded-full h-[180px] w-[180px] mb-2"
          />
          <div className="flex flex-row">
            <h6 className="text-xl">
              {channelDetail?.title}{' '}
            </h6>
            {channelDetail?.badges?.[0]?.type === 'VERIFIED_CHANNEL' && (
              <BsFillCheckCircleFill className="text-gray-400 ml-2" size={14} />
            )}
          </div>
          {channelDetail?.stats?.subscribersText && (
            <p className="text-sm font-medium text-gray-400">
              {channelDetail.username} &#32; &#9657;  &#32;
              {channelDetail.stats.subscribersText}
            </p>
          )}
        </div>
      </Link>
    </div>
    </div>
  );
};

export default ChannelCard;
