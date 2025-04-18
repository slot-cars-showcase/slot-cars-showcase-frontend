import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { useRef } from 'react';
import FordGT from '@/assets/cars/CA18g-FORD-GT40-n7-3rd-24h-Le-Mans-1969-SIDE-OK-colore-e-dimensione-768x512.webp';
import LanciaLC2 from '@/assets/cars/CA21g-Lancia-LC2-1000-Km-Monza-1998-SIDE.webp';
import OpelCalibra from '@/assets/cars/CA36g-Calibra-n.16-2nd-Norisring-ITC-1996-SIDE.webp';
import Porsche962C from '@/assets/cars/CA52c-Porsche-962C-n9-Jarama-1992-SIDE.webp';
import Porsche962C2 from '@/assets/cars/CA02m-Porsche-956LH-n.17-24h-Le-Mans-1984-SIDE-995x663.webp';
import BritishBarn from '@/assets/cars/CA19f-British-Barn-BB90R-Suzuka-1000-Km-1990-SIDE_1-995x663.webp';

const images = [
  FordGT,
  LanciaLC2,
  OpelCalibra,
  Porsche962C,
  Porsche962C2,
  BritishBarn,
];

export const LandingCarousel = () => {
  const plugin = useRef(
    Autoplay({
      delay: 3000,
    }),
  );
  return (
    <Carousel
      className="w-full"
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
              className="max-h-[50vh] w-full object-contain"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
