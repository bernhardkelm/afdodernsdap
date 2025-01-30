import type { Parties } from './Parties';
import type { Person } from './Person';
import type { Source } from './Source';

export type Quote = {
  sources: Source[];
  quote: string; // mit anführungszeichen
  quoteDisplay?: string; // mit anführungszeichen
  owner: Array<{
    person: Person;
    saidOn: string; // Date in dd.MM.yyyy format
    context?: string;
  }>;
};

export type SelectedQuote = Quote & {
  selectedAnswer: Parties | null;
  dismissed: boolean | null;
};
