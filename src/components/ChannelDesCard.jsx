import React, { useContext } from 'react';

import { BsFillCheckCircleFill } from 'react-icons/bs';
import abbreviateNumber from "../shared/abbreviationNumber";
import { Context } from '../context/contextApi';

const ChannelDesCard = ({ channelDetail,verified=false}) => {
  
  return (
    <div
      className={`flex flex-col items-center justify-center w-[356px] md:w-[320px] z-10 h-[326px] mt-[150px]`}
    >
      <a href='#'>
        <div className="flex flex-col items-center justify-center text-center text-white">
          <img
            src={channelDetail?.avatar?.[0]?.url}
            alt={channelDetail?.title}
            className="rounded-full h-[180px] w-[180px] mb-2"
          />
          <div className="flex flex-row">
            <h6 className="text-xl">
              {channelDetail?.title}{' '}
            </h6>
            {verified && (
              <BsFillCheckCircleFill className="text-gray-400 ml-2" size={14} />
            )}
          </div>
          {channelDetail?.stats?.views && (
            <p className="text-sm font-medium text-gray-400">
              {channelDetail?.title} &#32; &#9657;  &#32;
              {`${abbreviateNumber(channelDetail?.stats?.views)} views`}
            </p>
          )}
        </div>
      </a>
    </div>
  );
};

export default ChannelDesCard;
