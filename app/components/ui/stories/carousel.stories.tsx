import type { Meta, StoryObj } from '@storybook/react';
import Autoplay from 'embla-carousel-autoplay';
import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Define the component that we'll use in our stories
export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

// Define the metadata for the story
const meta: Meta<typeof CarouselPlugin> = {
  title: 'Components/UI/Carousel',
  component: CarouselPlugin,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A carousel component with autoplay functionality using embla-carousel-autoplay plugin.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {}, // No props to control in this example
};

export default meta;
type Story = StoryObj<typeof CarouselPlugin>;

// Define the default story
export const Default: Story = {
  args: {},
};

// Define a story with custom delay
export const CustomDelayCarousel: Story = {
  render: () => <CustomDelayCarouselComponent />,
};

function CustomDelayCarouselComponent() {
  const customPlugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[customPlugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={customPlugin.current.stop}
      onMouseLeave={customPlugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center bg-slate-100 p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

// Define a story with no autoplay
export const WithoutAutoplay: Story = {
  render: () => {
    return (
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center bg-blue-50 p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  },
};
