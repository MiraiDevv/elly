'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Maximize, Minimize, Volume2, VolumeX, Volume1 } from 'lucide-react';

interface CustomVideoPlayerProps {
  src: string;
  className?: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ src, className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [volume, setVolume] = useState(1);
  const [previousVolume, setPreviousVolume] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!videoRef.current) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width);
    const newTime = percentage * videoRef.current.duration;
    videoRef.current.currentTime = Math.max(0, Math.min(newTime, videoRef.current.duration));
  };

  const handleProgressMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    const progressBar = e.currentTarget;
    
    const handleMouseMove = (e: MouseEvent) => {
      const bounds = progressBar.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - bounds.left, bounds.width));
      const percentage = x / bounds.width;
      if (videoRef.current) {
        const newTime = percentage * videoRef.current.duration;
        videoRef.current.currentTime = Math.max(0, Math.min(newTime, videoRef.current.duration));
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error('Error toggling fullscreen:', err);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 2000);
  };

  const toggleMute = () => {
    if (volume > 0) {
      setPreviousVolume(volume);
      setVolume(0);
    } else {
      setVolume(previousVolume);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setPreviousVolume(newVolume);
  };

  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX className="w-6 h-6" />;
    if (volume < 0.5) return <Volume1 className="w-6 h-6" />;
    return <Volume2 className="w-6 h-6" />;
  };

  return (
    <div 
      ref={containerRef}
      className={`relative group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowControls(true)}
    >
      {/* Center play/pause button */}
      <div 
        className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300
          ${isPlaying && !showControls ? 'opacity-0' : 'opacity-100'}
          ${isPlaying ? 'bg-black/0' : 'bg-black/40'}`}
        onClick={togglePlay}
      >
        <button 
          className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F56565] text-white
            transform transition-transform hover:scale-110 active:scale-95"
        >
          {isPlaying ? (
            <Pause className="w-8 h-8" />
          ) : (
            <Play className="w-8 h-8 ml-1" />
          )}
        </button>
      </div>

      {/* Video element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onClick={togglePlay}
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Controls overlay */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent
          px-4 py-3 transition-opacity duration-300 ${showControls ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => {
          if (isPlaying) {
            controlsTimeoutRef.current = setTimeout(() => {
              setShowControls(false);
            }, 2000);
          }
        }}
      >
        {/* Progress bar */}
        <div className="group/progress mb-3 relative z-20">
          <div 
            className="relative h-2 bg-white/30 rounded-full cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const bounds = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - bounds.left;
              const percentage = x / bounds.width;
              if (videoRef.current) {
                videoRef.current.currentTime = percentage * videoRef.current.duration;
              }
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const bar = e.currentTarget;
              
              const handleMouseMove = (moveEvent: MouseEvent) => {
                moveEvent.preventDefault();
                moveEvent.stopPropagation();
                const bounds = bar.getBoundingClientRect();
                const x = Math.max(0, Math.min(moveEvent.clientX - bounds.left, bounds.width));
                const percentage = x / bounds.width;
                if (videoRef.current) {
                  videoRef.current.currentTime = percentage * videoRef.current.duration;
                }
              };
              
              const handleMouseUp = (upEvent: MouseEvent) => {
                upEvent.preventDefault();
                upEvent.stopPropagation();
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
              };
              
              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
          >
            <div 
              className="absolute inset-y-0 left-0 bg-[#F56565] rounded-full"
              style={{ width: `${progress}%` }}
            />
            <div 
              className="absolute top-1/2 -translate-y-1/2 h-4 w-4 bg-[#F56565] rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-opacity"
              style={{ left: `${progress}%`, transform: `translate(-50%, -50%)` }}
            />
          </div>
        </div>

        {/* Bottom controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={togglePlay}
              className="text-white hover:text-[#F56565] transition-colors p-2 cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>
            <div 
              className="relative group z-50"
              onMouseEnter={() => setShowVolumeSlider(true)}
              onMouseLeave={() => setShowVolumeSlider(false)}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleMute();
                }}
                className="text-white hover:text-[#F56565] transition-colors p-2 cursor-pointer"
              >
                {getVolumeIcon()}
              </button>
              <div 
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-black/90 rounded-lg transition-all duration-200
                  ${showVolumeSlider ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleVolumeChange(e);
                  }}
                  className="w-24 h-1 appearance-none bg-white/30 rounded-full cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
                    [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#F56565]
                    [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:bg-[#F56565] [&::-moz-range-thumb]:border-none"
                />
              </div>
            </div>
            <span className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <button 
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleFullscreen();
            }}
            className="text-white hover:text-[#F56565] transition-colors p-2 cursor-pointer z-50"
          >
            {isFullscreen ? (
              <Minimize className="w-6 h-6" />
            ) : (
              <Maximize className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer; 