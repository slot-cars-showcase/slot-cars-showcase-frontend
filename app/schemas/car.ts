import { z } from 'zod';
import { CATEGORIES } from './category';

// Define perspective types as a union of string literals for type safety
type PerspectiveType =
  | 'diagonal_front_left'
  | 'diagonal_front_right'
  | 'diagonal_rear_left'
  | 'diagonal_rear_right'
  | 'front'
  | 'rear'
  | 'left'
  | 'right';

// Define image view types
type ImageViewType = 'perspective' | 'flat';

// Create a type that combines all possible image keys
type ImageKey = `${ImageViewType}_${PerspectiveType}`;

// Helper function to create a record of image URLs
const createImageSchema = () => {
  const schema: Record<ImageKey, z.ZodOptional<z.ZodString>> = {} as Record<
    ImageKey,
    z.ZodOptional<z.ZodString>
  >;

  const viewTypes: ImageViewType[] = ['perspective', 'flat'];
  const perspectiveTypes: PerspectiveType[] = [
    'diagonal_front_left',
    'diagonal_front_right',
    'diagonal_rear_left',
    'diagonal_rear_right',
    'front',
    'rear',
    'left',
    'right',
  ];

  for (const viewType of viewTypes) {
    for (const perspectiveType of perspectiveTypes) {
      const key = `${viewType}_${perspectiveType}` as ImageKey;
      schema[key] = z.string().url().optional();
    }
  }

  return z.object(schema);
};

// Define valid scale options as a const array
export const SCALES = ['1:24', '1:32'] as const;
type Scale = (typeof SCALES)[number];

// Shared base schema for all car-related schemas
const BaseCarSchema = z
  .object({
    id: z.string().uuid(),
    make: z.string(),
    model: z.string(),
    brand: z.string(),
    description: z.string().optional(),
    year: z.number().int().min(1886).max(new Date().getFullYear()),
    reference: z.string(),
    scale: z.enum(SCALES),
    images: createImageSchema(),
    category: z.array(z.nativeEnum(CATEGORIES)).nonempty(),
  })
  .transform((data) => ({
    ...data,
    name: `${data.make} ${data.model}`,
  }));

// Specific schemas extending the base schema
export const CarSchema = BaseCarSchema;

export const GetCarResponseSchema = BaseCarSchema;

// Type definitions using schema inference
export type Car = z.infer<typeof CarSchema>;
export type GetCarResponse = z.infer<typeof GetCarResponseSchema>;

// These types will include the transformed 'name' property
export interface CarWithName extends Car {
  name: string;
}
export interface GetCarResponseWithName extends GetCarResponse {
  name: string;
}

// Export the image types and scale for reuse elsewhere if needed
export type { ImageKey, ImageViewType, PerspectiveType, Scale };
