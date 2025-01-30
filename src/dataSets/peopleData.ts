import { Parties } from '@/types/datasetTypes/Parties';
import type { Person } from '@/types/datasetTypes/Person';

export enum People {
  ANDREAS_GEHLMAN = 'andreasGehlman',
  BJOERN_HOECKE = 'bjoernHoecke',
  MARKUS_FROHNMAIER = 'markusFrohnmaier',
  ANDREAS_WINHART = 'andreasWinhart',
  CHRISTINA_BAUM = 'christinaBaum',
  JENS_MAIER = 'jensMaier',
  MAXIMILIAN_KRAH = 'maximilianKrah',
  HERMANN_GOERING = 'hermannGoering',
  JOSEPH_GOEBBELS = 'josephGoebbels',
  ADOLF_HITLER = 'adolfHitler',
  BALDUR_VON_SCHIRACH = 'baldurVonSchirach',
  NICOLE_HOECHST = 'nicoleHoechst',
  PETR_BYSTRON = 'petrBystron',
  ERNST_ROEHM = 'ernstRoehm',
  ALEXANDER_GAULAND = 'alexanderGauland',
  SS = 'ss',
  OLIVER_KIRCHNER = 'oliverKirchner',
  BERND_BAUMANN = 'berndBaumann',
  BEATRIX_VON_STORCH = 'beatrixVonStorch',
}

const people: Record<People, Person> = {
  [People.ANDREAS_GEHLMAN]: {
    name: 'Andreas Gehlman',
    position: 'MdL Sachsen-Anhalt (2016 bis 2021)',
    party: Parties.AFD,
  },
  [People.BJOERN_HOECKE]: {
    name: 'Björn Höcke',
    position: 'MdL Thüringen, Vorsitzender der AfD Fraktion im Thüringer Landtag (seit 2014)',
    party: Parties.AFD,
  },
  [People.MARKUS_FROHNMAIER]: {
    name: 'Markus Frohnmaier',
    position: 'MdB (seit 2017), Co-Vorsitzender AfD-Landesverband Baden-Württemberg',
    party: Parties.AFD,
  },
  [People.ANDREAS_WINHART]: {
    name: 'Andreas Winhart',
    position: 'MdL Bayern (seit 2018)',
    party: Parties.AFD,
  },
  [People.CHRISTINA_BAUM]: {
    name: 'Christina Baum',
    position: 'MdB (seit 2021)',
    party: Parties.AFD,
  },
  [People.JENS_MAIER]: {
    name: 'Jens Maier',
    position: 'MdB (2017 bis 2021)',
    party: Parties.AFD,
  },
  [People.MAXIMILIAN_KRAH]: {
    name: 'Maximilian Krah',
    position: 'MdEP (seit 2019)',
    party: Parties.AFD,
  },
  [People.HERMANN_GOERING]: {
    name: 'Hermann Göring',
    position: 'Reichspräsident, Reichsminister und Reichsmarschall (1933 bis 1945)',
    party: Parties.NSDAP,
  },
  [People.JOSEPH_GOEBBELS]: {
    name: 'Joseph Goebbels',
    position: 'Reichsminister für Volksaufklärung und Propaganda (1925 bis 1945)',
    party: Parties.NSDAP,
  },
  [People.ADOLF_HITLER]: {
    name: 'Adolf Hitler',
    position: 'Reichskanzler und Führer des Deutschen Reiches (1933 bis 1945)',
    party: Parties.NSDAP,
  },
  [People.BALDUR_VON_SCHIRACH]: {
    name: 'Baldur von Schirach',
    position: 'Reichsjugendführer, Gauleiter von Wien (1931 bis 1945)',
    party: Parties.NSDAP,
  },
  [People.NICOLE_HOECHST]: {
    name: 'Nicole Höchst',
    position: 'MdB (seit 2017)',
    party: Parties.AFD,
  },
  [People.PETR_BYSTRON]: {
    name: 'Petr Bystron',
    position: 'MdB (2017 bis 2024), MdEP (seit 2024)',
    party: Parties.AFD,
  },
  [People.ERNST_ROEHM]: {
    name: 'Ernst Röhm',
    position: 'Stabschef der SA (1931 bis 1934)',
    party: Parties.NSDAP,
  },
  [People.ALEXANDER_GAULAND]: {
    name: 'Alexander Gauland',
    position: 'MdB (seit 2017), Ehrenvorsitzender der AfD (seit 2019)',
    party: Parties.AFD,
  },
  [People.SS]: {
    name: 'Schutzstaffel (SS)',
    position: 'paramilitärische Organisation der NSDAP',
    party: Parties.NSDAP,
  },
  [People.OLIVER_KIRCHNER]: {
    name: 'Oliver Kirchner',
    position: 'Mdl Sachsen-Anhalt (seit 2018)',
    party: Parties.AFD,
  },
  [People.BERND_BAUMANN]: {
    name: 'Bernd Baumann',
    position: 'MdB (seit 2017)',
    party: Parties.AFD,
  },
  [People.BEATRIX_VON_STORCH]: {
    name: 'Beatrix von Storch',
    position: 'MdB (seit 2017), stellvertretende Bundessprecherin und Fraktionsvorsitzende der AfD',
    party: Parties.AFD,
  },
};

export default people;
