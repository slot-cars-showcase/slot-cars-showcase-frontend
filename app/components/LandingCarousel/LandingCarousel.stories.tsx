import type { Meta, StoryObj } from '@storybook/react';
import { LandingCarousel } from './LandingCarousel';

const meta: Meta<typeof LandingCarousel> = {
  title: 'Components/LandingCarousel',
  component: LandingCarousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LandingCarousel>;

// Base story with controls
export const Default: Story = {
  args: {},
};
