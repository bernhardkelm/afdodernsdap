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
  STEPHAN_BRANDNER = 'stephanBrandner',
  YVONNE_PRAUSE = 'yvonnePrause',
  HANNES_GNAUCK = 'hannesGnauck',
  HANS_CHRISTOPH_BERNDT = 'hansChristophBerndt',
  TINO_CHRUPALLA = 'tinoChrupalla',
  SEBASTIAN_MUENZENMAIER = 'sebastianMuenzenmaier',
  GUNTRAM_PROSS = 'guntramPross',
  DANIEL_WALD = 'danielWald',
  HARALD_LAATSCH = 'haraldLaatsch',
  LEYLA_BILGE = 'leylaBilge',
  MARTIN_BOEHM = 'martinBoehm',
  GUNNAR_LINDEMANN = 'gunnarLindemann',
  MATTHIAS_HELFERICH = 'matthiasHelferich',
  SIMON_KUCHLBAUER = 'simonKuchlbauer',
  CHRISTOPH_MAIER = 'christophMaier',
  ENXHI_SELI_ZACHARIAS = 'enxhiSeliZacharias',
  HANS_THOMAS_TILLSCHNEIDER = 'hansThomasTillschneider',
  SILKE_SCHOEPS = 'silkeSchoeps',
  SIEGBERT_DROESE = 'siegbertDroese',
  HEROLD_PETERS_HARTMANN = 'heroldPetersHartmann',
  HOLGER_LUCIUS = 'holgerLucius',
  KATRIN_EBNER_STEINER = 'katrinEbnerSteiner',
  JOACHIM_PAUL = 'joachimPaul',
  MARTIN_VINCENTZ = 'martinVincentz',
}

const people: Record<People, Person> = {
  [People.ANDREAS_GEHLMAN]: {
    name: 'Andreas Gehlmann',
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
    position: 'MdB (seit 2017), Landesvorsitzender AfD Baden-Württemberg (seit 2022)',
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
    position: 'MdEP (2019 bis 2025), MdB (seit 2025)',
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
    position: 'MdL Sachsen-Anhalt (seit 2018)',
    party: Parties.AFD,
  },
  [People.BERND_BAUMANN]: {
    name: 'Bernd Baumann',
    position: 'MdB (seit 2017)',
    party: Parties.AFD,
  },
  [People.BEATRIX_VON_STORCH]: {
    name: 'Beatrix von Storch',
    position: 'MdB (seit 2017), stellvertretende Vorsitzende der AfD-Bundestagsfraktion',
    party: Parties.AFD,
  },
  [People.STEPHAN_BRANDNER]: {
    name: 'Stephan Brandner',
    position:
      'MdB aus Thüringen, stv. Bundessprecher und parlamentarischer Geschäftsführer der Bundestagsfraktion',
    party: Parties.AFD,
  },
  [People.YVONNE_PRAUSE]: {
    name: 'Yvonne Prause',
    position: 'Kreisrätin im Landkreis Oberhavel in Brandenburg',
    party: Parties.AFD,
  },
  [People.HANNES_GNAUCK]: {
    name: 'Hannes Gnauck',
    position: 'MdB aus Brandenburg, Mitglied im Bundesvorstand und im Landesvorstand Brandenburg',
    party: Parties.AFD,
  },
  [People.HANS_CHRISTOPH_BERNDT]: {
    name: 'Hans-Christoph Berndt',
    position: 'MdL in Brandenburg, stv. Landesvorsitzender und Fraktionsvorsitzender Brandenburg',
    party: Parties.AFD,
  },
  [People.TINO_CHRUPALLA]: {
    name: 'Tino Chrupalla',
    position: 'MdB aus Sachsen, Bundessprecher und Vorsitzender der Bundestagsfraktion',
    party: Parties.AFD,
  },
  [People.SEBASTIAN_MUENZENMAIER]: {
    name: 'Sebastian Münzenmaier',
    position:
      'MdB, stv. Vorsitzender der Bundestagsfraktion und stv. Landesvorsitzender Rheinland-Pfalz',
    party: Parties.AFD,
  },
  [People.GUNTRAM_PROSS]: {
    name: 'Guntram Proß',
    position: 'Kreisrat im Rhein-Neckar-Kreis in Baden-Württemberg',
    party: Parties.AFD,
  },
  [People.DANIEL_WALD]: {
    name: 'Daniel Wald',
    position: 'MdL in Sachsen-Anhalt',
    party: Parties.AFD,
  },
  [People.HARALD_LAATSCH]: {
    name: 'Harald Laatsch',
    position: 'MdA',
    party: Parties.AFD,
  },
  [People.LEYLA_BILGE]: {
    name: 'Leyla Bilge',
    position: 'stv. Vorsitzende KV Rosenheim',
    party: Parties.AFD,
  },
  [People.MARTIN_BOEHM]: {
    name: 'Martin Böhm',
    position: 'MdL in Bayern, stv. Landes- und Fraktionsvorsitzender Bayern',
    party: Parties.AFD,
  },
  [People.GUNNAR_LINDEMANN]: {
    name: 'Gunnar Lindemann',
    position: 'MdA',
    party: Parties.AFD,
  },
  [People.MATTHIAS_HELFERICH]: {
    name: 'Matthias Helferich',
    position: 'MdB aus Nordrhein-Westfalen',
    party: Parties.AFD,
  },
  [People.SIMON_KUCHLBAUER]: {
    name: 'Simon Kuchlbauer',
    position: 'stellv. Vorsitzender im Kreistag Aichach-Friedberg in Bayern',
    party: Parties.AFD,
  },
  [People.CHRISTOPH_MAIER]: {
    name: 'Christoph Maier',
    position: 'MdL in Bayern',
    party: Parties.AFD,
  },
  [People.ENXHI_SELI_ZACHARIAS]: {
    name: 'Enxhi Seli-Zacharias',
    position: 'MdL und stv. Fraktionsvorsitzende in Nordrhein-Westfalen',
    party: Parties.AFD,
  },
  [People.HANS_THOMAS_TILLSCHNEIDER]: {
    name: 'Hans-Thomas Tillschneider',
    position: 'MdL in Sachsen-Anhalt und stv. Landesvorsitzender Sachsen-Anhalt',
    party: Parties.AFD,
  },
  [People.SILKE_SCHOEPS]: {
    name: 'Silke Schöps',
    position: 'Stadträtin in Dresden',
    party: Parties.AFD,
  },
  [People.SIEGBERT_DROESE]: {
    name: 'Siegbert Droese',
    position: 'MdEP und Mitglied im Landesvorstand Sachsen',
    party: Parties.AFD,
  },
  [People.HEROLD_PETERS_HARTMANN]: {
    name: 'Herold Peters-Hartmann',
    position: 'ehem. Vorsitzender KV Würzburg',
    party: Parties.AFD,
  },
  [People.HOLGER_LUCIUS]: {
    name: 'Holger Lucius',
    position: 'Stadtrat in Münster in Nordrhein-Westfalen',
    party: Parties.AFD,
  },
  [People.KATRIN_EBNER_STEINER]: {
    name: 'Katrin Ebner-Steiner',
    position: 'MdL in Bayern und Fraktionsvorsitzende Bayern',
    party: Parties.AFD,
  },
  [People.JOACHIM_PAUL]: {
    name: 'Joachim Paul',
    position: 'MdL in Rheinland-Pfalz und stv. Fraktionsvorsitzender Rheinland-Pfalz',
    party: Parties.AFD,
  },
  [People.MARTIN_VINCENTZ]: {
    name: 'Martin Vincentz',
    position: 'MdL in Nordrhein-Westfalen und Landesvorsitzender Nordrhein-Westfalen',
    party: Parties.AFD,
  },
};

export default people;
