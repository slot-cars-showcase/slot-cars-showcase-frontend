import type { Car } from '@/schemas/car';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '../ui/card';
import { Badge } from '../ui/badge';

interface SlotCarProps {
  car: Car;
}
export const CarCard = ({ car }: SlotCarProps) => {
  return (
    <Card>
      <CardContent className="relative overflow-hidden pt-6">
        <img
          src={car.images.perspective_diagonal_front_left}
          alt={`${car.name} - front left view`}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-2 right-2 px-2 py-1">{car.scale}</Badge>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <CardTitle>
          {car.brand} {car.model}
        </CardTitle>
        <CardDescription>{car.name}</CardDescription>
      </CardFooter>
    </Card>
  );
};
