'use client';

import React from 'react';
import CustomVideoPlayer from './CustomVideoPlayer';

interface VideoWrapperProps {
  src: string;
  className?: string;
}

const VideoWrapper: React.FC<VideoWrapperProps> = ({ src, className }) => {
  // Only use CustomVideoPlayer for .mp4 files
  if (src.endsWith('.mp4')) {
    return <CustomVideoPlayer src={src} className={className} />;
  }

  // Fallback to default video player for other formats
  return (
    <video className={className} controls>
      <source src={src} type={`video/${src.split('.').pop()}`} />
    </video>
  );
};

export default VideoWrapper; 