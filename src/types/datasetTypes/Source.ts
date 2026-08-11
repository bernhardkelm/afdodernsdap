export enum SourceType {
  ARTICLE = 'article',
  ONLINE = 'online',
  BOOK = 'book',
  INBOOK = 'inbook',
  SOCIAL_MEDIA = 'social-media',
  VIDEO = 'video',
  SPEECH = 'speech',
  REPORT = 'report',
}

export enum SourceRole {
  PRIMARY = 'primary', // die Äußerung selbst (Posting, Video, Rede, Protokoll)
  SECONDARY = 'secondary', // Nachweis, über den die Äußerung belegt ist (Gutachten, Behördenvermerk, Berichterstattung)
}

export type Source = {
  id: string; // bspw (Ein1905, Knu1998, MK2025a, MK2025b, MK2025c)
  type: SourceType;
  authors: string[];
  title: string;
  page?: string; // bspw. '10-12'

  role?: SourceRole; // ohne Angabe: PRIMARY

  // publishing
  publisher?: string;
  location?: string;
  journal?: string;
  edition?: string;
  publishingFormat?: string; // bspw. E-Book oder Facebook post oder YouTube Video

  // date -> alles leer: 'o.D.' (ohne Datum)
  date?: string;

  lastAccessed?: string; // bei reinen internet-quellen, dd.MM.yyyy format

  // Fundstelle innerhalb eines Audio-/Videobelegs, hh:mm:ss oder mm:ss
  timecode?: string;

  // Editorische Anmerkung zur Quellenlage
  note?: string;

  // identifiers
  isbn?: string;
  lccn?: string;
  url?: string;
  oai?: string;
};
