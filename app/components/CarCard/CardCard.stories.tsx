import type { Meta, StoryObj } from '@storybook/react';
import { CarCard } from './CarCard';
import Image from '@/assets/cars/CA18g-FORD-GT40-n7-3rd-24h-Le-Mans-1969-SIDE-OK-colore-e-dimensione-768x512.webp';
import type { Car } from 'types-slot-cars';

const meta: Meta<typeof CarCard> = {
  title: 'Components/CarCard',
  component: CarCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
};

const data: Car = {
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
};

export default meta;
type Story = StoryObj<typeof CarCard>;

// Base story with controls
export const Default: Story = {
  args: {
    car: data,
  },
};
