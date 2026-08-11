import { type Quote } from '@/types/datasetTypes/Quote';
import people, { People } from './peopleData';
import { SourceRole, SourceType } from '@/types/datasetTypes/Source';

import {
  BFV_GUTACHTEN_2025,
  GFF_GUTACHTEN_2026,
  LT_BAYERN_18_124,
  MIK_BRANDENBURG_2025,
  RIAS_2024,
  TAGESSCHAU_AFD_JUGEND,
} from './sharedSources';

const quoteData: Quote[] = [
  {
    // QUOTE-1
    quote:
      '„Die strukturelle Benachteiligung von Frauen gleicht einem Yeti: Jeder spricht darüber, aber noch niemand hat ihn ernsthaft gesehen.“',
    owner: [
      {
        person: people[People.NICOLE_HOECHST],
        saidOn: '01.03.2018',
      },
    ],
    sources: [
      {
        id: 'Bun2018',
        type: SourceType.BOOK,
        authors: ['Deutscher Bundestag'],
        title: 'Stenografischer Bericht der 17. Sitzung des Deutschen Bundestages',
        page: '1387',
        date: '01.03.2018',
        location: 'Berlin',
        url: 'https://dserver.bundestag.de/btp/19/19017.pdf',
        lastAccessed: '29.01.2025',
      },
    ],
  },
  {
    // QUOTE-4
    quote: '„Das große Problem ist, dass man Hitler als das absolut Böse darstellt“',
    owner: [
      {
        person: people[People.BJOERN_HOECKE],
        saidOn: '02.03.2017',
        context: 'In einem Interview mit „The Wall Street Journal“',
      },
    ],
    sources: [
      {
        id: 'Tro2017',
        type: SourceType.ARTICLE,
        authors: ['A. Troianovski'],
        title: 'The German Right Believes It’s Time to Discard the Country’s Historical Guilt',
        journal: 'The Wall Street Journal',
        date: '02.03.2017',
        url: 'https://www.wsj.com/articles/the-german-right-believes-its-time-to-discard-their-countrys-historical-guilt-1488467995',
        lastAccessed: '30.01.2025',
      },
      {
        id: 'Kro2017',
        type: SourceType.ARTICLE,
        authors: ['A. Kröning'],
        title: 'Björn Höcke hat eine irritierende Ansicht zu Adolf Hitler',
        journal: 'Welt',
        date: '06.03.2017',
        url: 'https://www.welt.de/politik/deutschland/article162616473/Bjoern-Hoecke-hat-eine-irritierende-Ansicht-zu-Adolf-Hitler.html',
        lastAccessed: '30.01.2025',
      },
    ],
  },
  {
    // QUOTE-5
    quote:
      '„Wer Homosexualität offen auslebt, dem droht dafür eine Gefängnisstrafe.“ – „Das sollten wir in Deutschland auch machen.“',
    owner: [
      {
        person: people[People.ANDREAS_GEHLMAN],
        saidOn: '02.06.2016',
        context:
          'Zwischenruf von Gehlmann auf die Worte „Wer Homosexualität offen auslebt, dem droht dafür eine Gefängnisstrafe.“ einer Rede der Linken Abgeordneten Henriette Quade im Landtag Sachsen-Anhalt.',
      },
    ],
    sources: [
      {
        id: 'Lan2016',
        type: SourceType.BOOK,
        authors: ['Landtag von Sachsen-Anhalt'],
        title: 'Stenografischer Bericht der 5. Sitzung des Landtages von Sachsen-Anhalt',
        date: '02.06.2016',
        location: 'Magdeburg',
        url: 'https://padoka.landtag.sachsen-anhalt.de/files/plenum/wp7/005stzg.pdf',
        lastAccessed: '23.01.2025',
      },
    ],
  },
  {
    // QUOTE-11
    quote:
      '„Und bei dem wird man, so fürchte ich, nicht um eine Politik der »wohltemperierten Grausamkeit«, wie es Peter Sloterdijk nannte, herumkommen.“',
    owner: [
      {
        person: people[People.BJOERN_HOECKE],
        saidOn: '02.02.2017',
      },
    ],
    sources: [
      {
        id: 'Hoe2018',
        type: SourceType.BOOK,
        title: 'Nie zweimal in denselben Fluß : Björn Höcke im Gespräch mit Sebastian Hennig',
        authors: ['B. Höcke', 'S. Hennig'],
        date: '08.2018',
        isbn: '978-3-944872-73-5',
        location: 'Lüdinghausen',
        publisher: 'Manuscriptum Verlagsbuchhandlung Thomas Hoof',
        url: 'https://d-nb.info/1168169593',
        lastAccessed: '28.01.2025',
      },
    ],
  },
  {
    // QUOTE-12
    quote: '„Solche Menschen müssen wir selbstverständlich entsorgen.“',
    owner: [
      {
        person: people[People.PETR_BYSTRON],
        saidOn: '25.11.2017',
        context:
          'In seiner Abschiedsrede als Landesvorsitzender der AfD Bayern 2017 im Bezug auf die ehemalige Integrationsbeauftragte der Bundesregierung Aydan Özoğuz.',
      },
    ],
    sources: [
      {
        id: 'AfD2017a',
        type: SourceType.VIDEO,
        authors: ['AfD Kreisverband Altöttling'],
        title:
          '2017_11_25 Petr Bystron (MdB) Abschiedsrede auf dem Landesparteitag der AfD in Greding',
        date: '25.11.2017',
        url: 'https://youtu.be/BGxBNRBQK4o?si=vNqdcsZP8HwziBaj&t=921',
        publishingFormat: 'YouTube Video',
        lastAccessed: '29.01.2025',
      },
      {
        id: 'Hof2020',
        type: SourceType.ARTICLE,
        authors: ['B. Hoffmann', 'A. Echtermann'],
        title: 'Die meisten dieser Zitate stammen von AfD-Politikern – einige sind aber unbelegt',
        journal: 'CORRECTIV',
        date: '05.02.2020',
        url: 'https://correctiv.org/faktencheck/politik/2020/02/05/die-meisten-dieser-zitate-stammen-von-afd-politikern-einige-sind-aber-unbelegt/',
        lastAccessed: '27.01.2025',
      },
    ],
  },
  {
    // QUOTE-13
    quote: '„Wenn wir kommen, dann wird aufgeräumt, dann wird ausgemistet!“',
    owner: [
      {
        person: people[People.MARKUS_FROHNMAIER],
        saidOn: '28.10.2015',
        context: 'Rede auf einer Demonstration in Erfurt auf dem Domplatz',
      },
    ],
    sources: [
      {
        id: 'Sup2015',
        type: SourceType.VIDEO,
        authors: ['Super Angie'],
        title: 'Es spricht Markus Frohnmaier',
        date: '29.10.2015',
        url: 'https://youtu.be/6znCu1VMr5Q?feature=shared&t=266',
        publishingFormat: 'YouTube Video',
        lastAccessed: '23.01.2025',
      },
      {
        id: 'Ber2015',
        type: SourceType.ARTICLE,
        authors: ['H. Bernhard'],
        title: 'AfD-Kundgebung in Erfurt – „Wenn wir kommen, wird aufgeräumt!“',
        journal: 'Deutschlandfunk',
        date: '29.10.2015',
        url: 'https://www.deutschlandfunk.de/afd-kundgebung-in-erfurt-wenn-wir-kommen-wird-aufgeraeumt-100.html',
        lastAccessed: '27.01.2025',
      },
    ],
  },
  {
    // QUOTE-14
    quote:
      '„Wenn mich in der Nachbarschaft ein Neger […] anhustet, dann muss ich wissen, ist er krank oder ist er nicht krank.“',
    owner: [
      {
        person: people[People.ANDREAS_WINHART],
        saidOn: '30.09.2018',
        context: 'Rede auf einer Wahlkampfveranstaltung in Willing bei Bad Aibling',
      },
    ],
    sources: [
      {
        id: 'Sue2019',
        type: SourceType.ARTICLE,
        authors: ['dpa'],
        title: 'Kein Verfahren gegen Winhart (AfD) wegen "Neger"-Äußerung',
        date: '12.02.2019',
        url: 'https://www.sueddeutsche.de/politik/traunstein-kein-verfahren-gegen-winhart-afd-wegen-neger-aeusserung-dpa.urn-newsml-dpa-com-20090101-190212-99-956121',
        location: 'Traunstein',
        publisher: 'Süddeutsche Zeitung',
        lastAccessed: '23.01.2025',
      },
      {
        id: 'Rfo2018',
        type: SourceType.VIDEO,
        authors: ['RFO'],
        publisher: 'Regional Fernsehen Oberbayern GmbH',
        title: 'Ermittlungen gegen Andreas Winhart',
        date: '18.10.2018',
        url: 'https://www.rfo.de/mediathek/video/ermittlungen-gegen-andreas-winhart/',
        lastAccessed: '23.01.2025',
      },
      {
        id: 'Obe2019',
        type: SourceType.ARTICLE,
        authors: ['Oberstaatsanwaltschaft Traunstein'],
        title: 'Strafanzeigen gegen den Landtagsabgeordneten Andreas Winhart',
        publisher: 'Bayerisches Staatsministerium der Justiz',
        date: '12.02.2019',
        url: 'https://www.justiz.bayern.de/gerichte-und-behoerden/staatsanwaltschaft/traunstein/presse/2019/1.php',
        lastAccessed: '24.01.2025',
      },
    ],
  },
  {
    // QUOTE-18
    quote:
      '„Wir müssen unsere Männlichkeit wieder entdecken. Denn nur wenn wir unsere Männlichkeit wiederentdecken, werden wir mannhaft. Und nur wenn wir mannhaft werden, werden wir wehrhaft, und wir müssen wehrhaft werden, liebe Freunde!“',
    owner: [
      {
        person: people[People.BJOERN_HOECKE],
        saidOn: '11.2015',
      },
    ],
    sources: [
      {
        id: 'Jac2015',
        type: SourceType.ARTICLE,
        authors: ['L. Jacobsen'],
        title: 'Im Bund mit den Ängstlichen',
        journal: 'ZEIT ONLINE',
        date: '28.11.2015',
        url: 'https://www.zeit.de/politik/deutschland/2015-11/alternative-fuer-deutschland-parteitag-frauke-petry-hannover/komplettansicht',
        lastAccessed: '27.01.2025',
      },
    ],
  },
  {
    // QUOTE-19
    quote:
      '„Das deutsche Volk ist nicht mehr das Volk der Ehrlosigkeit, der Schande, der Selbstzerfleischung, der Kleinmütigkeit und Kleingläubigkeit.“',
    owner: [
      {
        person: people[People.ADOLF_HITLER],
        saidOn: '01.05.1933',
        context: 'Rede zum Tag der „nationalen Arbeit“',
      },
    ],
    sources: [
      {
        id: 'Hit1934a',
        type: SourceType.BOOK,
        authors: ['A. Hitler'],
        title: 'Adolf Hitler spricht, Ein Lexikon des Nationalsozialismus',
        date: '1934',
        publisher: 'R. Kittler Verlag',
        page: '13',
        location: 'Leipzig',
        url: 'https://books.google.de/books?id=tMBLAQAAIAAJ',
        lastAccessed: '28.01.2025',
      },
    ],
  },
  {
    // QUOTE-20
    quote:
      '„[…] daß die Presse so fein organisiert ist, daß sie in der Hand der Regierung sozusagen ein Klavier ist, auf dem die Regierung spielen kann, daß sie ein ungeheuer wichtiges und bedeutsames Massenbeeinflussungsinstrument ist, dessen sich die Regierung in ihrer verantwortlichen Arbeit bedienen kann.“',
    quoteDisplay:
      '„[…] dass die Presse so fein organisiert ist, dass sie in der Hand der Regierung sozusagen ein Klavier ist, auf dem die Regierung spielen kann […]“',
    owner: [
      {
        person: people[People.JOSEPH_GOEBBELS],
        saidOn: '18.03.1933',
        context: 'In einem Leitartikel über die Aufgaben der Presse',
      },
    ],
    sources: [
      {
        id: 'Zei1993',
        type: SourceType.BOOK,
        authors: ['Zeitungs-Verlag'],
        title: 'Reichsminister Dr. Goebbels über die Aufgaben der Presse',
        date: '18.03.1933',
        page: '1',
        publisher:
          'Zeitungs-Verlag. Eigentum und Verlag des Vereins deutscher Zeitungsverleger (Herausgeber der deutschen Tageszeitungen) e.V., 34. Jahrgang, Nr. 11',
        journal: '34. Jahrgang, Nr. 11',
      },
      {
        id: 'Aus2008',
        type: SourceType.ARTICLE,
        authors: ['J.W. Aust', 'T. Aust'],
        publisher: 'Bundeszentrale für politische Bildung',
        title: 'Literatur und Presse',
        date: '17.03.2008',
        publishingFormat: 'Online',
        url: 'https://www.bpb.de/themen/nationalsozialismus-zweiter-weltkrieg/dossier-nationalsozialismus/39570/literatur-und-presse/',
        lastAccessed: '30.01.2025',
      },
    ],
  },
  {
    // QUOTE-21
    quote:
      '„Wir gehen in den Reichstag hinein, um uns im Waffenarsenal der Demokratie mit deren eigenen Waffen zu versorgen.“',
    owner: [
      {
        person: people[People.JOSEPH_GOEBBELS],
        saidOn: '30.04.1928',
        context:
          'Teil eines Leitartikels des „Völkischen Beobachters“. Goebbels zog am 20.05.1928 als einer von zwölf Abgeordneten der NSDAP in den Reichstag ein.',
      },
    ],
    sources: [
      {
        id: 'Bra1955',
        title:
          'Die Auflösung der Weimarer Republik :  Eine Studie zum Problem d. Machtverfalls in d. Demokratie',
        authors: ['K. D. Bracher'],
        date: '1955',
        type: SourceType.BOOK,
        location: 'Stuttgart/Düsseldorf',
        page: '374',
        url: 'https://www.geschichte-abitur.de/quellenmaterial/quellen-weimarer-republik/joseph-goebbels-ueber-den-einzug-der-nsdap-in-den-reichstag',
        lastAccessed: '28.01.2025',
      },
      {
        id: 'Dre2013',
        title:
          'Die Wehrhafte Demokratie und der Rechtsextremismus : Wie sich der Staat gegen seine Verfassungsfeinde wehrt',
        authors: ['C. Dressler'],
        type: SourceType.BOOK,
        isbn: '978-3-86341-755-0',
        date: '2013',
        publisher: 'BACHELOR + MASTER PUBLISHING',
        location: 'Hamburg',
        page: '23',
        url: 'https://books.google.de/books?id=fjloCwAAQBAJ',
        lastAccessed: '28.01.2025',
      },
    ],
  },
  {
    // QUOTE-23
    quote: '„Das deutsche Volk ist nicht länger mehr gewillt, sich zu beugen!“',
    owner: [
      {
        person: people[People.ADOLF_HITLER],
        saidOn: '1934',
      },
    ],
    sources: [
      {
        id: 'Hit1934b',
        type: SourceType.BOOK,
        authors: ['A. Hitler'],
        title: 'Adolf Hitler spricht, Ein Lexikon des Nationalsozialismus',
        date: '1934',
        publisher: 'R. Kittler Verlag',
        page: '12',
        location: 'Leipzig',
        url: 'https://books.google.de/books?id=tMBLAQAAIAAJ',
        lastAccessed: '28.01.2025',
      },
    ],
  },
  {
    // QUOTE-24
    quote:
      '„Es mag gut sein, Macht zu besitzen, die auf Gewehren ruht. Besser aber und beglückender ist es, das Herz eines Volkes zu gewinnen und es auch zu behalten.“',
    owner: [
      {
        person: people[People.JOSEPH_GOEBBELS],
        saidOn: '09.1934',
      },
    ],
    sources: [
      {
        id: 'Rie1934',
        type: SourceType.VIDEO,
        authors: ['L. Riefenstahl'],
        title: 'Clips from the propaganda film about the 1934 Reich Party Day',
        date: '09.1934',
        publishingFormat: 'Digitalisierter Propagandafilm',
        publisher: 'United States Holocaust Memorial Museum',
        location: 'Nürnberg',
        url: 'https://collections.ushmm.org/search/catalog/irn1004352',
        lastAccessed: '30.01.2025',
      },
    ],
  },
  {
    // QUOTE-25
    quote:
      '„Hier ist eine Bedrohung des Reichs und des europäischen Kontinents gegeben, die alle bisherigen Gefahren des Abendlandes weit in den Schatten stellt.“',
    owner: [
      {
        person: people[People.JOSEPH_GOEBBELS],
        saidOn: '18.02.1943',
        context: 'Sportpalastrede von 1943',
      },
    ],
    sources: [
      {
        id: 'Lon2023',
        type: SourceType.BOOK,
        authors: ['P. Longerich'],
        title: 'Die Sportpalast-Rede 1943 : Goebbels und der »totale Krieg«',
        isbn: '978-3-641-30570-3',
        date: '15.02.2023',
        publisher: 'Siedler Verlag',
        location: 'München',
        url: 'https://www.penguin.de/buecher/peter-longerich-die-sportpalast-rede-1943/ebook/9783641305703?isbn=9783641305703',
        lastAccessed: '28.01.2025',
      },
    ],
  },
  {
    // QUOTE-28
    quote: '„Ich möchte, dass Ihr euch im Dienst verzehrt. Ja, ich möchte euch als neue Preußen.“',
    owner: [
      {
        person: people[People.BJOERN_HOECKE],
        saidOn: '17.01.2017',
        context: 'Rede auf einer Veranstaltung der Jungen Alternative Sachsen',
      },
    ],
    sources: [
      {
        id: 'AfD2017b',
        type: SourceType.VIDEO,
        authors: ['AfD in Sachsen und Dresden - Die Dokumentation'],
        publisher: 'afdberichte.de',
        title: 'Rede Björn Höcke Dresden live bei der Jungen Alternative AfD - Dresdner Gespräche',
        date: '18.01.2017',
        url: 'https://youtu.be/WWwy4cYRFls?t=1809',
        lastAccessed: '23.01.2025',
      },
    ],
  },
  {
    // QUOTE-29
    sources: [
      {
        id: 'Gil1987',
        type: SourceType.BOOK,
        title: 'Nürnberger Tagebuch',
        authors: ['G. M. Gilbert'],
        date: '1987',
        page: '270',
        isbn: '9783596218851',
        publisher: 'Fischer-Taschenbuch-Verlag',
        url: 'https://books.google.de/books?redir_esc=y&hl=de&id=eLiQ5u3M1mUC&focus=searchwithinvolume&q=Patriotismus+vorzuwerfen',
        lastAccessed: '28.01.2025',
      },
    ],
    quote:
      '„Man braucht nichts zu tun, als dem Volk zu sagen, es würde angegriffen, und den Pazifisten ihren Mangel an Patriotismus vorzuwerfen und zu behaupten, sie brächten das Land in Gefahr. Diese Methode funktioniert in jedem Land.“',
    owner: [
      {
        person: people[People.HERMANN_GOERING],
        saidOn: '18.04.1946',
      },
    ],
  },
  {
    // QUOTE-31
    quote:
      '„Diese ganze Entwicklung, die jetzt gerade stattfindet, die Herstellung von Mischvölkern, um die nationalen Identitäten auszulöschen und damit die Abgabe der Souveränität [an die EU] – das ist einfach nicht zu ertragen […]“',
    quoteDisplay:
      '„Diese ganze Entwicklung, die jetzt gerade stattfindet, die Herstellung von Mischvölkern, um die nationalen Identitäten auszulöschen und damit die Abgabe der Souveränität […] – das ist einfach nicht zu ertragen […]“',
    owner: [
      {
        person: people[People.JENS_MAIER],
        saidOn: '17.01.2017',
        context: 'Redebeitrag auf einer Veranstaltung der Jungen Alternative Dresden',
      },
    ],
    sources: [
      {
        id: 'AfD2017c',
        type: SourceType.VIDEO,
        authors: ['AfD in Sachsen und Dresden - Die Dokumentation'],
        title: 'Redebeitrag Jens Maier AfD bei der Junge Alternative im Ballhaus Watzke',
        date: '18.01.2017',
        url: 'https://www.youtube.com/watch?v=HnDXa8vIeXA&t=384s',
        publishingFormat: 'YouTube Video',
        lastAccessed: '30.01.2025',
      },
    ],
  },
  {
    // QUOTE-32
    quote: '„[…] es ist ganz offensichtlich, dass ein Bevölkerungsaustausch stattfinden soll.“',
    owner: [
      {
        person: people[People.CHRISTINA_BAUM],
        saidOn: '21.04.2018',
      },
    ],
    sources: [
      {
        id: 'Kub2018',
        type: SourceType.SOCIAL_MEDIA,
        authors: ['S. Kubitzki'],
        title:
          'Die baden-württembergische Landtagsabgeordnete, Dr. Christina Baum, sprach heute morgen auf der Kundgebung von "Zukunft Heimat" in Cottbus.',
        url: 'https://www.facebook.com/afd.steffen.kubitzki/videos/die-baden-w%C3%BCrttembergische-landtagsabgeordnete-dr-christina-baum-sprach-heute-mo/577178535974412/',
        lastAccessed: '27.01.2025',
      },
    ],
  },
  {
    // QUOTE-33
    sources: [
      {
        id: 'Hoe2018',
        type: SourceType.BOOK,
        title: 'Nie zweimal in denselben Fluß : Björn Höcke im Gespräch mit Sebastian Hennig',
        authors: ['B. Höcke', 'S. Hennig'],
        date: '08.2018',
        isbn: '978-3-944872-73-5',
        location: 'Lüdinghausen',
        publisher: 'Manuscriptum Verlagsbuchhandlung Thomas Hoof',
        url: 'https://d-nb.info/1168169593',
        lastAccessed: '28.01.2025',
      },
      {
        id: 'Hof2020',
        type: SourceType.ARTICLE,
        authors: ['B. Hoffmann', 'A. Echtermann'],
        title: 'Die meisten dieser Zitate stammen von AfD-Politikern – einige sind aber unbelegt',
        journal: 'CORRECTIV',
        date: '05.02.2020',
        url: 'https://correctiv.org/faktencheck/politik/2020/02/05/die-meisten-dieser-zitate-stammen-von-afd-politikern-einige-sind-aber-unbelegt/',
        lastAccessed: '27.01.2025',
      },
    ],
    quote:
      '„Neben dem Schutz unserer nationalen […] Außengrenzen wird ein großangelegtes Remigrationsprojekt notwendig sein. Und bei dem wird man, so fürchte ich, nicht um eine Politik der ‚wohltemperierten Grausamkeit‘ […] herumkommen.“',
    owner: [
      {
        person: people[People.BJOERN_HOECKE],
        saidOn: '02.02.2017',
      },
    ],
  },
  {
    // QUOTE-34
    quote:
      '„Wer das HALT an unserer Grenze nicht akzeptiert, der ist ein Angreifer. Und gegen Angriffe müssen wir uns verteidigen.“',
    owner: [
      {
        person: people[People.BEATRIX_VON_STORCH],
        saidOn: '30.01.2016',
        context: 'Facebook-Post über die Disskusion zum „Schiessbefehl“ an deutschen Grenzen',
      },
    ],
    sources: [
      {
        id: 'Sto2016',
        type: SourceType.SOCIAL_MEDIA,
        authors: ['B. v. Storch'],
        title: 'B. v. Storch - „Es ist so weit. […]“',
        publishingFormat: 'facebook Post',
        date: '30.01.2016',
        url: 'https://www.facebook.com/BeatrixVonStorch/posts/1046239668750811',
        lastAccessed: '27.01.2025',
      },
    ],
  },
  {
    // QUOTE-35
    quote:
      '„Der Idee der NSDAP entsprechend sind wir die deutsche Linke […] Nichts ist uns verhasster als der rechts stehende nationale Besitzbürgerblock.“',
    owner: [
      {
        person: people[People.OLIVER_KIRCHNER],
        saidOn: '23.03.2023',
        context:
          'Während einer Debatte zum 90. Jahrestag des Ermächtigungsgesetzes. Kirchner kritisierte, dass frühere Mitglieder der „Altparteien“ in teilen NSDAP-Mitglieder waren, dies in der Debatte aber nicht zur Sprache kam. Seine Fraktion wären die einzigen, die diese Debatte „vorurteilsfrei hätte beantragen können“. Seine Fraktion empfinde sich auch nicht als rechtsextremistisch, wie laut ihm in der Beantragung suggeriert werde.',
      },
      {
        person: people[People.JOSEPH_GOEBBELS],
        saidOn: '06.12.1931',
        context:
          'Propagandaartikel in „Der Angriff“ nach [Ven1980], auch referenziert als Veröffentlichung aus der „Niedersächsichen Tageszeitung“ in [Kle1932]',
      },
    ],
    sources: [
      {
        id: 'Lan2023a',
        type: SourceType.BOOK,
        authors: ['Landtag von Sachsen-Anhalt'],
        title: 'Stenografischer Bericht der 39. Sitzung des Landtages von Sachsen-Anhalt',
        date: '23.03.2023',
        location: 'Magdeburg',
        url: 'https://padoka.landtag.sachsen-anhalt.de/files/plenum/wp8/039stzg.pdf#page=13',
        lastAccessed: '29.01.2025',
      },
      {
        id: 'Lan2023b',
        type: SourceType.ONLINE,
        authors: ['Landtag von Sachsen-Anhalt'],
        title: 'Transkript der 39. Plenarsitzung',
        date: '23.03.2023',
        location: 'Magdeburg',
        url: 'https://www.landtag.sachsen-anhalt.de/plenarsitzungen/transkript?tx_lsasessions_transcript%5Bspeaker%5D=12032&cHash=476d5d25f6e1bdc6f2adcc590df07855',
        lastAccessed: '29.01.2025',
      },
      {
        id: 'Lan2023c',
        type: SourceType.ONLINE,
        authors: ['Landtag von Sachsen-Anhalt'],
        title: 'Wie ein Gesetz die Diktatur ermöglichte',
        date: '23.03.2023',
        location: 'Magdeburg',
        url: 'https://www.landtag.sachsen-anhalt.de/wie-ein-gesetz-die-diktatur-ermoeglichte',
        lastAccessed: '29.01.2025',
      },
      {
        id: 'Ven1980',
        type: SourceType.BOOK,
        authors: ['W. Venohr', 'S. Haffner', 'H. Diwald'],
        title: 'Dokumente deutschen Daseins: 500 Jahre deutsche Nationalgeschichte, 1445-1945',
        date: '1980',
        publisher: 'Athenäum',
        location: 'Königstein im Taunus',
        page: '291',
        isbn: '978-3-7610-8086-3',
        url: 'https://books.google.de/books?redir_esc=y&hl=de&id=K3kaAAAAYAAJ&focus=searchwithinvolume&q=deutsche+Linke',
        lastAccessed: '28.01.2025',
      },
      {
        id: 'Kle1932',
        type: SourceType.BOOK,
        authors: ['E. Kleist-Schmenzin'],
        title: 'Der Nationalsozialismus - Eine Gefahr',
        date: '1932',
        publisher: 'D. Werdermann',
        location: 'Berlin',
        page: '5',
        edition: '2. erweiterte Auflage',
        url: 'https://library.fes.de/pdf-files/bibliothek/bestand/a-39165.pdf',
        lastAccessed: '30.01.2025',
      },
    ],
  },
  {
    // QUOTE-36
    quote:
      '„Dem kleinen Halbneger scheint einfach zu wenig Beachtung geschenkt worden zu sein, anders lässt sich sein Verhalten nicht erklären.“',
    owner: [
      {
        person: people[People.JENS_MAIER],
        saidOn: '02.01.2018',
      },
    ],
    sources: [
      {
        id: 'Wue2018',
        type: SourceType.ARTICLE,
        authors: ['D. Wüstenberg'],
        title:
          'AfD-Politiker beschimpft Noah Becker rassistisch auf Twitter – Becker schaltet Anwalt ein',
        date: '04.01.2018',
        journal: 'www.stern.de',
        url: 'https://www.stern.de/politik/deutschland/afd-politiker-jens-maier-nennt-noah-becker--halbneger----anzeige-7808686.html',
        lastAccessed: '27.01.2025',
      },
      {
        id: 'Bun2023',
        type: SourceType.ONLINE,
        authors: ['Bundesgerichtshof'],
        title: 'ECLI:DE:BGH:2023:051023URIZ.R.1.23.0',
        date: '05.10.2023',
        publishingFormat: 'Urteil',
        url: 'https://juris.bundesgerichtshof.de/cgi-bin/rechtsprechung/document.py?Gericht=bgh&Art=en&client=12&pos=0&anz=1&Blank=1.pdf&nr=135257',
        lastAccessed: '27.01.2025',
      },
    ],
  },
  {
    // QUOTE-37
    quote:
      '„[Ich will], dass Deutschland wieder aufersteht […], zu alter Stärke zurückfindet und nicht gebückt geht“',
    owner: [
      {
        person: people[People.JENS_MAIER],
        saidOn: '21.08.2017',
        context:
          'Auszug aus der Urteilsverkündung des Bundesgerichtshofs vom 05.10.2023: »Bei einem Wahlkampfauftritt vom 21. August 2017 vor der Dresdner Frauenkirche erklärte der Antragsgegner, er wolle, "dass Deutschland wieder aufersteht […], zu alter Stärke zurückfindet und nicht gebückt geht"«',
      },
    ],
    sources: [
      {
        id: 'Bun2017',
        type: SourceType.ONLINE,
        authors: ['Bundesgerichtshof'],
        title: 'ECLI:DE:BGH:2023:051023URIZ.R.1.23.0',
        date: '05.10.2023',
        publishingFormat: 'Urteil',
        url: 'https://juris.bundesgerichtshof.de/cgi-bin/rechtsprechung/document.py?Gericht=bgh&Art=en&client=12&pos=0&anz=1&Blank=1.pdf&nr=135257',
        lastAccessed: '27.01.2025',
      },
    ],
  },
  {
    // QUOTE-38
    quote: '„Wenn alle untreu bleiben, so bleibe ich doch treu […]“',
    owner: [
      {
        person: people[People.JENS_MAIER],
        saidOn: '25.05.2024',
        context:
          'Maier begann seine Bewerbungsrede beim Landesparteitag der AfD mit diesem Zitat welches aus dem "Treuelied" stammt.',
      },
      {
        person: people[People.SS],
        saidOn: '1943 - 1945',
        context:
          'Das Lied „Treuelied“ wurde während des Nationalsozialismus von der SS verwendet. Im SS-Liederbuch war es „nach dem Deutschlandlied und dem Horst-Wessel-Lied […] exponiert an dritter Stelle“',
      },
    ],
    sources: [
      {
        id: 'Bil2024',
        type: SourceType.ARTICLE,
        authors: ['Bernhard Schilz'],
        journal: 'Bild',
        title: 'Ex-Richter Maier zitiert SS-Lied auf AfD-Parteitag',
        date: '04.06.2024',
        url: 'https://www.bild.de/regional/sachsen/afd-skandal-ex-richter-zitiert-ss-lied-auf-parteitag-in-sachsen-665f06565cfff230440f8ce7',
        lastAccessed: '29.01.2025',
      },
      {
        id: 'Rei1943',
        type: SourceType.BOOK,
        authors: ['Reichsführung SS'],
        title: 'SS-Liederbuch',
        date: '1943',
        edition: '9. Auflage',
        publisher: 'Zentralverlag der NSDAP',
        location: 'München',
        page: '15',
        url: 'https://archive.org/details/SSLiederbuchMitBildernUndNoten244S.Fraktur/page/n17/mode/2up',
        lastAccessed: '29.01.2025',
      },
      {
        id: 'Wil2011',
        type: SourceType.BOOK,
        title:
          'Die "Hilfsgemeinschaft auf Gegenseitigkeit" (HIAG) 1950-1990. Veteranen der Waffen-SS in der Bundesrepublik',
        authors: ['K. Wilke'],
        publisher: 'Ferdinand Schöningh',
        location: 'Paderborn',
        date: '2011',
        isbn: '978-3-506-77235-0',
        page: '192',
      },
    ],
  },
  {
    // QUOTE-39
    quote: '„Wir wollen echte Männer sein meine Herren - und echte Männer sind rechts.“',
    owner: [
      {
        person: people[People.MAXIMILIAN_KRAH],
        saidOn: '14.02.2024',
      },
    ],
    sources: [
      {
        id: 'Pho2024',
        type: SourceType.VIDEO,
        authors: ['phoenix'],
        title: 'Politischer Aschermittwoch der AfD am 14.02.24',
        publishingFormat: 'YouTube Video',
        date: '14.02.2024',
        location: 'Osterhofen',
        url: 'https://www.youtube.com/watch?v=RUwSxGkxvlU&t=1645s',
        lastAccessed: '24.01.2025',
      },
    ],
  },
  {
    // QUOTE-40
    quote: '„Die nationalsozialistische Bewegung ist ihrer Natur nach eine männliche Bewegung.“',
    owner: [
      {
        person: people[People.JOSEPH_GOEBBELS],
        saidOn: '1943',
      },
    ],
    sources: [
      {
        id: 'Eib1934',
        type: SourceType.ARTICLE,
        authors: ['Eibenstocker Tageblatt'],
        location: 'Eibenstock',
        title: 'Frauenkundgebung in Berlin - Willen zur Familie!',
        date: '12.02.1934',
        oai: 'oai:de:slub-dresden:db:id-426616677-19340212',
        url: 'https://digital.slub-dresden.de/werkansicht/dlf/631310/1',
        lastAccessed: '29.01.2025',
      },
    ],
  },
  {
    // QUOTE-41
    quote:
      '„Gefahr ist im Verzuge. Es muss schnell und gründlich gehandelt werden, sonst ist es zu spät.“',
    owner: [
      {
        person: people[People.JOSEPH_GOEBBELS],
        saidOn: '18.02.1943',
        context: 'Sportpalastrede von 1943',
      },
    ],
    sources: [
      {
        id: 'Keg2012',
        type: SourceType.BOOK,
        authors: ['J. Kegel'],
        title:
          "»Wollt Ihr den totalen Krieg?« Eine semiotische und linguistische Gesamtanalyse der Rede Goebbels' im Berliner Sportpalast am 18. Februar 1943",
        date: '14.02.2012',
        isbn: '9783110928730',
        page: '414',
        publisher: 'De Gruyter',
        url: 'https://www.google.de/books/edition/Wollt_Ihr_den_totalen_Krieg/i1JDitANqy0C?hl=de&gbpv=1&printsec=frontcover&bsq=Gefahr%20ist%20im%20Verzuge',
        lastAccessed: '28.01.2025',
      },
    ],
  },
  {
    // QUOTE-42
    quote:
      '„Wenn die Franzosen zurecht stolz auf ihren Kaiser sind und die Briten auf Nelson und Churchill, haben wir das Recht, stolz zu sein auf Leistungen deutscher Soldaten in zwei Weltkriegen“',
    quoteDisplay:
      '„[…] haben wir das Recht, stolz zu sein auf Leistungen deutscher Soldaten in zwei Weltkriegen“',
    owner: [
      {
        person: people[People.ALEXANDER_GAULAND],
        saidOn: '02.09.2017',
        context: 'Rede beim Kyffhäuser-Treffen der AfD',
      },
    ],
    sources: [
      {
        id: 'Zei2017',
        type: SourceType.ARTICLE,
        authors: ['ZEIT ONLINE'],
        title: 'Gauland provoziert mit Äußerung zur Nazizeit',
        date: '14.09.2017',
        url: 'https://www.zeit.de/politik/deutschland/2017-09/afd-alexander-gauland-nazi-zeit-neubewertung',
        lastAccessed: '29.01.2025',
      },
      {
        id: 'Buz2017',
        type: SourceType.VIDEO,
        authors: ['BuzzFeed DE News'],
        title: 'AfD-Spitzenkandidat Gauland findet, Deutsche sollten stolz sei…',
        date: '14.09.2017',
        publishingFormat: 'facebook Video',
        url: 'https://www.facebook.com/BuzzFeedNewsDE/videos/afd-spitzenkandidat-gauland-findet-deutsche-sollten-stolz-sei/898289670337594/',
        lastAccessed: '29.01.2025',
      },
    ],
  },
  {
    // QUOTE-43
    quote:
      '„Ich glaube, aber daß Sie das nicht tun würden, wenn wir das wären, was heute Ihre Presse im Ausland über uns verbreitet, und ich kann Ihnen nur sagen: ich will auch gar nicht, daß Sie dafür stimmen! Deutschland soll frei werden, aber nicht durch Sie!“',
    quoteDisplay:
      '„[I]ch will auch gar nicht, dass Sie dafür stimmen! Deutschland soll frei werden, aber nicht durch Sie!“',
    owner: [
      {
        person: people[People.ADOLF_HITLER],
        saidOn: '23.03.1933',
        context: 'Zur SPD-Fraktion nach der Rede von Otto Wels gegen das Ermächtigungsgesetz.',
      },
    ],
    sources: [
      {
        id: 'Deu1934',
        type: SourceType.BOOK,
        authors: ['Deutscher Reichstag'],
        title: 'Verhandlungen des Reichstags VIII. Wahlperiode 1933 Band 457',
        page: '37',
        publisher: 'Druck und Verlag der Reichsdruckerei',
        date: '1934',
        url: 'http://www.reichstagsprotokolle.de/Blatt2_w8_bsb00000141_00039.html',
        lastAccessed: '28.01.2025',
      },
    ],
  },
  {
    // QUOTE-44
    quote:
      '„Jede Propaganda hat volkstümlich zu sein und ihr geistiges Niveau einzustellen nach der Aufnahmefähigkeit des Beschränktesten unter denen, an die sie sich zu richten gedenkt.“',
    owner: [
      {
        person: people[People.ADOLF_HITLER],
        saidOn: '1924-1926',
      },
    ],
    sources: [
      {
        id: 'Hit1925',
        type: SourceType.BOOK,
        authors: ['A. Hitler'],
        title: 'Mein Kampf',
        publisher: 'Zentralverlag der NSDAP',
        location: 'München',
        date: '1925',
        url: 'https://portal.dnb.de/opac.htm?method=simpleSearch&cqlMode=true&query=nid%3D4113925-2',
        lastAccessed: '29.01.2025',
      },
    ],
  },
  {
    // QUOTE-45
    quote: '„Was für ein Glück für die Regierenden, daß die Menschen nicht denken!“',
    quoteDisplay: '„Was für ein Glück für die Regierenden, dass die Menschen nicht denken!“',
    owner: [
      {
        person: people[People.ADOLF_HITLER],
        saidOn: '18./19.01.1942',
      },
    ],
    sources: [
      {
        id: 'Hit1967',
        type: SourceType.BOOK,
        authors: ['A. Hitler', 'H. Heim'],
        title: 'Monologe im Führer-Hauptquartier 1941-1944',
        page: '213',
        publisher: 'Knaus',
        location: 'Hamburg',
        date: '1980',
        isbn: '978-3-8135-0796-6',
        url: 'https://books.google.de/books?id=_TUJAQAAIAAJ&q=befehls',
        lastAccessed: '29.01.2025',
      },
    ],
  },
  {
    // QUOTE-46
    quote:
      '„Christentum und Judentum stellen einen Antagonismus dar. Darum kann ich mit dem Begriff des christlich-jüdischen Abendlands nichts anfangen.“',
    owner: [
      {
        person: people[People.BJOERN_HOECKE],
        saidOn: '26.09.2015',
      },
    ],
    sources: [
      {
        id: 'Foc2015',
        type: SourceType.ARTICLE,
        authors: ['FOCUS online'],
        title: 'Wegen seiner Äußerungen und Auftritte: AfD berät über Björn Höckes Rauswurf',
        date: '18.12.2015',
        url: 'https://www.focus.de/politik/deutschland/landesvorsitzender-in-thueringen-wegen-seiner-aeusserungen-und-auftritte-afd-beraet-ueber-bjoern-hoeckes-rauswurf_id_5162760.html',
        lastAccessed: '27.01.2025',
      },
    ],
  },
  {
    // QUOTE-48
    quote:
      '„Hitler kam nicht von außen, er war nicht, wie viele ihn heute sehen, die dämonische Bestie, die die Macht an sich riß.“',
    quoteDisplay:
      '„Hitler kam nicht von außen, er war nicht, wie viele ihn heute sehen, die dämonische Bestie, die die Macht an sich riss.“',
    owner: [
      {
        person: people[People.BALDUR_VON_SCHIRACH],
        saidOn: 'Unbekannt',
      },
    ],
    sources: [
      {
        id: 'Sch1967',
        type: SourceType.BOOK,
        authors: ['B. von Schirach'],
        title: 'Ich glaubte an Hitler',
        page: '160',
        publisher: 'Mosaik Verlag',
        location: 'Hamburg',
        date: '1967',
        lccn: '68079561',
        url: 'https://books.google.de/books?redir_esc=y&hl=de&id=nyVoAAAAMAAJ&focus=searchwithinvolume&q=Bestie',
        lastAccessed: '24.01.2025',
      },
    ],
  },
  {
    // QUOTE-49
    quote:
      '„Rasse - das ist doch alles Mist. Wer garantiert mir denn, daß [in den Kirchenbüchern] alles richtig notiert ist?“',
    quoteDisplay:
      '„Rasse - das ist doch alles Mist. Wer garantiert mir denn, dass […] alles richtig notiert ist?“',
    owner: [
      {
        person: people[People.ERNST_ROEHM],
        saidOn: 'Unbekannt',
      },
    ],
    sources: [
      {
        id: 'Spi1957',
        type: SourceType.ARTICLE,
        authors: ['Der Spiegel'],
        edition: '20/1957',
        title: "DER FURCHT SO FERN, DEM TOD SO NAH'",
        date: '1957',
        url: 'https://www.spiegel.de/politik/der-furcht-so-fern-dem-tod-so-nah-a-bad4fd63-0002-0001-0000-000041757458',
        lastAccessed: '29.01.2025',
      },
    ],
  },
  {
    // QUOTE-50
    quote:
      '„Das bedeutet das Ende der rot-grünen Dominanz auch hier in Deutschland – für immer! Jetzt und hier beginnt eine neue Epoche. Jetzt beginnt was Neues, und das führen wir an, das führen die neuen Kräfte an. Das sind die Kräfte von der AfD. Sie können folgen, Herr Merz, wenn Sie noch die Kraft dazu haben.“',
    quoteDisplay:
      '„Das bedeutet das Ende der […] Dominanz auch hier in Deutschland – für immer! Jetzt und hier beginnt eine neue Epoche. Jetzt beginnt was Neues, und das führen wir an, das führen die neuen Kräfte an. […]“',
    owner: [
      {
        person: people[People.BERND_BAUMANN],
        saidOn: '29.01.2024',
        context:
          'Während der 209. Sitzung des Bundestages nach der Billugung des Fünf-Punkte-Plan der Union zu Migration',
      },
    ],
    sources: [
      {
        id: 'Bun2024',
        type: SourceType.BOOK,
        authors: ['Deutscher Bundestag'],
        title: 'Deutscher Bundestag Stenografischer Bericht 209. Sitzung',
        date: '29.01.2024',
        location: 'Berlin',
        url: 'https://dserver.bundestag.de/btp/20/20209.pdf',
        lastAccessed: '30.01.2025',
      },
    ],
  },
  {
    // QUOTE-100  (volksbegriff)
    quote: '„Leute, nehmt die Kinder rein, die Zigeuner kommen!“',
    owner: [
      {
        person: people[People.STEPHAN_BRANDNER],
        saidOn: '27.12.2025',
        context: 'Instagram-Beitrag zu einer eigenen Rede im Bundestag',
      },
    ],
    sources: [
      {
        id: 'Bra2025',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Stephan Brandner'],
        title: 'Instagram-Beitrag zu einer Rede im Bundestag',
        date: '27.12.2025',
        publishingFormat: 'Instagram-Beitrag',
        url: 'https://www.instagram.com/p/DSwmF4ODVOc',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '1800' },
    ],
  },
  {
    // QUOTE-101  (sozialdarwinismus)
    quote: '„ächzende Sozialsystem von parasitärem Befall befreien“',
    quoteDisplay: '„[Ich will das] ächzende Sozialsystem von parasitärem Befall befreien.“',
    owner: [
      {
        person: people[People.YVONNE_PRAUSE],
        saidOn: '24.11.2024',
        context: 'Rede auf dem Landesparteitag der AfD Brandenburg in Prenzlau',
      },
    ],
    sources: [
      {
        id: 'Pra2024a',
        type: SourceType.SPEECH,
        role: SourceRole.PRIMARY,
        authors: ['Yvonne Prause'],
        title: 'Rede auf dem Landesparteitag der AfD Brandenburg',
        date: '24.11.2024',
        location: 'Prenzlau',
        publishingFormat: 'Rede',
        note: 'Wortlaut überliefert durch einen Bericht des Tagesspiegels; der Einstufungsvermerk des MIK Brandenburg nennt den 25.11.2024.',
      },
      MIK_BRANDENBURG_2025,
      { ...GFF_GUTACHTEN_2026, page: '1831' },
    ],
  },
  {
    // QUOTE-102  (maennlichkeit)
    quote: '„Jugend muss durch Jugend geführt werden.“',
    owner: [
      {
        person: people[People.BJOERN_HOECKE],
        saidOn: 'o.D.',
        context:
          'X-Beitrag über die neu gegründete AfD-Jugendorganisation. Denselben Leitsatz verwendete die Hitlerjugend.',
      },
    ],
    sources: [
      {
        id: 'Hoc2025',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Björn Höcke'],
        title: 'X-Beitrag zur neuen AfD-Jugendorganisation',
        date: 'o.D.',
        publishingFormat: 'X-Beitrag',
        note: 'Das Gutachten datiert den Beitrag auf August 2025, ohne Tagesangabe.',
      },
      TAGESSCHAU_AFD_JUGEND,
      { ...GFF_GUTACHTEN_2026, page: '122' },
    ],
  },
  {
    // QUOTE-103  (remigration)
    quote:
      '„Jeder Fremde mehr in diesem Land ist einer zu viel. Wir brauchen eine stringente Remigration von denen, die hier sind.“',
    quoteDisplay: '„Jeder Fremde mehr in diesem Land ist einer zu viel. […]“',
    owner: [
      {
        person: people[People.HANNES_GNAUCK],
        saidOn: '23.09.2023',
      },
    ],
    sources: [
      {
        id: 'Gna2023',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Hannes Gnauck'],
        title: 'X-Beitrag',
        date: '23.09.2023',
        publishingFormat: 'X-Beitrag',
        url: 'https://x.com/Hannes_Gnauck/status/1705628027760038305',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '978' },
    ],
  },
  {
    // QUOTE-104  (volksbegriff)
    quote:
      '„Ich sage es ganz deutlich: diese Einbürgerungen sind illegal und müssen als solche nach der Wende überprüft und ggf. rückgängig gemacht werden. Wer noch nicht mal fließend deutsch spricht, kann NIEMALS Deutscher sein.“',
    quoteDisplay: '„[…] Wer noch nicht mal fließend deutsch spricht, kann NIEMALS Deutscher sein.“',
    owner: [
      {
        person: people[People.HANS_CHRISTOPH_BERNDT],
        saidOn: '18.02.2025',
        context: 'Repost einer Äußerung von Fabian Keubel',
      },
    ],
    sources: [
      {
        id: 'Ber2025',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Hans-Christoph Berndt'],
        title: 'X-Beitrag',
        date: '18.02.2025',
        publishingFormat: 'X-Beitrag',
        url: 'https://www.twitter.com/hcberndt/status/1892109307744841933',
        lastAccessed: '10.08.2026',
        note: 'Repost einer Äußerung von Fabian Keubel.',
      },
      { ...GFF_GUTACHTEN_2026, page: '795' },
    ],
  },
  {
    // QUOTE-105  (gegnerbekaempfung)
    quote: '„Ihr dürft euch nie die Zähne ziehen lassen. Gemeinsam müssen wir bissig bleiben.“',
    owner: [
      {
        person: people[People.TINO_CHRUPALLA],
        saidOn: '29.11.2025',
        context: 'Rede zur Gründung der AfD-Jugendorganisation in Gießen',
      },
    ],
    sources: [
      {
        id: 'Afd2025',
        type: SourceType.VIDEO,
        role: SourceRole.PRIMARY,
        authors: ['AfD TV'],
        title: 'Gründung AfD-Jugendorganisation live aus Gießen! – AfD TV',
        date: '29.11.2025',
        publishingFormat: 'YouTube Video',
        url: 'https://www.youtube.com/watch?v=XHt20WuROPU&t=27228s',
        lastAccessed: '10.08.2026',
        timecode: '01:56:04',
      },
      { ...GFF_GUTACHTEN_2026, page: '337' },
    ],
  },
  {
    // QUOTE-106  (lgbtiq)
    quote:
      '„Diese Gesellschaft ist totkrank. Wer die Zweigeschlechtlichkeit in Frage stellt, ist ein Feind des Lebens und ein Leugner der Schöpfung.“',
    owner: [
      {
        person: people[People.CHRISTINA_BAUM],
        saidOn: '31.01.2021',
      },
    ],
    sources: [
      {
        id: 'Bau2021',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Christina Baum'],
        title: 'Facebook-Beitrag',
        date: '31.01.2021',
        publishingFormat: 'Facebook-Beitrag',
        url: 'https://www.facebook.com/drchristinabaum/posts/pfbid02GU3We5HN71NDyQ9T9wWLt88m8rGrVJcaAHrCK9aTuBR8NdV86fygDn3rBpqo8nucl',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '2609' },
    ],
  },
  {
    // QUOTE-107  (gegnerbekaempfung)
    quote:
      '„[W]ir müssen diese mit aller Härte beantworten. Die Losung der Stunde lautet: Remigration, und zwar millionenfache Remigration.“',
    quoteDisplay:
      '„[W]ir müssen diese mit aller Härte beantworten. Die Losung der Stunde lautet: […]“',
    owner: [
      {
        person: people[People.SEBASTIAN_MUENZENMAIER],
        saidOn: '09.11.2023',
        context: 'Rede im Livestream der AfD-Bundestagsfraktion',
      },
    ],
    sources: [
      {
        id: 'Afd2023',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['AfD im Bundestag'],
        title: 'Facebook-Video der AfD-Bundestagsfraktion',
        date: '09.11.2023',
        publishingFormat: 'Facebook-Video',
        url: 'https://www.facebook.com/afdimbundestag/videos/808674174345830/',
        lastAccessed: '10.08.2026',
        timecode: '04:34',
      },
      { ...GFF_GUTACHTEN_2026, page: '57' },
    ],
  },
  {
    // QUOTE-108  (gegnerbekaempfung)
    quote:
      '„Freunde, ist der Ernstfall, offenkundig. Jetzt sind wir in das Stadium des Vorbürgerkriegs eingetreten.“',
    quoteDisplay:
      '„Freunde, [es] ist der Ernstfall, offenkundig. Jetzt sind wir in das Stadium des Vorbürgerkriegs eingetreten.“',
    owner: [
      {
        person: people[People.BJOERN_HOECKE],
        saidOn: '06.11.2023',
        context: 'Rede bei Pegida auf dem Dresdner Schlossplatz',
      },
    ],
    sources: [
      {
        id: 'Hoc2023',
        type: SourceType.VIDEO,
        role: SourceRole.PRIMARY,
        authors: ['Björn Höcke'],
        title: 'Rede bei Pegida auf dem Dresdner Schlossplatz',
        date: '06.11.2023',
        location: 'Dresden',
        publishingFormat: 'YouTube Video',
        url: 'https://www.youtube.com/watch?v=ixP-6BdomHc',
        lastAccessed: '10.08.2026',
        timecode: '00:30:08',
      },
      { ...GFF_GUTACHTEN_2026, page: '2351' },
    ],
  },
  {
    // QUOTE-109  (gegnerbekaempfung)
    quote:
      '„In Deutschland werden Hunderttausende eingebürgert, die nicht mal hier sein dürften. Die Altparteien begehen ein Verbrechen am Volk, das seinesgleichen sucht. Wer stoppt diese Volksverräter?“',
    quoteDisplay:
      '„[Sie] begehen ein Verbrechen am Volk, das seinesgleichen sucht. Wer stoppt diese Volksverräter?“',
    owner: [
      {
        person: people[People.GUNTRAM_PROSS],
        saidOn: '13.06.2025',
      },
    ],
    sources: [
      {
        id: 'Pro2025',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Guntram Proß'],
        title: 'X-Beitrag',
        date: '13.06.2025',
        publishingFormat: 'X-Beitrag',
        url: 'https://www.twitter.com/guntrampross/status/1933546019737747508',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '2154' },
    ],
  },
  {
    // QUOTE-110  (volksbegriff)
    quote:
      '„Ich stehe hier, weil ich den Blicken meiner Kinder nicht ausweichen möchte, wenn sie mich eines Tages fragen, was hast du getan, was hast du getan, was hast du getan, als unser Volk zu sterben drohte.“',
    quoteDisplay:
      '„Ich stehe hier, weil ich den Blicken meiner Kinder nicht ausweichen möchte, wenn sie mich eines Tages fragen, was hast du getan, [...] als unser Volk zu sterben drohte.“',
    owner: [
      {
        person: people[People.DANIEL_WALD],
        saidOn: '03.12.2021',
        context: 'Rede auf einer Demonstration',
      },
    ],
    sources: [
      {
        id: 'Wal2021',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Daniel Wald'],
        title: 'TikTok-Beitrag',
        date: '03.12.2021',
        publishingFormat: 'TikTok-Video',
        url: 'https://tiktok.com/@danielwald.mdl/video/7037393221609065733',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '2115' },
    ],
  },
  {
    // QUOTE-111  (antisemitismus)
    quote:
      '„Die wirkliche Macht wird immer unsichtbarer und unkontrollierbarer. Die globalistische Krake hat an Nationen und Völkern kein Interesse.“',
    quoteDisplay:
      '„Die wirkliche Macht wird immer unsichtbarer und unkontrollierbarer. Die [...] Krake hat an Nationen und Völkern kein Interesse.“',
    owner: [
      {
        person: people[People.ALEXANDER_GAULAND],
        saidOn: '26.08.2019',
        context: 'Rede auf einer Kundgebung im brandenburgischen Peitz',
      },
    ],
    sources: [
      {
        id: 'Gau2019',
        type: SourceType.SPEECH,
        role: SourceRole.PRIMARY,
        authors: ['Alexander Gauland'],
        title: 'Rede auf einer Kundgebung in Peitz',
        date: '26.08.2019',
        location: 'Peitz',
        publishingFormat: 'Rede',
      },
      RIAS_2024,
      { ...GFF_GUTACHTEN_2026, page: '2760' },
    ],
  },
  {
    // QUOTE-112  (kampf)
    quote:
      '„Wir sollten all die Kriegstreiber sofort einziehen und an die Front schicken, bestenfalls ihre Kinder zuerst.“',
    owner: [
      {
        person: people[People.HARALD_LAATSCH],
        saidOn: '02.03.2025',
      },
    ],
    sources: [
      {
        id: 'Laa2025',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Harald Laatsch'],
        title: 'X-Beitrag',
        date: '02.03.2025',
        publishingFormat: 'X-Beitrag',
        url: 'https://x.com/haraldlaatsch/status/1896123203631923594',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '3034' },
    ],
  },
  {
    // QUOTE-113  (remigration)
    quote: '„Entweder diese Invasion wird gestoppt – oder Europa ist tot.“',
    owner: [
      {
        person: people[People.MAXIMILIAN_KRAH],
        saidOn: '18.09.2023',
      },
    ],
    sources: [
      {
        id: 'Kra2023a',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Maximilian Krah'],
        title: 'X-Beitrag',
        date: '18.09.2023',
        publishingFormat: 'X-Beitrag',
        url: 'https://x.com/KrahMax/status/1703772609307873785',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '60' },
    ],
  },
  {
    // QUOTE-114  (muslimfeindlich)
    quote: '„Invasion schrecklicher Wilder“',
    quoteDisplay: '„[…] Invasion schrecklicher Wilder […]“',
    owner: [
      {
        person: people[People.MAXIMILIAN_KRAH],
        saidOn: '08.06.2023',
      },
    ],
    sources: [
      {
        id: 'Kra2023b',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Maximilian Krah'],
        title: 'X-Beitrag',
        date: '08.06.2023',
        publishingFormat: 'X-Beitrag',
        url: 'https://x.com/KrahMax/status/1666810666169298944',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '570' },
    ],
  },
  {
    // QUOTE-115  (muslimfeindlich)
    quote:
      '„Ich möchte diesen Abschaum hier nicht mehr haben. Gruppenvergewaltigungen. Jeden Tag zwei Gruppenvergewaltigungen. Was sind das für Barbaren?“',
    quoteDisplay:
      '„Ich möchte diesen Abschaum hier nicht mehr haben. [...] Was sind das für Barbaren?“',
    owner: [
      {
        person: people[People.LEYLA_BILGE],
        saidOn: '21.01.2025',
      },
    ],
    sources: [
      {
        id: 'Bil2025',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Leyla Bilge'],
        title: 'X-Beitrag',
        date: '21.01.2025',
        publishingFormat: 'X-Beitrag',
        url: 'https://x.com/Eure_LeylaBilge/status/1881713934018982380',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '937' },
    ],
  },
  {
    // QUOTE-116  (muslimfeindlich)
    quote:
      '„Sie verachten unser Land, und sie zeigen es, indem sie unsere Kinder schänden. Vergewaltigung ist seit Tausenden von Jahren eine Waffe im Krieg.“',
    quoteDisplay:
      '„Sie verachten unser Land, und sie zeigen es, indem sie unsere Kinder schänden. [...]“',
    owner: [
      {
        person: people[People.MARTIN_BOEHM],
        saidOn: '16.04.2024',
        context: 'Facebook-Beitrag über die Vergewaltigung Minderjähriger',
      },
    ],
    sources: [
      {
        id: 'Boh2024',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Martin Böhm'],
        title: 'Facebook-Beitrag',
        date: '16.04.2024',
        publishingFormat: 'Facebook-Beitrag',
        url: 'https://www.facebook.com/boehm2017/posts/pfbid02BMnCbG5zycn4ANoq96Xcq8jgh75bTTX3zuqhbaGR9ZDXUXvvkZpiZ4dHzaVRHfgfl',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '570' },
    ],
  },
  {
    // QUOTE-117  (gegnerbekaempfung)
    quote:
      '„Die Bundesregierung bekämpft die demokratische Opposition, finanziert mit Steuergeld. Genau wie früher. Die Rotfront marschiert mal wieder. Deutschland auf dem Weg in die Scholz Diktatur?“',
    quoteDisplay: '„[…] Die Rotfront marschiert mal wieder. […]“',
    owner: [
      {
        person: people[People.GUNNAR_LINDEMANN],
        saidOn: '19.01.2024',
      },
    ],
    sources: [
      {
        id: 'Lin2024',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Gunnar Lindemann'],
        title: 'X-Beitrag',
        date: '19.01.2024',
        publishingFormat: 'X-Beitrag',
        url: 'https://x.com/AfDLindemann/status/1748417272408863094',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '2849' },
    ],
  },
  {
    // QUOTE-118  (geschichtsrevision)
    quote: '„Schluss mit dem Schuldkult und endlich an die eigenen Opfer erinnern!“',
    owner: [
      {
        person: people[People.MATTHIAS_HELFERICH],
        saidOn: '09.05.2025',
      },
    ],
    sources: [
      {
        id: 'Hel2025',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Matthias Helferich'],
        title: 'Telegram-Beitrag',
        date: '09.05.2025',
        publishingFormat: 'Telegram-Beitrag',
        url: 'https://t.me/matthiashelferich/1304',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '1279' },
    ],
  },
  {
    // QUOTE-119  (geschichtsrevision)
    quote:
      '„Der Schuldkult hat bei diesen Menschen schwersten Schaden angerichtet – sie sind Opfer eines geistigen Verbrechens, das seit Jahrzehnten am deutschen Volk begangen wird. Es ist Zeit für Selbstbefreiung und Heilung!“',
    quoteDisplay:
      '„Der Schuldkult hat bei diesen Menschen schwersten Schaden angerichtet – sie sind Opfer eines geistigen Verbrechens, das seit Jahrzehnten am deutschen Volk begangen wird. Es ist Zeit für Selbstbefreiung und Heilung!“',
    owner: [
      {
        person: people[People.SIMON_KUCHLBAUER],
        saidOn: '16.02.2025',
      },
    ],
    sources: [
      {
        id: 'Kuc2025',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Simon Kuchlbauer'],
        title: 'Telegram-Beitrag',
        date: '16.02.2025',
        publishingFormat: 'Telegram-Beitrag',
        url: 'https://t.me/simonkuchlbauer/1587',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '2785' },
    ],
  },
  {
    // QUOTE-120  (geschichtsrevision)
    quote:
      '„Diese dämliche Bewältigungspolitik, die lähmt uns heute noch viel mehr als zu Franz Josef Strauß Zeiten. Wir brauchen nichts anderes als eine erinnerungspolitische Wende um 180 Grad.“',
    quoteDisplay:
      '„Diese dämliche Bewältigungspolitik, die lähmt uns heute noch [...]. Wir brauchen nichts anderes als eine erinnerungspolitische Wende um 180 Grad.“',
    owner: [
      {
        person: people[People.BJOERN_HOECKE],
        saidOn: '18.01.2017',
        context: 'Rede bei der Jungen Alternative in Dresden („Dresdner Gespräche“)',
      },
    ],
    sources: [
      {
        id: 'Afd2017',
        type: SourceType.VIDEO,
        role: SourceRole.PRIMARY,
        authors: ['AfD in Sachsen und Dresden – Die Dokumentation'],
        title: 'Rede Björn Höcke Dresden live bei der Jungen Alternative AfD – Dresdner Gespräche',
        date: '18.01.2017',
        location: 'Dresden',
        publishingFormat: 'YouTube Video',
        url: 'https://www.youtube.com/watch?v=WWwy4cYRFls',
        lastAccessed: '10.08.2026',
        timecode: '00:44:42',
      },
      { ...GFF_GUTACHTEN_2026, page: '2780' },
    ],
  },
  {
    // QUOTE-121  (lgbtiq)
    quote: '„laut schreiende perverse schrille Minderheit“',
    quoteDisplay: '„[…] laut schreiende perverse schrille Minderheit […]“',
    owner: [
      {
        person: people[People.NICOLE_HOECHST],
        saidOn: '31.08.2023',
      },
    ],
    sources: [
      {
        id: 'Hst2023',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Nicole Höchst'],
        title: 'Telegram-Beitrag',
        date: '31.08.2023',
        publishingFormat: 'Telegram-Beitrag',
        url: 'https://t.me/nicolehoechstmdb/1443',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '1137' },
    ],
  },
  {
    // QUOTE-122  (lgbtiq)
    quote:
      '„Es gibt nur zwei Geschlechter, Männer und Frauen. Und alles andere ist Hirngespinst. Das ist die Wahrheit.“',
    owner: [
      {
        person: people[People.MAXIMILIAN_KRAH],
        saidOn: '20.02.2024',
        context: 'Rede, als Video veröffentlicht',
      },
    ],
    sources: [
      {
        id: 'Kra2024',
        type: SourceType.VIDEO,
        role: SourceRole.PRIMARY,
        authors: ['Maximilian Krah'],
        title: 'Rede vom 14.02.2024',
        date: '20.02.2024',
        publishingFormat: 'YouTube Video',
        url: 'https://www.youtube.com/watch?v=U5nyOUdlMhs',
        lastAccessed: '10.08.2026',
        note: 'Die Rede wurde am 14.02.2024 gehalten und am 20.02.2024 als Video veröffentlicht.',
      },
      { ...GFF_GUTACHTEN_2026, page: '1139' },
    ],
  },
  {
    // QUOTE-123  (volksbegriff)
    quote:
      '„als Angriff auf die europäischen Nationalstaaten, auf die Nationalstaaten des weißen Mannes“',
    quoteDisplay:
      '„[…] als Angriff auf die europäischen Nationalstaaten, auf die Nationalstaaten des weißen Mannes […]“',
    owner: [
      {
        person: people[People.HANS_CHRISTOPH_BERNDT],
        saidOn: '31.10.2022',
        context: 'Interview beim Sender Auf1',
      },
    ],
    sources: [
      {
        id: 'Auf2022',
        type: SourceType.VIDEO,
        role: SourceRole.PRIMARY,
        authors: ['Auf1'],
        title: 'Christoph Berndt: ‚Wir brauchen den Druck auf der Straße‘',
        date: '31.10.2022',
        publishingFormat: 'Video-Beitrag auf Auf1',
        url: 'https://auf1.tv/berlin-mitteauf1/christoph-berndt-wir-brauchen-den-druck-der-strasse/',
        lastAccessed: '10.08.2026',
        timecode: '00:05:30',
      },
      { ...GFF_GUTACHTEN_2026, page: '1247' },
    ],
  },
  {
    // QUOTE-124  (volksbegriff)
    quote: '„existenziellen Selbstbehauptungswillen unseres Volkes“',
    quoteDisplay: '„[…] existenziellen Selbstbehauptungswillen unseres Volkes […]“',
    owner: [
      {
        person: people[People.CHRISTOPH_MAIER],
        saidOn: '28.10.2020',
        context: 'Rede im Bayerischen Landtag',
      },
    ],
    sources: [
      {
        id: 'Lan2020',
        type: SourceType.REPORT,
        role: SourceRole.PRIMARY,
        authors: ['Bayerischer Landtag'],
        title: 'Plenarprotokoll der 58. Sitzung des Bayerischen Landtags',
        page: '7567 f.',
        date: '28.10.2020',
        location: 'München',
      },
      { ...GFF_GUTACHTEN_2026, page: '721' },
    ],
  },
  {
    // QUOTE-125  (volksbegriff)
    quote: '„besetztes und unterwandertes und fremdbestimmtes Land“',
    quoteDisplay:
      '„[Deutschland ist ein] besetztes und unterwandertes und fremdbestimmtes Land [...]“',
    owner: [
      {
        person: people[People.BJOERN_HOECKE],
        saidOn: '29.03.2022',
        context: 'Facebook-Livestream',
      },
    ],
    sources: [
      {
        id: 'Hoc2022',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Björn Höcke'],
        title: 'Facebook-Livestream',
        date: '29.03.2022',
        publishingFormat: 'Facebook-Livestream',
      },
      { ...GFF_GUTACHTEN_2026, page: '112' },
    ],
  },
  {
    // QUOTE-126  (muslimfeindlich)
    quote:
      '„In Essen sticht ein Kosovare auf eine Lehrerin ein. Wir kennen noch keine weiteren Hintergründe zu dem Messerkriminellen. Fakt ist: Ich kann mir sehr gut vorstellen, wie dieser Primat sozialisiert ist. Zwangsausbürgerungen müssen ernsthaft diskutiert werden!“',
    quoteDisplay:
      '„[…] Ich kann mir sehr gut vorstellen, wie dieser Primat sozialisiert ist. [...]“',
    owner: [
      {
        person: people[People.ENXHI_SELI_ZACHARIAS],
        saidOn: '05.09.2025',
        context: 'X-Beitrag über eine Messerattacke in Essen',
      },
    ],
    sources: [
      {
        id: 'Sel2025',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Enxhi Seli-Zacharias'],
        title: 'X-Beitrag',
        date: '05.09.2025',
        publishingFormat: 'X-Beitrag',
        url: 'https://www.twitter.com/enxhiseli/status/1963904881116197064',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '2298' },
    ],
  },
  {
    // QUOTE-127  (sozialdarwinismus)
    quote:
      '„Ich hätte kein Hindernis. Hose runter, ordentlich verjacken und dann ab in den Abschiebeflieger und das mit der gesamten netten Blutlinie, die diese feinen kleinen Burschen haben. Also ich würde kein Hindernis sehe, ich wüsste was zu tun ist!“',
    quoteDisplay:
      '„Ich hätte kein Hindernis. Hose runter, ordentlich verjacken und dann ab in den Abschiebeflieger und das mit der gesamten netten Blutlinie [...]. Also ich würde kein Hindernis sehe[n], ich wüsste was zu tun ist!“',
    owner: [
      {
        person: people[People.YVONNE_PRAUSE],
        saidOn: '13.11.2024',
        context:
          'TikTok-Video unter der Überschrift „13-jähriger Syrer ABSCHIEBEN!!! samt Blutlinie“, als Reaktion auf einen Bericht über eine jugendliche Bande im Raum Karlsruhe',
      },
    ],
    sources: [
      {
        id: 'Pra2024b',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Yvonne Prause'],
        title: '13-jähriger Syrer ABSCHIEBEN!!! samt Blutlinie',
        date: '13.11.2024',
        publishingFormat: 'TikTok-Video',
        note: 'Reaktion auf einen Bericht über eine jugendliche Bande im Raum Karlsruhe.',
      },
      MIK_BRANDENBURG_2025,
      { ...GFF_GUTACHTEN_2026, page: '2424' },
    ],
  },
  {
    // QUOTE-128  (gegnerbekaempfung)
    quote:
      '„Widerstand in all seiner Vielseitigkeit und seinem Facettenreichtum. Ich reiche jedem, der in diesen Tagen gegen das Altparteiregime der Deutschlandplünderer auf die Straße geht, die Hand. Frieden, Freiheit, Wohlstand - an erster Stelle Deutschland!“',
    quoteDisplay:
      '„[...] Ich reiche jedem, der in diesen Tagen gegen das Altparteiregime der Deutschlandplünderer auf die Straße geht, die Hand. Frieden, Freiheit, Wohlstand – an erster Stelle Deutschland!“',
    owner: [
      {
        person: people[People.HANS_THOMAS_TILLSCHNEIDER],
        saidOn: '28.08.2022',
        context: 'Rede',
      },
    ],
    sources: [
      {
        id: 'Til2022',
        type: SourceType.SPEECH,
        role: SourceRole.PRIMARY,
        authors: ['Hans-Thomas Tillschneider'],
        title: 'Rede',
        date: '28.08.2022',
        publishingFormat: 'Rede',
      },
      BFV_GUTACHTEN_2025,
      { ...GFF_GUTACHTEN_2026, page: '2870' },
    ],
  },
  {
    // QUOTE-129  (antisemitismus)
    quote:
      '„Jene internationalen Strippenzieher, die die Völker der Welt versklaven und gegeneinander aufhetzen, wie derzeit in der Ukraine, und die Feinde von uns Deutschen sowieso. Kann und muss alles weg!“',
    quoteDisplay:
      '„Jene internationalen Strippenzieher, die die Völker der Welt versklaven und gegeneinander aufhetzen, [...] und die Feinde von uns Deutschen sowieso. Kann und muss alles weg!“',
    owner: [
      {
        person: people[People.SILKE_SCHOEPS],
        saidOn: '10.02.2023',
        context: 'X-Beitrag über den Krieg in der Ukraine',
      },
    ],
    sources: [
      {
        id: 'Sch2023',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Silke Schöps'],
        title: 'X-Beitrag',
        date: '10.02.2023',
        publishingFormat: 'X-Beitrag',
        url: 'https://x.com/silke_schoeps/status/1624176891186782209',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '2770' },
    ],
  },
  {
    // QUOTE-130  (remigration)
    quote:
      '„D-Day unserer Tage. Es ist eine Invasion und das Tag für Tag und Nacht für Nacht. Wer etwas anderes sagt verkennt den Ernst der Lage oder ist ein Scharlatan.“',
    quoteDisplay:
      '„[…] Es ist eine Invasion und das Tag für Tag und Nacht für Nacht. Wer etwas anderes sagt verkennt den Ernst der Lage oder ist ein Scharlatan.“',
    owner: [
      {
        person: people[People.SIEGBERT_DROESE],
        saidOn: '12.09.2023',
      },
    ],
    sources: [
      {
        id: 'Dro2023',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Siegbert Droese'],
        title: 'X-Beitrag',
        date: '12.09.2023',
        publishingFormat: 'X-Beitrag',
        url: 'https://x.com/SiegbertDroese/status/1701665921511604310',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '1806' },
    ],
  },
  {
    // QUOTE-131  (volksbegriff)
    quote:
      '„So viel Selbsthass, dass man Feinde der eigenen Nation mit offenen Armen als Neubürger empfängt, gibt es sonst nirgendwo auf der Welt. Mit der AfD geht es für solche Personen im schnellsten Tempo wieder zurück in das so viel bessere Heimatland.“',
    quoteDisplay:
      '„So viel Selbsthass, dass man Feinde der eigenen Nation mit offenen Armen [...] empfängt, gibt es sonst nirgendwo auf der Welt. […]“',
    owner: [
      {
        person: people[People.CHRISTINA_BAUM],
        saidOn: '15.05.2025',
      },
    ],
    sources: [
      {
        id: 'Bau2025',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Christina Baum'],
        title: 'Facebook-Beitrag',
        date: '15.05.2025',
        publishingFormat: 'Facebook-Beitrag',
        url: 'https://www.facebook.com/drchristinabaum/posts/pfbid031CZsPczXTA1DFeKymqkZEH2ARsuHwDEsWDFQzYBhKqgLiMuYjkSsWoFb5eZdpLuWl',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '817' },
    ],
  },
  {
    // QUOTE-132  (antisemitismus)
    quote: '„Nein, die haben sehr viel mehr Macht, sehr viel Einfluss.“',
    quoteDisplay: '„[…] die haben sehr viel mehr Macht, sehr viel Einfluss.“',
    owner: [
      {
        person: people[People.HEROLD_PETERS_HARTMANN],
        saidOn: '26.02.2020',
        context: 'Antwort auf die Nachfrage eines YouTubers, wer außer den Christen Einfluss habe',
      },
    ],
    sources: [
      {
        id: 'Mtv2020',
        type: SourceType.VIDEO,
        role: SourceRole.PRIMARY,
        authors: ['MuslimTvDe'],
        title: 'Die Islamhetze der AFD | Wohin Hass führen kann',
        date: '26.02.2020',
        publishingFormat: 'YouTube Video',
        url: 'https://www.youtube.com/watch?v=1sikQo0KKCc',
        lastAccessed: '10.08.2026',
        timecode: '00:07:26',
      },
      { ...GFF_GUTACHTEN_2026, page: '2758' },
    ],
  },
  {
    // QUOTE-133  (gegnerbekaempfung)
    quote:
      '„Das sind keine Gegendemonstranten - das ist einfaches, kriminelles Gesindel, das den Rechtsstaat mit voller Härte zu spüren bekommen muss, einschließlich evtl. Aberkennung der deutschen Staatsbürgerschaft und Ausweisung.“',
    quoteDisplay:
      '„Das sind keine Gegendemonstranten – das ist einfaches, kriminelles Gesindel, das den Rechtsstaat mit voller Härte zu spüren bekommen muss [...].“',
    owner: [
      {
        person: people[People.HOLGER_LUCIUS],
        saidOn: '23.03.2021',
        context: 'X-Beitrag über Gegendemonstranten',
      },
    ],
    sources: [
      {
        id: 'Luc2021',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Holger Lucius'],
        title: 'X-Beitrag',
        date: '23.03.2021',
        publishingFormat: 'X-Beitrag',
        url: 'https://www.twitter.com/holger_lucius/status/1374320832693035018',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '2206' },
    ],
  },
  {
    // QUOTE-134  (antisemitismus)
    quote:
      '„Eliten hineingenommen, mitgenommen, integriert. Man hat sie transformiert, um sie dann als globalistische Sprechpuppen, als Marionetten zurückzuschicken in ihr Land.“',
    quoteDisplay:
      '„[…] Man hat sie transformiert, um sie dann als [...] Sprechpuppen, als Marionetten zurückzuschicken in ihr Land.“',
    owner: [
      {
        person: people[People.BJOERN_HOECKE],
        saidOn: '30.03.2022',
        context: 'Äußerung in einem Video des Landesverbands Brandenburg',
      },
    ],
    sources: [
      {
        id: 'Afd2022',
        type: SourceType.VIDEO,
        role: SourceRole.PRIMARY,
        authors: ['AfD Brandenburg'],
        title: 'YouTube-Video des Landesverbands Brandenburg',
        date: '30.03.2022',
        publishingFormat: 'YouTube Video',
      },
      BFV_GUTACHTEN_2025,
      { ...GFF_GUTACHTEN_2026, page: '2733' },
    ],
  },
  {
    // QUOTE-135  (sonstiges)
    quote:
      '„Diese astronomische und niemals rückzahlbare Schuldenlast ist Ihr Krieg, nämlich der Krieg gegen die kommenden Generationen, es ist der Krieg gegen unsere Kinder.“',
    quoteDisplay:
      '„Diese astronomische und niemals rückzahlbare Schuldenlast ist Ihr Krieg, nämlich der Krieg gegen die kommenden Generationen, es ist der Krieg gegen unsere Kinder.“',
    owner: [
      {
        person: people[People.KATRIN_EBNER_STEINER],
        saidOn: '12.10.2022',
        context: 'Rede im Bayerischen Landtag zur Staatsverschuldung',
      },
    ],
    sources: [
      {
        id: 'Ebn2022',
        type: SourceType.SPEECH,
        role: SourceRole.PRIMARY,
        authors: ['Katrin Ebner-Steiner'],
        title: 'Rede im Bayerischen Landtag',
        date: '12.10.2022',
        location: 'München',
        publishingFormat: 'Rede',
      },
      LT_BAYERN_18_124,
      { ...GFF_GUTACHTEN_2026, page: '2873' },
    ],
  },
  {
    // QUOTE-136  (geschichtsrevision)
    quote:
      '„Ganz einfach: das verleugnete ethnisch deutsche Volk darf sich endlich selbst vernichten und damit seine Erbschuld sühnen.“',
    quoteDisplay:
      '„[…] das verleugnete ethnisch deutsche Volk darf sich endlich selbst vernichten und damit seine Erbschuld sühnen.“',
    owner: [
      {
        person: people[People.SILKE_SCHOEPS],
        saidOn: '14.05.2024',
      },
    ],
    sources: [
      {
        id: 'Sch2024',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Silke Schöps'],
        title: 'X-Beitrag',
        date: '14.05.2024',
        publishingFormat: 'X-Beitrag',
        url: 'https://www.twitter.com/silke_schoeps/status/1790430612546883863',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '2784' },
    ],
  },
  {
    // QUOTE-137  (volksbegriff)
    quote:
      '„Geht die Massenzuwanderung so weiter, werden ethnische Wahlen unser Land prägen und irgendwann destabilisieren.“',
    quoteDisplay:
      '„Geht die Massenzuwanderung so weiter, werden ethnische Wahlen unser Land prägen und irgendwann destabilisieren.“',
    owner: [
      {
        person: people[People.JOACHIM_PAUL],
        saidOn: '27.05.2023',
      },
    ],
    sources: [
      {
        id: 'Pau2023',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Joachim Paul'],
        title: 'X-Beitrag',
        date: '27.05.2023',
        publishingFormat: 'X-Beitrag',
        url: 'https://twitter.com/joachimpaul_afd/status/1662498439433797633',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '2136' },
    ],
  },
  {
    // QUOTE-138  (sonstiges)
    quote: '„Früher hieß rechtes Gedankengut noch gesunder Menschenverstand.“',
    owner: [
      {
        person: people[People.MARTIN_VINCENTZ],
        saidOn: '16.01.2025',
      },
    ],
    sources: [
      {
        id: 'Vin2025',
        type: SourceType.SOCIAL_MEDIA,
        role: SourceRole.PRIMARY,
        authors: ['Martin Vincentz'],
        title: 'Instagram-Beitrag',
        date: '16.01.2025',
        publishingFormat: 'Instagram-Beitrag',
        url: 'https://www.instagram.com/p/DE6nXMUhCQp',
        lastAccessed: '10.08.2026',
      },
      { ...GFF_GUTACHTEN_2026, page: '1528' },
    ],
  },
];

export default quoteData;
