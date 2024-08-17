import React from "react";

const VideoLength = ({ time }) => {
  let videoLengthInSeconds;
  if (time > 59) {
    let seconds = time % 60;
    let minutes = Math.trunc(time / 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (minutes > 59) {
      minutes = minutes % 60;
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      const hours = Math.trunc(minutes / 60);
      videoLengthInSeconds = `${hours}:${minutes}:${seconds}`;
    }
    videoLengthInSeconds = `${minutes}:${seconds}`;
  } else {
    videoLengthInSeconds = `0:${time}`;
  }
  return (
    <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
      {videoLengthInSeconds}
    </span>
  );
};

export default VideoLength;
