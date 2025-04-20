import { Outlet } from 'react-router';
import type { Route } from './+types/_index';
import { LandingCarousel } from '@/components/LandingCarousel/LandingCarousel';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

const CAROUSEL_IMAGES = [
  'https://raw.githubusercontent.com/PauVelasco77/slot-cars-images/refs/heads/main/images/avant-slot/cover/toyota_yaris.webp',
  'https://raw.githubusercontent.com/PauVelasco77/slot-cars-images/refs/heads/main/images/avant-slot/cover/opel_manta.webp',
  'https://raw.githubusercontent.com/PauVelasco77/slot-cars-images/refs/heads/main/images/avant-slot/cover/toyota_GR10.webp',
];

export default function Home() {
  return (
    <div>
      <p>This is the index route of your app.</p>
      <section className="bg-background">
        <LandingCarousel images={CAROUSEL_IMAGES} />
      </section>
      <Outlet />
    </div>
  );
}
