import { Outlet } from 'react-router';
import type { Route } from './+types/_index';
import { LandingCarousel } from '@/components/LandingCarousel/LandingCarousel';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div>
      <p>This is the index route of your app.</p>
      <LandingCarousel />
      <Outlet />
    </div>
  );
}
