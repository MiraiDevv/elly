'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ModernSwiperProps {
  children: React.ReactElement[];
  showArrows?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  slidesPerView?: number;
  gap?: number;
  onSlideChange?: (index: number) => void;
}

const ModernSwiper: React.FC<ModernSwiperProps> = ({
  children,
  showArrows = true,
  showDots = true,
  autoPlay = true,
  autoPlayInterval = 3000,
  slidesPerView = 3,
  gap = 32,
  onSlideChange
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = React.Children.count(children);
  const slideWidth = containerRef.current
    ? (containerRef.current.offsetWidth - (gap * (slidesPerView - 1))) / slidesPerView
    : 0;

  // Clone slides for infinite loop
  const slides = React.useMemo(() => {
    const items = React.Children.toArray(children);
    const beforeClones = items.slice(-slidesPerView);
    const afterClones = items.slice(0, slidesPerView);
    return [...beforeClones, ...items, ...afterClones];
  }, [children, slidesPerView]);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  }, [isTransitioning]);

  const handlePrev = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index + slidesPerView);
  };

  const handleTransitionEnd = () => {
    // Only reset position after the transition is complete
    if (currentIndex >= totalSlides + slidesPerView) {
      setIsTransitioning(false);
      // Remove transition temporarily
      if (containerRef.current) {
        containerRef.current.style.transition = 'none';
        setCurrentIndex(slidesPerView);
        // Force browser reflow
        void containerRef.current.offsetHeight;
        // Restore transition
        containerRef.current.style.transition = '';
      }
    } else if (currentIndex <= slidesPerView - 1) {
      setIsTransitioning(false);
      if (containerRef.current) {
        containerRef.current.style.transition = 'none';
        setCurrentIndex(totalSlides + slidesPerView - 1);
        void containerRef.current.offsetHeight;
        containerRef.current.style.transition = '';
      }
    } else {
      setIsTransitioning(false);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (!containerRef.current) return;
    
    const scrollPosition = containerRef.current.scrollLeft;
    const slidePosition = Math.round(scrollPosition / slideWidth) + slidesPerView;
    setCurrentIndex(slidePosition);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  useEffect(() => {
    // Initialize to show first actual slide (after clones)
    setCurrentIndex(slidesPerView);
  }, [slidesPerView]);

  useEffect(() => {
    if (autoPlay && !isDragging) {
      autoPlayRef.current = setInterval(handleNext, autoPlayInterval);
      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
      };
    }
    return undefined;
  }, [autoPlay, autoPlayInterval, isDragging, handleNext]);

  useEffect(() => {
    if (onSlideChange) {
      onSlideChange((currentIndex - slidesPerView) % totalSlides);
    }
  }, [currentIndex, slidesPerView, totalSlides, onSlideChange]);

  return (
    <div className="relative group">
      <div
        ref={containerRef}
        className="overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (slideWidth + gap)}px)`,
            gap: `${gap}px`
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${slideWidth}px` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg flex items-center justify-center text-gray-800 dark:text-white opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            style={{ zIndex: 2 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg flex items-center justify-center text-gray-800 dark:text-white opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            style={{ zIndex: 2 }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 pb-4">
          {React.Children.map(children, (_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                (currentIndex - slidesPerView) % totalSlides === index
                  ? 'bg-[#F56565] w-4'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-[#F56565]/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ModernSwiper; 