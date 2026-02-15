export interface Project {
  slug: string;
  images: string[];
  country: string;
  flag: string;
  data: {
    pl: ProjectLang;
    en: ProjectLang;
    de: ProjectLang;
  };
}

interface ProjectLang {
  name: string;
  type: string;
  challenge: string;
  approach: string;
  result: string;
  scope: string[];
  stats: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: 'kv-babord-malmo',
    images: ['babord/B1.jpg', 'babord/B2.jpg', 'babord/B3.jpg', 'babord/B4.jpg', 'babord/B5.jpg', 'babord/B6.jpg', 'babord/B7.jpg', 'babord/B8.jpg'],
    country: 'SWE',
    flag: '🇸🇪',
    data: {
      pl: {
        name: 'Kv Babord, Malmö',
        type: 'Budynek mieszkalny',
        challenge: 'Inwestor potrzebował zaprojektować dwusekcyjny budynek mieszkalny (6 i 10 kondygnacji) w Malmö z pełną prefabrykacją — łącznie z integracją systemów BHP, punktów elektrycznych i szalunków traconych w elementach prefabrykowanych.',
        approach: 'Zaprojektowaliśmy kompletną prefabrykację konstrukcji budynku: ściany zespolone (2 440 m²), ściany pełne (3 200 m²), stropy filigran (6 750 m²) i balkony (104 szt.). Każdy element wyposażyliśmy w komponenty montażowe i instalacyjne jeszcze na etapie projektu.',
        result: 'Pełna prefabrykacja budynku z gotowymi do montażu elementami — znaczące skrócenie czasu budowy i eliminacja prac mokrych na placu budowy. Łączna powierzchnia prefabrykatów: ponad 12 000 m².',
        scope: ['Ściany zespolone 2 440 m²', 'Ściany pełne 3 200 m²', 'Stropy filigran 6 750 m²', 'Balkony 104 szt.', 'Systemy BHP i instalacyjne'],
        stats: [
          { label: 'Powierzchnia prefab.', value: '12 390 m²' },
          { label: 'Kondygnacje', value: '6 + 10' },
          { label: 'Balkony', value: '104 szt.' },
        ],
      },
      en: {
        name: 'Kv Babord, Malmö',
        type: 'Residential building',
        challenge: 'The investor needed a two-section residential building (6 and 10 storeys) in Malmö with complete prefabrication — including integration of health & safety systems, electrical points and lost formwork within precast elements.',
        approach: 'We designed the complete prefabrication of the building structure: composite walls (2,440 m²), solid walls (3,200 m²), filigree slabs (6,750 m²) and balconies (104 pcs.). Every element was equipped with assembly and installation components at the design stage.',
        result: 'Fully prefabricated building with ready-to-install elements — significantly shortened construction time and elimination of wet works on site. Total precast area: over 12,000 m².',
        scope: ['Composite walls 2,440 m²', 'Solid walls 3,200 m²', 'Filigree slabs 6,750 m²', 'Balconies 104 pcs.', 'H&S and installation systems'],
        stats: [
          { label: 'Precast area', value: '12,390 m²' },
          { label: 'Storeys', value: '6 + 10' },
          { label: 'Balconies', value: '104 pcs.' },
        ],
      },
      de: {
        name: 'Kv Babord, Malmö',
        type: 'Wohngebäude',
        challenge: 'Der Investor benötigte ein zweisektionales Wohngebäude (6 und 10 Stockwerke) in Malmö mit vollständiger Vorfertigung — einschließlich Integration von Sicherheitssystemen, Elektroanschlüssen und verlorener Schalung.',
        approach: 'Wir haben die komplette Vorfertigung der Gebäudestruktur geplant: Doppelwände (2.440 m²), Massivwände (3.200 m²), Filigrandecken (6.750 m²) und Balkone (104 Stk.). Jedes Element wurde mit Montage- und Installationskomponenten ausgestattet.',
        result: 'Vollständig vorgefertigtes Gebäude mit montagefertigen Elementen — deutlich verkürzte Bauzeit und Wegfall von Nassarbeiten. Gesamtfläche: über 12.000 m².',
        scope: ['Doppelwände 2.440 m²', 'Massivwände 3.200 m²', 'Filigrandecken 6.750 m²', 'Balkone 104 Stk.', 'Sicherheits- und Installationssysteme'],
        stats: [
          { label: 'Fertigteilfläche', value: '12.390 m²' },
          { label: 'Stockwerke', value: '6 + 10' },
          { label: 'Balkone', value: '104 Stk.' },
        ],
      },
    },
  },
  {
    slug: 'kv-giffeln-orebro',
    images: ['giffeln/G1.jpg', 'giffeln/g2.jpg', 'giffeln/g3.jpg', 'giffeln/G4.jpg', 'giffeln/G5.jpg', 'giffeln/G6.jpg'],
    country: 'SWE',
    flag: '🇸🇪',
    data: {
      pl: {
        name: 'Kv Giffeln, Örebro',
        type: 'Dom opieki',
        challenge: 'Zaprojektowanie 3-kondygnacyjnego domu opieki w Örebro z prefabrykacją stropu i ścian, spełniającego szwedzkie wymagania bezpieczeństwa na budowie.',
        approach: 'Prefabrykacja stropu w technologii filigran (7 080 m²) oraz ścian zespolonych (5 245 m²) z akcesoriami instalacyjnymi. Wszystkie elementy zaprojektowane z uwzględnieniem montażu barierek ochronnych.',
        result: 'Ponad 12 000 m² prefabrykatów z pełną integracją systemów bezpieczeństwa. Efektywna budowa przy zachowaniu najwyższych standardów.',
        scope: ['Stropy filigran 7 080 m²', 'Ściany zespolone 5 245 m²', 'Akcesoria instalacyjne', 'Systemy BHP'],
        stats: [
          { label: 'Stropy filigran', value: '7 080 m²' },
          { label: 'Ściany zespolone', value: '5 245 m²' },
          { label: 'Kondygnacje', value: '3' },
        ],
      },
      en: {
        name: 'Kv Giffeln, Örebro',
        type: 'Nursing home',
        challenge: 'Design of a 3-storey nursing home in Örebro with precast floors and walls, meeting Swedish construction safety requirements.',
        approach: 'Prefabrication of filigree slab floors (7,080 m²) and composite walls (5,245 m²) with installation accessories. All elements designed for safety barrier assembly.',
        result: 'Over 12,000 m² of precast elements with full safety system integration. Efficient construction with highest standards.',
        scope: ['Filigree slabs 7,080 m²', 'Composite walls 5,245 m²', 'Installation accessories', 'H&S systems'],
        stats: [
          { label: 'Filigree slabs', value: '7,080 m²' },
          { label: 'Composite walls', value: '5,245 m²' },
          { label: 'Storeys', value: '3' },
        ],
      },
      de: {
        name: 'Kv Giffeln, Örebro',
        type: 'Pflegeheim',
        challenge: 'Planung eines 3-stöckigen Pflegeheims in Örebro mit vorgefertigten Decken und Wänden gemäß schwedischen Sicherheitsanforderungen.',
        approach: 'Vorfertigung von Filigrandecken (7.080 m²) und Doppelwänden (5.245 m²) mit Installationszubehör. Alle Elemente für die Montage von Schutzbarrieren ausgelegt.',
        result: 'Über 12.000 m² Fertigteile mit vollständiger Sicherheitssystemintegration.',
        scope: ['Filigrandecken 7.080 m²', 'Doppelwände 5.245 m²', 'Installationszubehör', 'Sicherheitssysteme'],
        stats: [
          { label: 'Filigrandecken', value: '7.080 m²' },
          { label: 'Doppelwände', value: '5.245 m²' },
          { label: 'Stockwerke', value: '3' },
        ],
      },
    },
  },
  {
    slug: 'ikea-kopenhaga',
    images: ['ikea/I1.jpg', 'ikea/I2.jpg', 'ikea/I3.jpg', 'ikea/I4.jpg', 'ikea/I5.jpg', 'ikea/budowa.jpg'],
    country: 'DK',
    flag: '🇩🇰',
    data: {
      pl: {
        name: 'IKEA, Kopenhaga',
        type: 'Budynek handlowy',
        challenge: 'Zaprojektowanie wielkopowierzchniowego budynku handlowego IKEA w Kopenhadze z pieszym ciągiem komunikacyjnym (tarasy o długości 3,5 km). Strop musiał być samonośny podczas betonowania — bez podpór tymczasowych.',
        approach: 'Zaprojektowaliśmy płyty stropowe filigran (3 595 m²) jako strop zespolony bez podpór tymczasowych. Podczas betonowania elementy działały jako samonośne, co znacząco uprościło logistykę budowy.',
        result: 'Innowacyjny strop filigran bez podpór tymczasowych — pierwszy tego typu w projekcie dla IKEA. Oszczędność czasu i kosztów montażu dzięki samonośności elementów.',
        scope: ['Stropy filigran 3 595 m²', 'Konstrukcja bez podpór tymczasowych', 'Strop samonośny podczas betonowania'],
        stats: [
          { label: 'Stropy filigran', value: '3 595 m²' },
          { label: 'Ciąg komunikacyjny', value: '3,5 km' },
          { label: 'Podpory tymczasowe', value: 'brak' },
        ],
      },
      en: {
        name: 'IKEA, Copenhagen',
        type: 'Commercial building',
        challenge: 'Design of a large-area IKEA commercial building in Copenhagen featuring 3.5 km pedestrian walkway terraces. The floor had to be self-supporting during concreting — no temporary supports.',
        approach: 'We designed filigree slabs (3,595 m²) as composite floors without temporary supports. Elements were self-supporting during concreting, significantly simplifying construction logistics.',
        result: 'Innovative filigree floor without temporary supports — first of its kind for IKEA. Saved assembly time and costs through self-supporting elements.',
        scope: ['Filigree slabs 3,595 m²', 'No temporary supports', 'Self-supporting during concreting'],
        stats: [
          { label: 'Filigree slabs', value: '3,595 m²' },
          { label: 'Walkway length', value: '3.5 km' },
          { label: 'Temporary supports', value: 'none' },
        ],
      },
      de: {
        name: 'IKEA, Kopenhagen',
        type: 'Einkaufszentrum',
        challenge: 'Planung eines großflächigen IKEA-Einkaufszentrums in Kopenhagen mit 3,5 km Fußgängerterrassen. Die Decke musste beim Betonieren selbsttragend sein — ohne temporäre Stützen.',
        approach: 'Wir planten Filigrandecken (3.595 m²) als Verbunddecken ohne temporäre Stützen. Beim Betonieren wirkten die Elemente als selbsttragend.',
        result: 'Innovative Filigrandecke ohne temporäre Stützen — erstmalig für ein IKEA-Projekt. Zeit- und Kostenersparnis bei der Montage.',
        scope: ['Filigrandecken 3.595 m²', 'Keine temporären Stützen', 'Selbsttragend beim Betonieren'],
        stats: [
          { label: 'Filigrandecken', value: '3.595 m²' },
          { label: 'Fußgängerweg', value: '3,5 km' },
          { label: 'Temporäre Stützen', value: 'keine' },
        ],
      },
    },
  },
  {
    slug: 'formee-miedzyrzecz',
    images: ['formee/F1.jpg', 'formee/F2.jpg', 'formee/F3.jpg', 'formee/F4.jpeg'],
    country: 'PL',
    flag: '🇵🇱',
    data: {
      pl: {
        name: 'Formee, Międzyrzecz',
        type: 'Hala produkcyjna',
        challenge: 'Zaprojektowanie zakładu produkcji prefabrykatów o powierzchni 6 656 m² z pełną prefabrykacją konstrukcji hali dwunawowej, przystosowaną pod ciężki transport suwnicowy.',
        approach: 'Pełna prefabrykacja konstrukcji: słupy (103 szt.), dźwigary strunobetonowe (56 szt.) i belki szczytowe. Hala dostosowana pod ciężki transport suwnicą — uwzględniliśmy obciążenia dynamiczne i specjalne wymagania produkcyjne.',
        result: 'W pełni prefabrykowana hala produkcyjna gotowa do obsługi ciężkiego transportu suwnicowego. Szybki montaż dzięki prefabrykacji całej konstrukcji.',
        scope: ['Słupy prefabrykowane 103 szt.', 'Dźwigary strunobetonowe 56 szt.', 'Belki szczytowe', 'Adaptacja pod suwnicę'],
        stats: [
          { label: 'Powierzchnia', value: '6 656 m²' },
          { label: 'Słupy', value: '103 szt.' },
          { label: 'Dźwigary', value: '56 szt.' },
        ],
      },
      en: {
        name: 'Formee, Międzyrzecz',
        type: 'Production hall',
        challenge: 'Design of a 6,656 m² precast factory with full prefabrication of a two-nave hall structure, adapted for heavy crane transport.',
        approach: 'Complete prefabrication: columns (103 pcs.), prestressed girders (56 pcs.) and gable beams. Hall adapted for heavy crane transport with dynamic loads and special production requirements.',
        result: 'Fully prefabricated production hall ready for heavy crane operations. Fast assembly through complete structural prefabrication.',
        scope: ['Precast columns 103 pcs.', 'Prestressed girders 56 pcs.', 'Gable beams', 'Crane adaptation'],
        stats: [
          { label: 'Area', value: '6,656 m²' },
          { label: 'Columns', value: '103 pcs.' },
          { label: 'Girders', value: '56 pcs.' },
        ],
      },
      de: {
        name: 'Formee, Międzyrzecz',
        type: 'Produktionshalle',
        challenge: 'Planung einer 6.656 m² Fertigteilfabrik mit vollständiger Vorfertigung einer zweischiffigen Hallenstruktur für schweren Krantransport.',
        approach: 'Vollständige Vorfertigung: Stützen (103 Stk.), Spannbetonträger (56 Stk.) und Giebelbalken. Halle für schweren Krantransport mit dynamischen Lasten ausgelegt.',
        result: 'Vollständig vorgefertigte Produktionshalle für schweren Kranbetrieb. Schnelle Montage durch komplette Strukturvorfertigung.',
        scope: ['Fertigteilstützen 103 Stk.', 'Spannbetonträger 56 Stk.', 'Giebelbalken', 'Krananpassung'],
        stats: [
          { label: 'Fläche', value: '6.656 m²' },
          { label: 'Stützen', value: '103 Stk.' },
          { label: 'Träger', value: '56 Stk.' },
        ],
      },
    },
  },
  {
    slug: 'budynek-slupsk',
    images: ['slupsk/s1.jpg', 'slupsk/s2.jpg', 'slupsk/s3.jpg', 'slupsk/s4.jpg', 'slupsk/s5.jpg', 'slupsk/s6.jpg'],
    country: 'PL',
    flag: '🇵🇱',
    data: {
      pl: {
        name: 'Budynek użytkowo-mieszkalny, Słupsk',
        type: 'Budynek mieszkalno-usługowy',
        challenge: 'Zaprojektowanie wielofunkcyjnego budynku na nietypowej działce — hala garażowa, 5 kondygnacji i poddasze. Szczególny kształt wymagał dwóch stropów transferowych dla dowolnej aranżacji przestrzeni.',
        approach: 'Opracowaliśmy konstrukcję z dwoma stropami transferowymi umożliwiającymi tworzenie dowolnych aranżacji przestrzeni niezależnie od układu na niższych kondygnacjach. Lokale usługowe (680 m²) i mieszkania (835 m²) w jednym budynku.',
        result: 'Budynek łączący funkcję usługową i mieszkalną z pełną elastycznością aranżacji dzięki stropom transferowym.',
        scope: ['Hala garażowa', '5 kondygnacji + poddasze', 'Stropy transferowe', 'Lokale usługowe 680 m²', 'Mieszkania 835 m²'],
        stats: [
          { label: 'Pow. usługowa', value: '680 m²' },
          { label: 'Pow. mieszkalna', value: '835 m²' },
          { label: 'Kondygnacje', value: '5 + poddasze' },
        ],
      },
      en: {
        name: 'Residential & Commercial, Słupsk',
        type: 'Mixed-use building',
        challenge: 'Design of a multi-functional building on an unusual plot — garage hall, 5 storeys and attic. The special shape required two transfer floors for flexible space arrangements.',
        approach: 'We designed a structure with two transfer floors enabling any space arrangement regardless of the lower floor layout. Commercial spaces (680 m²) and apartments (835 m²) in one building.',
        result: 'Building combining commercial and residential functions with full layout flexibility through transfer floors.',
        scope: ['Garage hall', '5 storeys + attic', 'Transfer floors', 'Commercial 680 m²', 'Apartments 835 m²'],
        stats: [
          { label: 'Commercial area', value: '680 m²' },
          { label: 'Residential area', value: '835 m²' },
          { label: 'Storeys', value: '5 + attic' },
        ],
      },
      de: {
        name: 'Wohn- und Geschäftsgebäude, Słupsk',
        type: 'Wohn- und Geschäftsgebäude',
        challenge: 'Planung eines multifunktionalen Gebäudes auf einem ungewöhnlichen Grundstück — Garagenhalle, 5 Stockwerke und Dachgeschoss. Zwei Transferdecken für flexible Raumgestaltung erforderlich.',
        approach: 'Struktur mit zwei Transferdecken für beliebige Raumanordnungen. Gewerbeflächen (680 m²) und Wohnungen (835 m²) in einem Gebäude.',
        result: 'Gebäude mit Gewerbe- und Wohnfunktion und voller Flexibilität durch Transferdecken.',
        scope: ['Garagenhalle', '5 Stockwerke + Dachgeschoss', 'Transferdecken', 'Gewerbefläche 680 m²', 'Wohnungen 835 m²'],
        stats: [
          { label: 'Gewerbefläche', value: '680 m²' },
          { label: 'Wohnfläche', value: '835 m²' },
          { label: 'Stockwerke', value: '5 + DG' },
        ],
      },
    },
  },
  {
    slug: 'kamienica-legnica',
    images: ['legnica/L1.png', 'legnica/l2-1.jpg', 'legnica/L3-1.jpg', 'legnica/l4-1.jpg', 'legnica/l5-1.jpg'],
    country: 'PL',
    flag: '🇵🇱',
    data: {
      pl: {
        name: 'Kamienica mieszkalna, Legnica',
        type: 'Budynek mieszkalny',
        challenge: 'Zaprojektowanie 5-kondygnacyjnego prefabrykowanego budynku mieszkalnego objętego ochroną konserwatorską. Wymagało to nietypowej dla prefabrykacji konstrukcji wielospadowej dachu.',
        approach: 'Ściany pełne (3 334 m²) z keramzytobetonu o doskonałych właściwościach termicznych i akustycznych. Prefabrykaty wyposażone w powtarzalne grupy punktów elektrycznych i akcesoriów wod.-kan. Zaprojektowaliśmy nietypową konstrukcję wielospadowego dachu.',
        result: 'Prefabrykowany budynek w zabytkowej lokalizacji z innowacyjnym dachem wielospadowym. Keramzytobeton zapewnił doskonałe parametry termiczne i akustyczne.',
        scope: ['Ściany pełne 3 334 m²', 'Keramzytobeton', 'Dach wielospadowy', 'Systemy elektryczne i wod.-kan.', 'Ochrona konserwatorska'],
        stats: [
          { label: 'Ściany pełne', value: '3 334 m²' },
          { label: 'Kondygnacje', value: '5 + poddasze' },
          { label: 'Materiał', value: 'Keramzytobeton' },
        ],
      },
      en: {
        name: 'Residential Building, Legnica',
        type: 'Residential building',
        challenge: 'Design of a 5-storey prefabricated residential building under heritage protection. Required an unusual multi-pitched roof structure — atypical for prefabrication.',
        approach: 'Full walls (3,334 m²) made of expanded clay concrete with excellent thermal and acoustic properties. Elements equipped with repetitive electrical and plumbing accessories. Multi-pitched roof designed for heritage compliance.',
        result: 'Prefabricated building in heritage location with innovative multi-pitched roof. Expanded clay concrete ensured excellent thermal and acoustic performance.',
        scope: ['Full walls 3,334 m²', 'Expanded clay concrete', 'Multi-pitched roof', 'Electrical and plumbing systems', 'Heritage compliance'],
        stats: [
          { label: 'Full walls', value: '3,334 m²' },
          { label: 'Storeys', value: '5 + attic' },
          { label: 'Material', value: 'Expanded clay' },
        ],
      },
      de: {
        name: 'Wohngebäude, Legnica',
        type: 'Wohngebäude',
        challenge: 'Planung eines 5-stöckigen Fertigteil-Wohngebäudes unter Denkmalschutz. Erforderte eine für die Vorfertigung ungewöhnliche mehrteilige Dachkonstruktion.',
        approach: 'Massivwände (3.334 m²) aus Keramsitbeton mit hervorragenden thermischen und akustischen Eigenschaften. Fertigteile mit Elektro- und Sanitärinstallationen ausgestattet.',
        result: 'Vorgefertigtes Gebäude in denkmalgeschützter Lage mit innovativer Dachkonstruktion.',
        scope: ['Massivwände 3.334 m²', 'Keramsitbeton', 'Mehrfach-Satteldach', 'Elektro- und Sanitärsysteme', 'Denkmalschutz'],
        stats: [
          { label: 'Massivwände', value: '3.334 m²' },
          { label: 'Stockwerke', value: '5 + DG' },
          { label: 'Material', value: 'Keramsitbeton' },
        ],
      },
    },
  },
  {
    slug: 'sokolka-zielenisz-gdynia',
    images: ['sokolka/H1.jpg', 'sokolka/H2.jpg', 'sokolka/H3.jpg', 'sokolka/H4.jpg', 'sokolka/H5.jpg', 'sokolka/H6.jpg', 'sokolka/H7.jpg'],
    country: 'PL',
    flag: '🇵🇱',
    data: {
      pl: {
        name: 'Sokółka Zielenisz, Gdynia',
        type: 'Zespół budynków mieszkalnych',
        challenge: 'Zaprojektowanie stropów filigran dla zespołu budynków do 13 kondygnacji o łącznej powierzchni 26 086 m² — ze znacznym otworowaniem i dużymi rozpiętościami.',
        approach: 'Udowodniliśmy, że prawidłowo zaprojektowany strop filigran może być tak samo efektywny jak monolityczny. Pomimo znacznego otworowania i dużych rozpiętości spełniliśmy warunek ugięcia czynnego przy jednoczesnej optymalizacji zbrojenia.',
        result: 'Ponad 26 000 m² stropów filigran — dowód, że prefabrykacja jest równie efektywna jak monolit nawet przy skomplikowanym układzie otworów i dużych rozpiętościach.',
        scope: ['Stropy filigran 26 086 m²', 'Budynki do 13 kondygnacji', 'Optymalizacja zbrojenia', 'Kontrola ugięć'],
        stats: [
          { label: 'Stropy filigran', value: '26 086 m²' },
          { label: 'Maks. kondygnacji', value: '13' },
          { label: 'Efektywność', value: '= monolit' },
        ],
      },
      en: {
        name: 'Sokółka Zielenisz, Gdynia',
        type: 'Residential complex',
        challenge: 'Design filigree slab floors for a residential complex up to 13 storeys, total area 26,086 m² — with significant openings and large spans.',
        approach: 'We proved that a properly designed filigree floor can be as effective as monolithic. Despite significant openings and large spans, we met deflection requirements while optimizing reinforcement.',
        result: 'Over 26,000 m² of filigree slabs — proof that precast is equally effective as monolithic even with complex opening layouts and large spans.',
        scope: ['Filigree slabs 26,086 m²', 'Buildings up to 13 storeys', 'Reinforcement optimization', 'Deflection control'],
        stats: [
          { label: 'Filigree slabs', value: '26,086 m²' },
          { label: 'Max. storeys', value: '13' },
          { label: 'Effectiveness', value: '= monolithic' },
        ],
      },
      de: {
        name: 'Sokółka Zielenisz, Gdynia',
        type: 'Wohnkomplex',
        challenge: 'Filigrandecken für einen Wohnkomplex bis 13 Stockwerke, Gesamtfläche 26.086 m² — mit erheblichen Öffnungen und großen Spannweiten.',
        approach: 'Wir haben bewiesen, dass eine richtig entworfene Filigrandecke genauso effektiv sein kann wie eine monolithische. Durchbiegungsbedingung erfüllt bei gleichzeitiger Bewehrungsoptimierung.',
        result: 'Über 26.000 m² Filigrandecken — Beweis, dass Fertigteile auch bei komplexen Öffnungen und großen Spannweiten genauso effektiv sind wie Monolith.',
        scope: ['Filigrandecken 26.086 m²', 'Gebäude bis 13 Stockwerke', 'Bewehrungsoptimierung', 'Durchbiegungskontrolle'],
        stats: [
          { label: 'Filigrandecken', value: '26.086 m²' },
          { label: 'Max. Stockwerke', value: '13' },
          { label: 'Effektivität', value: '= monolith' },
        ],
      },
    },
  },
  {
    slug: 'galeria-krotoszyn',
    images: ['krotoszyn/K1.jpg', 'krotoszyn/K2.jpg', 'krotoszyn/K3.jpg', 'krotoszyn/K4.jpg'],
    country: 'PL',
    flag: '🇵🇱',
    data: {
      pl: {
        name: 'Galeria handlowa, Krotoszyn',
        type: 'Budynek handlowy',
        challenge: 'Zaprojektowanie budynku handlowego o powierzchni 6 700 m², którego prefabrykowana elewacja miała odwzorować formę XIX-wiecznego zakładu przemysłowego. Dźwigary strunobetonowe o rozpiętości ponad 28 m.',
        approach: 'Konstrukcja oparta na prefabrykowanych słupach (85 szt.) stanowiących podporę dla belek (77 szt.), wymianów i dźwigarów strunobetonowych o rozpiętości ponad 28 m. Elewacja zaprojektowana tak, by kształtem nawiązywać do historycznej formy.',
        result: 'Nowoczesny budynek handlowy z prefabrykowaną elewacją nawiązującą do XIX-wiecznej architektury przemysłowej. Imponujące dźwigary o rozpiętości 28+ m.',
        scope: ['Słupy prefabrykowane 85 szt.', 'Belki 77 szt.', 'Dźwigary strunobetonowe 28+ m', 'Elewacja historyczna'],
        stats: [
          { label: 'Powierzchnia', value: '6 700 m²' },
          { label: 'Rozpiętość dźwigarów', value: '28+ m' },
          { label: 'Słupy', value: '85 szt.' },
        ],
      },
      en: {
        name: 'Shopping Mall, Krotoszyn',
        type: 'Commercial building',
        challenge: 'Design of a 6,700 m² commercial building with a precast facade reflecting the form of a 19th century industrial plant. Prestressed girders with spans over 28 m.',
        approach: 'Structure based on precast columns (85 pcs.) supporting beams (77 pcs.) and prestressed girders spanning over 28 m. Facade designed to reflect the historical industrial form.',
        result: 'Modern commercial building with precast facade referencing 19th-century industrial architecture. Impressive 28+ m span girders.',
        scope: ['Precast columns 85 pcs.', 'Beams 77 pcs.', 'Prestressed girders 28+ m', 'Historical facade'],
        stats: [
          { label: 'Area', value: '6,700 m²' },
          { label: 'Girder span', value: '28+ m' },
          { label: 'Columns', value: '85 pcs.' },
        ],
      },
      de: {
        name: 'Einkaufszentrum, Krotoszyn',
        type: 'Einkaufszentrum',
        challenge: 'Planung eines 6.700 m² Einkaufszentrums mit Fertigteilfassade nach Vorbild einer Industrieanlage aus dem 19. Jahrhundert. Spannbetonträger mit über 28 m Spannweite.',
        approach: 'Tragsystem aus Fertigteilstützen (85 Stk.) als Stütze für Balken (77 Stk.) und Spannbetonträger mit über 28 m Spannweite. Fassade der historischen Industrieform nachempfunden.',
        result: 'Modernes Einkaufszentrum mit Fertigteilfassade im historischen Industriestil. Beeindruckende 28+ m Trägerspannweiten.',
        scope: ['Fertigteilstützen 85 Stk.', 'Balken 77 Stk.', 'Spannbetonträger 28+ m', 'Historische Fassade'],
        stats: [
          { label: 'Fläche', value: '6.700 m²' },
          { label: 'Trägerspannweite', value: '28+ m' },
          { label: 'Stützen', value: '85 Stk.' },
        ],
      },
    },
  },
];
