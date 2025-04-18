import { http, HttpResponse } from 'msw';
import Image from '@/assets/cars/CA18g-FORD-GT40-n7-3rd-24h-Le-Mans-1969-SIDE-OK-colore-e-dimensione-768x512.webp';

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('http://localhost:5173/car', () => {
    console.log('GET request intercepted');
    // ...and respond to them using this JSON response.
    return HttpResponse.json(
      {
        id: '3',
        brand: 'Ford',
        model: 'GT40',
        make: 'Slot.it',
        name: '24h Le Mans / #7 - M. Hailwood, D. Hobbs',
        scale: '1:32',
        reference: 'CA18g',
        year: 1966,
        category: ['Le Mans'],
        images: {
          perspective_diagonal_front_left: Image,
        },
      },
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }),
];
