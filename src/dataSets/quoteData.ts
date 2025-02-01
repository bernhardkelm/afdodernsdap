import { type Quote } from '@/types/datasetTypes/Quote';
import people, { People } from './peopleData';
import { SourceType } from '@/types/datasetTypes/Source';

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
    quote: '„Das deutsche Volk ist nicht länger mehr gewillt sich zu beugen!“',
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
        url: 'http://juris.bundesgerichtshof.de/cgi-bin/rechtsprechung/document.py?Gericht=bgh&Art=en&client=12&pos=0&anz=1&Blank=1.pdf&nr=135257',
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
];

export default quoteData;
