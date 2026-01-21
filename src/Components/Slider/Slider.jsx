import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  // Dress images data
  const slides = [
    {
      id: 1,
      image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/5857cf118148407.608325fc4179d.jpg',
      title: 'Summer Collection',
      description: 'Light and breezy dresses for sunny days',
    },
    {
      id: 2,
      image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/5857cf118148407.608325fc4179d.jpg',
      title: 'Evening Wear',
      description: 'Elegant dresses for special occasions',
    },
    {
      id: 3,
      image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/5857cf118148407.608325fc4179d.jpg',
      title: 'Casual Style',
      description: 'Comfortable everyday outfits',
    },
    {
      id: 4,
      image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/5857cf118148407.608325fc4179d.jpg',
      title: 'Party Collection',
      description: 'Sparkling dresses for night out',
    },
    {
      id: 5,
      image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/fs/5857cf118148407.608325fc4179d.jpg',
      title: 'Office Wear',
      description: 'Professional and stylish work outfits',
    },
  ];

  // Auto slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, slides.length]);

  const goToSlide = index => {
    setCurrentSlide(index);
    if (isAutoPlaying) {
      clearInterval(intervalRef.current);
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 5000);
    }
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
    if (isAutoPlaying) {
      clearInterval(intervalRef.current);
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 5000);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    if (isAutoPlaying) {
      clearInterval(intervalRef.current);
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 5000);
    }
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slider container */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map(slide => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center text-white">
              <div className="text-center px-4 max-w-3xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  {slide.description}
                </p>
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-gray-800" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-gray-800" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm"
        >
          {isAutoPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default Slider;
