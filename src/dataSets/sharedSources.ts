// src/dataSets/sharedSources.ts
// Sekundärquellen, über die mehrere Zitate belegt sind. Jede steht genau
// einmal im Code und wird in quoteData.ts referenziert.

import { type Source, SourceRole, SourceType } from '@/types/datasetTypes/Source';

/**
 * Das Rechtsgutachten der Gesellschaft für Freiheitsrechte, aus dem die
 * AfD-Zitate dieses Datensatzes stammen. Steht als Sekundärnachweis bei
 * jedem daraus übernommenen Zitat.
 */
export const GFF_GUTACHTEN_2026: Source = {
  id: 'GFF2026',
  type: SourceType.REPORT,
  role: SourceRole.SECONDARY,
  authors: [
    'Bijan Moini',
    'Arash Bakhtiari',
    'Valentina Chiofalo',
    'Jonas Deyda',
    'Charlotte Eichler',
    'Helen Greiner',
    'Patrick Wielowiejski',
  ],
  title:
    'Ist die Alternative für Deutschland verfassungswidrig? Gutachten zur Frage der Verfassungswidrigkeit der Partei „Alternative für Deutschland“ nach Artikel 21 Absatz 2 des Grundgesetzes',
  publisher: 'Gesellschaft für Freiheitsrechte e.V.',
  location: 'Berlin',
  date: '25.06.2026',
  url: 'https://afd-gutachten.de',
  lastAccessed: '10.08.2026',
  note: 'Lizenz CC-BY 4.0. Die Seitenangabe verweist auf die Fundstelle des jeweiligen Zitats im Gutachten.',
};

/** Bundesamt für Verfassungsschutz, Gutachten zur AfD (2025). */
export const BFV_GUTACHTEN_2025: Source = {
  id: 'BfV2025',
  type: SourceType.REPORT,
  role: SourceRole.SECONDARY,
  authors: ['Bundesamt für Verfassungsschutz'],
  title: 'Gutachten zur Alternative für Deutschland',
  location: 'Köln',
  date: '2025',
  note: 'Im GFF-Gutachten zitiert als „BfV, AfD-Gutachten 2025“.',
};

/** Einstufungsvermerk des Innenministeriums Brandenburg. */
export const MIK_BRANDENBURG_2025: Source = {
  id: 'MIK2025',
  type: SourceType.REPORT,
  role: SourceRole.SECONDARY,
  authors: ['Ministerium für Inneres und Kommunales des Landes Brandenburg'],
  title:
    'Vermerk: Einstufung des Landesverbandes Brandenburg der Partei „Alternative für Deutschland“ als gesichert extremistische Bestrebung',
  location: 'Potsdam',
  date: '14.04.2025',
  page: '77',
  url: 'https://mik.brandenburg.de/sixcms/media.php/9/Einstufungsvermerk_LV__AfD.pdf',
  lastAccessed: '19.08.2025',
};

/** Bundesverband RIAS, Analysen antisemitischer Phänomene. */
export const RIAS_2024: Source = {
  id: 'RIA2024',
  type: SourceType.INBOOK,
  role: SourceRole.SECONDARY,
  authors: ['Bundesverband RIAS'],
  title:
    'Rechtsextremismus und Antisemitismus: Historische Entwicklung und aktuelle Ausdrucksformen',
  journal: 'Analysen antisemitischer Phänomene des Bundesverbands RIAS',
  date: '2024',
  page: '53',
};

/** Plenarprotokoll des Bayerischen Landtags, 124. Sitzung. */
export const LT_BAYERN_18_124: Source = {
  id: 'LTB2022',
  type: SourceType.REPORT,
  role: SourceRole.SECONDARY,
  authors: ['Bayerischer Landtag'],
  title: 'Plenarprotokoll 18/124',
  location: 'München',
  date: '12.10.2022',
  page: '17184',
};

/** Recherche der tagesschau zur AfD-Jugendorganisation. */
export const TAGESSCHAU_AFD_JUGEND: Source = {
  id: 'Duw2025',
  type: SourceType.ARTICLE,
  role: SourceRole.SECONDARY,
  authors: ['Duwe et al.'],
  title: 'Die neue AfD-Jugend: Auf Radikalkurs',
  journal: 'tagesschau.de',
  date: '18.09.2025',
  url: 'https://www.tagesschau.de/investigativ/kontraste/afd-jugend-104.html',
  lastAccessed: '20.05.2026',
};
