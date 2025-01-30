import type { Parties } from './Parties';

export type Person = {
  name: string;
  position: string | null;
  party: Parties;
};
