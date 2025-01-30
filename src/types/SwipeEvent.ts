import type { SwipeDirections } from './SwipeDirections';

export type SwipeEvent = {
  direction: SwipeDirections;
  threshold: number;
};
