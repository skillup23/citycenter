import React, { useEffect, useRef } from 'react';

function VideoMain({ videoLink }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  //   const video = '/marketing_img/video1.mp4';

  return (
    <video
      controls
      ref={videoRef}
      loop
      muted
      playsInline
      style={{ width: '100%', height: '100%' }}
      type="video/mp4"
      className=""
    >
      <source src={videoLink} />
    </video>
  );
}

export default VideoMain;
