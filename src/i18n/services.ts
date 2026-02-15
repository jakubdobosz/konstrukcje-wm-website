import type { Lang } from './translations';

export interface ServiceData {
  slug: { pl: string; en: string; de: string };
  icon: string;
  data: {
    [key in Lang]: {
      title: string;
      hero: string;
      description: string;
      clients: { title: string; desc: string }[];
      scope: string[];
      process: { step: string; desc: string }[];
      relatedProjects: string[];
    };
  };
}

export const services: ServiceData[] = [
  {
    slug: { pl: 'prefabrykacja', en: 'precast', de: 'fertigteile' },
    icon: '🏗️',
    data: {
      pl: {
        title: 'Konstrukcje prefabrykowane',
        hero: 'Projektujemy elementy prefabrykowane dla nowoczesnych linii produkcyjnych — od słupów i belek po kompletne systemy ścian i stropów.',
        description: 'Specjalizujemy się w projektowaniu konstrukcji prefabrykowanych dla budownictwa mieszkaniowego, usługowego i przemysłowego. Nasze projekty obejmują wszystkie elementy — od pojedynczych prefabrykatów po kompletne systemy budynków. Generujemy pliki .pxml i .uni gotowe pod automatyczne linie produkcyjne.',
        clients: [
          { title: 'Inwestorzy', desc: 'Szukacie optymalizacji kosztów? Prefabrykacja skraca czas budowy i obniża koszty realizacji.' },
          { title: 'Fabryki prefabrykatów', desc: 'Dostarczamy kompletną dokumentację warsztatową gotową do produkcji, z plikami pod automatyczne linie.' },
          { title: 'Architekci', desc: 'Współpracujemy od wczesnych faz projektu, dopasowując prefabrykację do wizji architektonicznej.' },
        ],
        scope: [
          'Projekty słupów, belek, podwalin, schodów i ścian',
          'Dźwigary strunobetonowe',
          'Płyty stropowe filigran, kanałowe i pełne sprężone',
          'Ściany zespolone, pełne i trójwarstwowe',
          'Pliki .pxml i .uni pod automatyczne linie produkcyjne',
          'Dokumentacja w języku polskim, angielskim i niemieckim',
        ],
        process: [
          { step: 'Analiza', desc: 'Bezpłatna wstępna analiza projektu — sprawdzamy potencjał prefabrykacji.' },
          { step: 'Koncepcja', desc: 'Opracowanie koncepcji podziału na elementy prefabrykowane.' },
          { step: 'Projekt', desc: 'Szczegółowa dokumentacja techniczna i warsztatowa w BIM.' },
          { step: 'Wsparcie', desc: 'Nadzór autorski i wsparcie na etapie produkcji i montażu.' },
        ],
        relatedProjects: ['kv-babord-malmo', 'kv-giffeln-orebro', 'formee-miedzyrzecz', 'kamienica-legnica'],
      },
      en: {
        title: 'Precast Design',
        hero: 'We design precast elements for modern production lines — from columns and beams to complete wall and floor systems.',
        description: 'We specialize in precast structure design for residential, commercial and industrial construction. Our designs cover everything from individual precast elements to complete building systems. We generate .pxml and .uni files ready for automated production lines.',
        clients: [
          { title: 'Investors', desc: 'Looking to optimize costs? Precast shortens construction time and reduces project costs.' },
          { title: 'Precast factories', desc: 'We deliver complete workshop documentation ready for production, with files for automated lines.' },
          { title: 'Architects', desc: 'We collaborate from early design phases, adapting prefabrication to architectural vision.' },
        ],
        scope: [
          'Design of columns, beams, ground beams, stairs and walls',
          'Prestressed concrete girders',
          'Filigree, hollow core and full prestressed floor slabs',
          'Composite, solid and three-layer walls',
          '.pxml and .uni files for automated production lines',
          'Documentation in Polish, English and German',
        ],
        process: [
          { step: 'Analysis', desc: 'Free initial project analysis — we check the prefabrication potential.' },
          { step: 'Concept', desc: 'Development of the precast element division concept.' },
          { step: 'Design', desc: 'Detailed technical and workshop documentation in BIM.' },
          { step: 'Support', desc: 'Design supervision and support during production and assembly.' },
        ],
        relatedProjects: ['kv-babord-malmo', 'kv-giffeln-orebro', 'formee-miedzyrzecz', 'kamienica-legnica'],
      },
      de: {
        title: 'Vorgefertigte Konstruktionen',
        hero: 'Wir planen Fertigteile für moderne Produktionslinien — von Stützen und Balken bis zu kompletten Wand- und Deckensystemen.',
        description: 'Wir sind spezialisiert auf die Planung von Fertigteilkonstruktionen für Wohn-, Gewerbe- und Industriebau. Unsere Projekte umfassen alles von einzelnen Fertigteilen bis zu kompletten Gebäudesystemen. Wir generieren .pxml- und .uni-Dateien für automatische Produktionslinien.',
        clients: [
          { title: 'Investoren', desc: 'Kostenoptimierung gesucht? Vorfertigung verkürzt die Bauzeit und senkt die Kosten.' },
          { title: 'Fertigteilwerke', desc: 'Wir liefern komplette Werkstattdokumentation mit Dateien für automatische Linien.' },
          { title: 'Architekten', desc: 'Zusammenarbeit ab den frühen Planungsphasen.' },
        ],
        scope: [
          'Planung von Stützen, Balken, Fundamenten, Treppen und Wänden',
          'Spannbetonträger',
          'Filigran-, Hohlkörper- und Spannbetondecken',
          'Doppelwände, Massivwände und Sandwichwände',
          '.pxml- und .uni-Dateien für automatische Produktionslinien',
          'Dokumentation in Polnisch, Englisch und Deutsch',
        ],
        process: [
          { step: 'Analyse', desc: 'Kostenlose Erstanalyse — wir prüfen das Vorfertigungspotenzial.' },
          { step: 'Konzept', desc: 'Entwicklung der Fertigteileinteilung.' },
          { step: 'Planung', desc: 'Detaillierte technische und Werkstattdokumentation in BIM.' },
          { step: 'Betreuung', desc: 'Planungsaufsicht und Unterstützung bei Produktion und Montage.' },
        ],
        relatedProjects: ['kv-babord-malmo', 'kv-giffeln-orebro', 'formee-miedzyrzecz', 'kamienica-legnica'],
      },
    },
  },
  {
    slug: { pl: 'konstrukcje-zelbetowe', en: 'reinforced-concrete', de: 'stahlbeton' },
    icon: '🏢',
    data: {
      pl: {
        title: 'Konstrukcje żelbetowe',
        hero: 'Projekty techniczne i wykonawcze dla wszystkich rodzajów konstrukcji żelbetowych — z możliwością konwersji na prefabrykację.',
        description: 'Opracowujemy projekty techniczne oraz wykonawcze dla wszystkich rodzajów konstrukcji żelbetowych. Dysponujemy bogatym doświadczeniem umożliwiającym zamianę konstrukcji monolitycznej na prefabrykowaną — tak samo efektywną, a znacząco oszczędzającą czas budowy.',
        clients: [
          { title: 'Deweloperzy', desc: 'Optymalizujemy konstrukcję pod kątem kosztów i czasu realizacji.' },
          { title: 'Generalni wykonawcy', desc: 'Kompletna dokumentacja wykonawcza gotowa do realizacji.' },
          { title: 'Biura architektoniczne', desc: 'Współpraca w modelu BIM od wczesnych faz projektu.' },
        ],
        scope: [
          'Projekty techniczne i wykonawcze konstrukcji żelbetowych',
          'Konwersja konstrukcji monolitycznej na prefabrykowaną',
          'Projekty wzmocnień i przebudów istniejących konstrukcji',
          'Opinie techniczne',
          'Modelowanie BIM',
          'Dokumentacja wielojęzyczna (PL/EN/DE)',
        ],
        process: [
          { step: 'Analiza', desc: 'Ocena projektu architektonicznego i optymalizacja konstrukcji.' },
          { step: 'Projekt techniczny', desc: 'Opracowanie koncepcji i projektu technicznego.' },
          { step: 'Projekt wykonawczy', desc: 'Szczegółowa dokumentacja wykonawcza w BIM.' },
          { step: 'Nadzór', desc: 'Nadzór autorski podczas realizacji.' },
        ],
        relatedProjects: ['budynek-slupsk', 'sokolka-zielenisz-gdynia'],
      },
      en: {
        title: 'Reinforced Concrete Design',
        hero: 'Technical and executive designs for all reinforced concrete structures — with option to convert to precast.',
        description: 'We develop technical and executive designs for all types of reinforced concrete structures. Our extensive experience enables us to convert monolithic structures to precast — equally effective while significantly saving construction time.',
        clients: [
          { title: 'Developers', desc: 'We optimize structures for cost and time efficiency.' },
          { title: 'General contractors', desc: 'Complete executive documentation ready for construction.' },
          { title: 'Architecture firms', desc: 'BIM collaboration from early project phases.' },
        ],
        scope: [
          'Technical and executive reinforced concrete designs',
          'Monolithic to precast conversion',
          'Reinforcement and redevelopment designs',
          'Technical opinions',
          'BIM modeling',
          'Multi-language documentation (PL/EN/DE)',
        ],
        process: [
          { step: 'Analysis', desc: 'Architectural design assessment and structural optimization.' },
          { step: 'Technical design', desc: 'Concept and technical design development.' },
          { step: 'Executive design', desc: 'Detailed executive documentation in BIM.' },
          { step: 'Supervision', desc: 'Design supervision during construction.' },
        ],
        relatedProjects: ['budynek-slupsk', 'sokolka-zielenisz-gdynia'],
      },
      de: {
        title: 'Stahlbetonkonstruktionen',
        hero: 'Technische und Ausführungsprojekte für alle Stahlbetonkonstruktionen — mit Konvertierungsoption zu Fertigteilen.',
        description: 'Wir entwickeln technische und Ausführungsprojekte für alle Arten von Stahlbetonkonstruktionen. Unsere Erfahrung ermöglicht die Umwandlung monolithischer in Fertigteilkonstruktionen.',
        clients: [
          { title: 'Bauherren', desc: 'Wir optimieren die Konstruktion für Kosten und Zeit.' },
          { title: 'Generalunternehmer', desc: 'Komplette Ausführungsdokumentation, baufertig.' },
          { title: 'Architekturbüros', desc: 'BIM-Zusammenarbeit ab den frühen Planungsphasen.' },
        ],
        scope: [
          'Technische und Ausführungsprojekte für Stahlbeton',
          'Konvertierung von Monolith zu Fertigteil',
          'Verstärkungs- und Umbauplanungen',
          'Technische Gutachten',
          'BIM-Modellierung',
          'Mehrsprachige Dokumentation (PL/EN/DE)',
        ],
        process: [
          { step: 'Analyse', desc: 'Bewertung des architektonischen Entwurfs und Konstruktionsoptimierung.' },
          { step: 'Technischer Entwurf', desc: 'Entwicklung von Konzept und technischem Entwurf.' },
          { step: 'Ausführungsplanung', desc: 'Detaillierte Ausführungsdokumentation in BIM.' },
          { step: 'Bauaufsicht', desc: 'Planungsaufsicht während der Bauausführung.' },
        ],
        relatedProjects: ['budynek-slupsk', 'sokolka-zielenisz-gdynia'],
      },
    },
  },
  {
    slug: { pl: 'sprezone', en: 'prestressed', de: 'spannbeton' },
    icon: '⚡',
    data: {
      pl: {
        title: 'Konstrukcje sprężone',
        hero: 'Projekty technologiczne oraz programy sprężania dla konstrukcji kablobetonowych i strunobetonowych.',
        description: 'Oferujemy wykonanie projektów technologicznych oraz programów sprężania dla konstrukcji kablobetonowych i strunobetonowych. Projektujemy dźwigary o imponujących rozpiętościach i elementy sprężone dla obiektów przemysłowych i komercyjnych.',
        clients: [
          { title: 'Fabryki prefabrykatów', desc: 'Projekty warsztatowe elementów strunobetonowych gotowe do produkcji.' },
          { title: 'Inwestorzy obiektów komercyjnych', desc: 'Duże rozpiętości bez słupów pośrednich dzięki technologii sprężania.' },
          { title: 'Generalni wykonawcy', desc: 'Projekty technologiczne sprężania konstrukcji kubaturowych.' },
        ],
        scope: [
          'Projekty technologiczne sprężania',
          'Programy sprężania kablobetonu',
          'Dźwigary strunobetonowe',
          'Elementy sprężone o dużych rozpiętościach',
          'Projekty warsztatowe i wykonawcze',
          'Technologia kablobetonu dla konstrukcji kubaturowych',
        ],
        process: [
          { step: 'Analiza', desc: 'Ocena wymagań konstrukcyjnych i dobór technologii sprężania.' },
          { step: 'Program sprężania', desc: 'Opracowanie programu sprężania z uwzględnieniem strat.' },
          { step: 'Projekt warsztatowy', desc: 'Dokumentacja warsztatowa elementów sprężonych.' },
          { step: 'Wsparcie produkcji', desc: 'Nadzór nad produkcją elementów sprężonych.' },
        ],
        relatedProjects: ['formee-miedzyrzecz', 'galeria-krotoszyn'],
      },
      en: {
        title: 'Prestressed Concrete Design',
        hero: 'Technological design and prestressing programs for post-tensioned and prestressed concrete structures.',
        description: 'We offer technological design and prestressing programs for post-tensioned and prestressed concrete structures. We design girders with impressive spans and prestressed elements for industrial and commercial buildings.',
        clients: [
          { title: 'Precast factories', desc: 'Workshop designs of prestressed elements ready for production.' },
          { title: 'Commercial investors', desc: 'Large spans without intermediate columns through prestressing technology.' },
          { title: 'General contractors', desc: 'Technological prestressing designs for cubature structures.' },
        ],
        scope: [
          'Technological prestressing designs',
          'Post-tensioned concrete programs',
          'Prestressed concrete girders',
          'Large-span prestressed elements',
          'Workshop and executive designs',
          'Post-tensioned technology for cubature structures',
        ],
        process: [
          { step: 'Analysis', desc: 'Structural requirements assessment and prestressing technology selection.' },
          { step: 'Prestressing program', desc: 'Prestressing program development including losses.' },
          { step: 'Workshop design', desc: 'Workshop documentation for prestressed elements.' },
          { step: 'Production support', desc: 'Supervision of prestressed element production.' },
        ],
        relatedProjects: ['formee-miedzyrzecz', 'galeria-krotoszyn'],
      },
      de: {
        title: 'Spannbetonkonstruktionen',
        hero: 'Technologische Projekte und Vorspannprogramme für Spannbeton- und Kabelbetonkonstruktionen.',
        description: 'Technologische Projekte und Vorspannprogramme für Spannbeton- und Kabelbetonkonstruktionen. Wir planen Träger mit beeindruckenden Spannweiten.',
        clients: [
          { title: 'Fertigteilwerke', desc: 'Werkstattplanungen für Spannbetonelemente, produktionsfertig.' },
          { title: 'Gewerbeinvestoren', desc: 'Große Spannweiten ohne Zwischenstützen durch Spannbetontechnologie.' },
          { title: 'Generalunternehmer', desc: 'Technologische Vorspannplanungen für Kubaturkonstruktionen.' },
        ],
        scope: [
          'Technologische Vorspannplanungen',
          'Kabelbetonprogramme',
          'Spannbetonträger',
          'Großspannweiten-Elemente',
          'Werkstatt- und Ausführungsplanungen',
          'Kabelbetontechnologie für Kubaturkonstruktionen',
        ],
        process: [
          { step: 'Analyse', desc: 'Bewertung der Konstruktionsanforderungen und Technologieauswahl.' },
          { step: 'Vorspannprogramm', desc: 'Entwicklung des Vorspannprogramms inkl. Verluste.' },
          { step: 'Werkstattplanung', desc: 'Werkstattdokumentation für Spannbetonelemente.' },
          { step: 'Produktionsbetreuung', desc: 'Überwachung der Spannbetonelementproduktion.' },
        ],
        relatedProjects: ['formee-miedzyrzecz', 'galeria-krotoszyn'],
      },
    },
  },
  {
    slug: { pl: 'optymalizacja', en: 'optimization', de: 'optimierung' },
    icon: '📐',
    data: {
      pl: {
        title: 'Optymalizacja konstrukcji',
        hero: 'Zamieniamy konstrukcję monolityczną na prefabrykowaną — oszczędzasz czas i pieniądze bez kompromisu na efektywności.',
        description: 'Dysponujemy bogatym doświadczeniem w zamianie konstrukcji monolitycznej na prefabrykowaną. Zaprojektowana przez nas konstrukcja prefabrykowana jest tak samo efektywna jak monolityczna, a znacząco oszczędza czas i koszty budowy. Oferujemy również consulting i opinie techniczne.',
        clients: [
          { title: 'Inwestorzy', desc: 'Sprawdzimy, czy Twoja inwestycja może być tańsza dzięki prefabrykacji.' },
          { title: 'Deweloperzy', desc: 'Optymalizacja kosztów konstrukcji przy zachowaniu pełnego bezpieczeństwa.' },
          { title: 'Generalni wykonawcy', desc: 'Pomoc w wyborze optymalnej technologii realizacji.' },
        ],
        scope: [
          'Konwersja monolit → prefabrykacja',
          'Optymalizacja zużycia materiałów',
          'Consulting na każdym etapie projektu',
          'Opinie techniczne',
          'Programy wzmocnień istniejących konstrukcji',
          'Dobór optymalnej technologii wykonania',
        ],
        process: [
          { step: 'Bezpłatna analiza', desc: 'Sprawdzamy potencjał optymalizacji Twojego projektu.' },
          { step: 'Koncepcja', desc: 'Propozycja rozwiązania z szacunkiem oszczędności.' },
          { step: 'Projekt', desc: 'Pełna dokumentacja optymalizowanej konstrukcji.' },
          { step: 'Współpraca', desc: 'Aktywne wsparcie na etapie realizacji.' },
        ],
        relatedProjects: ['sokolka-zielenisz-gdynia', 'kv-babord-malmo', 'ikea-kopenhaga'],
      },
      en: {
        title: 'Structural Optimization',
        hero: 'We convert monolithic to precast — saving you time and money without compromising effectiveness.',
        description: 'Our extensive experience enables us to convert monolithic structures to precast. Our precast designs are as effective as monolithic while significantly saving construction time and costs. We also offer consulting and technical opinions.',
        clients: [
          { title: 'Investors', desc: "We'll check if your investment can be cheaper with precast." },
          { title: 'Developers', desc: 'Cost optimization while maintaining full structural safety.' },
          { title: 'General contractors', desc: 'Help choosing the optimal construction technology.' },
        ],
        scope: [
          'Monolithic to precast conversion',
          'Material usage optimization',
          'Consulting at every project stage',
          'Technical opinions',
          'Strengthening programs for existing structures',
          'Optimal technology selection',
        ],
        process: [
          { step: 'Free analysis', desc: "We check your project's optimization potential." },
          { step: 'Concept', desc: 'Solution proposal with savings estimate.' },
          { step: 'Design', desc: 'Full documentation of the optimized structure.' },
          { step: 'Collaboration', desc: 'Active support during construction.' },
        ],
        relatedProjects: ['sokolka-zielenisz-gdynia', 'kv-babord-malmo', 'ikea-kopenhaga'],
      },
      de: {
        title: 'Konstruktionsoptimierung',
        hero: 'Wir wandeln Monolith in Fertigteile um — Sie sparen Zeit und Geld ohne Kompromisse bei der Effektivität.',
        description: 'Unsere Erfahrung ermöglicht die Umwandlung monolithischer in Fertigteilkonstruktionen. Ebenso effektiv, aber deutlich schneller und günstiger. Dazu bieten wir Consulting und technische Gutachten.',
        clients: [
          { title: 'Investoren', desc: 'Wir prüfen, ob Ihre Investition mit Fertigteilen günstiger sein kann.' },
          { title: 'Bauherren', desc: 'Kostenoptimierung bei voller Tragwerkssicherheit.' },
          { title: 'Generalunternehmer', desc: 'Hilfe bei der Wahl der optimalen Bautechnologie.' },
        ],
        scope: [
          'Konvertierung Monolith → Fertigteil',
          'Materialverbrauchsoptimierung',
          'Consulting in jeder Projektphase',
          'Technische Gutachten',
          'Verstärkungsprogramme für bestehende Konstruktionen',
          'Optimale Technologieauswahl',
        ],
        process: [
          { step: 'Kostenlose Analyse', desc: 'Wir prüfen das Optimierungspotenzial Ihres Projekts.' },
          { step: 'Konzept', desc: 'Lösungsvorschlag mit Einsparungsschätzung.' },
          { step: 'Planung', desc: 'Vollständige Dokumentation der optimierten Konstruktion.' },
          { step: 'Zusammenarbeit', desc: 'Aktive Unterstützung während der Bauphase.' },
        ],
        relatedProjects: ['sokolka-zielenisz-gdynia', 'kv-babord-malmo', 'ikea-kopenhaga'],
      },
    },
  },
];
