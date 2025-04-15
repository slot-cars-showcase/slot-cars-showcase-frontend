import { z } from 'zod';
import { CATEGORIES } from './category';

export const GetCarReponse = z.object({
  id: z.string().uuid(),
  make: z.string(),
  model: z.string(),
  description: z.string().optional(),
  year: z.number().int().min(1886).max(new Date().getFullYear()),
  reference: z.string(),
  images: z.object({
    perspective_diagonal_front_left: z.string().url().optional(),
    perspective_diagonal_front_right: z.string().url().optional(),
    perspective_diagonal_rear_left: z.string().url().optional(),
    perspective_diagonal_rear_right: z.string().url().optional(),
    perspective_front: z.string().url().optional(),
    perspective_rear: z.string().url().optional(),
    perspective_left: z.string().url().optional(),
    perspective_right: z.string().url().optional(),
    flat_diagonal_front_left: z.string().url().optional(),
    flat_diagonal_front_right: z.string().url().optional(),
    flat_diagonal_rear_left: z.string().url().optional(),
    flat_diagonal_rear_right: z.string().url().optional(),
    flat_front: z.string().url().optional(),
    flat_rear: z.string().url().optional(),
    flat_left: z.string().url().optional(),
    flat_right: z.string().url().optional(),
  }),
  category: z.array(z.nativeEnum(CATEGORIES)).nonempty(),
});
