import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { useRef } from 'react';

interface LandingCarouselProps {
  images: string[];
}

export const LandingCarousel = ({ images }: LandingCarouselProps) => {
  const plugin = useRef(
    Autoplay({
      delay: 3000,
    }),
  );
  return (
    <Carousel
      className="border-primary bg-background w-full border-2"
      plugins={[plugin.current]}
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
      opts={{
        dragFree: false,
        startIndex: 0,
        inViewThreshold: 0.5,
        duration: 50,
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="flex w-full items-center justify-center"
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="max-h-[50vh] w-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
