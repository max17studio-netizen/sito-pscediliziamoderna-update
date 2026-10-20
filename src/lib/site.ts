export const company = {
  name: "P.S.C. Edilizia Moderna",
  legalName: "P.S.C. Edilizia Moderna S.r.l.",
  shortName: "P.S.C.",
  tagline: "Edilizia su misura, a Lissone e in Brianza.",
  address: "Via Caravaggio, 26/D",
  city: "Lissone",
  zip: "20851",
  province: "MB",
  region: "Monza e Brianza",
  mobile: "350 0298060",
  mobileHref: "tel:+393500298060",
  whatsapp: "https://wa.me/393500298060",
  email: "pscediliziamodernasrl@gmail.com",
  emailHref: "mailto:pscediliziamodernasrl@gmail.com",
  pec: "pscediliziamodernasrl@legalmail.it",
  pecHref: "mailto:pscediliziamodernasrl@legalmail.it",
  vat: "12249270963",
  rea: "MB-2649346",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  maps: "https://www.google.it/maps/place/Via+Caravaggio,+26D,+20851+Lissone+MB/@45.603771,9.2448603,17z",
  osmEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=9.23486%2C45.59977%2C9.25486%2C45.60777&layer=mapnik&marker=45.603771%2C9.2448603",
  lat: 45.603771,
  lng: 9.2448603,
} as const;


export const nav = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/servizi", label: "Servizi" },
  { href: "/certificazioni", label: "Certificazioni" },
  { href: "/lavori", label: "Lavori" },
  { href: "/contatti", label: "Contatti" },
];


export type Service = {
  slug: string;
  title: string;
  short: string;
  lead: string;
  image: string;
  points: string[];
  body: string[];
};

export const services: Service[] = [
  {
    slug: "ristrutturazioni",
    title: "Ristrutturazioni chiavi in mano",
    short: "Dallo svuotamento alla consegna, un solo referente.",
    lead: "Ristrutturiamo appartamenti, ville e locali commerciali in Brianza con un cantiere organizzato e tempi dichiarati.",
    image: "/images/copertina-ristrutturazioni-chiavi-in-mano.jpg",
    points: [
      "Sopralluogo e computo metrico",
      "Coordinamento di tutte le maestranze",
      "Finiture interne complete",
      "Consegna pulita e collaudata",
    ],
    body: [
      "Il lavoro chiavi in mano è il modo in cui preferiamo operare: un unico contratto, un responsabile di cantiere, un calendario. Non vi lasciamo a coordinare idraulico, elettricista e imbianchino.",
      "Interveniamo su appartamenti, ville unifamiliari e spazi commerciali. Demolizioni, impianti, isolamento, cartongesso, pavimenti, tinteggiature e infissi rientrano nello stesso intervento.",
      "Prima di aprire il cantiere prepariamo le pratiche comunali con un tecnico abilitato, così i lavori partono in regola.",
    ],
  },
  {
    slug: "costruzioni",
    title: "Costruzioni e nuove edificazioni",
    short: "Opere edili nuove, dalla struttura alle finiture.",
    lead: "Costruiamo e completiamo edifici residenziali e piccoli interventi di nuova edificazione nel territorio di Lissone e hinterland.",
    image: "/images/hero.jpg",
    points: [
      "Opere strutturali e murature",
      "Completamento e finitura",
      "Lottizzazioni e interventi su terreni",
      "Direzione operativa di cantiere",
    ],
    body: [
      "Oltre alla ristrutturazione, eseguiamo costruzioni e completamenti di edifici. Dalla muratura alle finiture, teniamo il cantiere sotto un’unica direzione.",
      "Lavoriamo su ville, palazzine e interventi di completamento. Il cantiere è organizzato per ridurre i tempi morti tra le fasi: struttura, involucro, impianti, finiture.",
    ],
  },
  {
    slug: "isolamenti",
    title: "Isolamento termo-acustico",
    short: "Cappotto, coperture e comfort interno.",
    lead: "Riduciamo i consumi e il rumore con isolamenti a regola d’arte, interni ed esterni.",
    image: "/images/insulation.jpg",
    points: [
      "Cappotto termico esterno",
      "Isolamento di coperture e sottotetti",
      "Contropareti e massetti isolanti",
      "Comfort acustico tra unità",
    ],
    body: [
      "L’isolamento è spesso la voce che cambia di più la casa: bollette, comfort d’estate e d’inverno, rumore dal vicino. Lo eseguiamo come intervento dedicato o dentro una ristrutturazione più ampia.",
      "Posiamo cappotto esterno, isolamenti in copertura e soluzioni interne. I materiali e gli spessori li scegliamo insieme al progettista, in funzione dell’edificio e del risultato atteso.",
    ],
  },
  {
    slug: "finiture",
    title: "Finiture, cartongesso e imbiancatura",
    short: "Pareti, soffitti, pavimenti, tinte.",
    lead: "Finiture interne ed esterne: dal cartongesso al parquet, dall’intonaco alla tinteggiatura.",
    image: "/images/craft.jpg",
    points: [
      "Cartongesso e controsoffitti",
      "Intonaci e rasature",
      "Imbiancatura e verniciature",
      "Pavimenti e rivestimenti",
    ],
    body: [
      "Le finiture decidono come si vive lo spazio. Lavoriamo intonaci, rasature, cartongesso, tinteggiature, parquet, gres e rivestimenti con la stessa attenzione che mettiamo nella struttura.",
      "Per gli interni residenziali preferiamo superfici calme: tinte a calce o idropitture opache, pavimenti in legno o gres di grande formato, dettagli di battiscopa e soglie risolti prima della posa.",
    ],
  },
  {
    slug: "impianti-idraulici",
    title: "Impianti Idraulici e Termoidraulica",
    short: "Sistemi idrici, riscaldamento e sanitari.",
    lead: "Progettazione e posa di impianti idraulici moderni, rifacimento bagni e soluzioni di riscaldamento ad alta efficienza.",
    image: "/images/copertina-impianti-idraulici.jpg",
    points: [
      "Rifacimento totale impianti idrici e sanitari",
      "Riscaldamento a pavimento e radiatori",
      "Installazione caldaie e pompe di calore",
      "Certificazione di conformità impianti",
    ],
    body: [
      "Un impianto idraulico sicuro è il cuore del comfort domestico. Nel contesto delle nostre ristrutturazioni, progettiamo e posiamo reti idriche e di riscaldamento destinate a durare nel tempo.",
      "Dalla scelta dei collettori alla posa dei sanitari sospesi, gestiamo ogni fase per eliminare il rischio di perdite e massimizzare l'efficienza energetica della casa.",
    ],
  },
  {
    slug: "impianti-elettrici",
    title: "Impianti Elettrici e Domotica",
    short: "Impianti civili a norma, quadri e automazioni.",
    lead: "Realizzazione di impianti elettrici civili completi, quadri di distribuzione moderni e predisposizioni domotiche.",
    image: "/images/copertina-impianti-elettrici.jpg",
    points: [
      "Impianti elettrici completi sfilabili e a norma",
      "Quadri elettrici di ultima generazione",
      "Sistemi di illuminazione LED e domotica",
      "Rilascio Dichiarazione di Conformità (DiCo)",
    ],
    body: [
      "Mettiamo in sicurezza la tua casa realizzando impianti elettrici moderni secondo le direttive del D.M. 37/2008, integrando i passaggi dei cavi direttamente nelle opere murarie.",
      "Predisponiamo soluzioni intelligenti per il controllo dei carichi, illuminazione architetturale e automazioni, garantendo un'infrastruttura elettrica flessibile per esigenze future.",
    ],
  },
  {
    slug: "carpenteria-metallica",
    title: "Carpenteria Metallica",
    short: "Strutture in acciaio, rinforzi e opere in ferro.",
    lead: "Realizzazione di strutture metalliche portanti, cerchiature, consolidamenti strutturali e opere di carpenteria leggera in Brianza.",
    image: "/images/copertina-carpenteria-metallica.jpg",
    points: [
      "Cerchiature e telai di rinforzo per aperture",
      "Strutture portanti in acciaio e soppalchi",
      "Opere in ferro battuto, ringhiere e cancelli",
      "Consolidamenti strutturali e antisismici",
    ],
    body: [
      "La carpenteria metallica è fondamentale negli interventi di ristrutturazione complessi o nel recupero dei sottotetti. Realizziamo cerchiature e strutture in acciaio calcolate per ridistribuire i carichi in totale sicurezza.",
      "Oltre alle opere strutturali, ci occupiamo di carpenteria metallica leggera per interni ed esterni, integrando gli elementi in ferro con le finiture edili tradizionali della casa.",
    ],
  },
  {
    slug: "infissi",
    title: "Infissi e serramenti",
    short: "Finestre, porte, tapparelle, inferriate.",
    lead: "Fornitura e posa di infissi, porte interne ed esterne, tapparelle, zanzariere e tende.",
    image: "/images/windows.jpg",
    points: [
      "Infissi in alluminio, PVC e legno",
      "Porte interne e portoncini",
      "Tapparelle, persiane, zanzariere",
      "Inferriate e tende da esterno",
    ],
    body: [
      "Infissi e porte chiudono l’involucro: se sono posati male, disperdono e spifferano. Misuriamo, forniamo e posiamo serramenti in alluminio, PVC o legno, con attenzione ai nodi e alle soglie.",
      "Completiamo con tapparelle, persiane, zanzariere, inferriate, porte blindate e tende da esterno, così l’intervento non resta a metà.",
    ],
  },
  {
    slug: "facciate",
    title: "Facciate e involucro",
    short: "Restauro, tinteggiatura, cappotto.",
    lead: "Rifacimento facciate, cornici, intonaci esterni e tinteggiature condominiali.",
    image: "/images/facade.jpg",
    points: [
      "Intonaci e rasature esterne",
      "Tinteggiatura di facciata",
      "Cornici e elementi decorativi",
      "Cappotto e involucro energetico",
    ],
    body: [
      "Una facciata a Lissone e in Brianza vive pioggia, gelo e smog. Interveniamo su intonaci ammalorati, cornici, davanzali e tinte, fino al cappotto quando serve un salto di prestazione.",
      "Lavoriamo sia su palazzine condominiali sia su ville. Il ponteggio e la sequenza delle fasi li organizziamo per ridurre il disagio a chi abita l’immobile.",
    ],
  },
  {
    slug: "pratiche",
    title: "Pratiche edilizie",
    short: "Comune, catasto, titoli abilitativi.",
    lead: "Predisposizione delle pratiche comunali, regionali e ASL, con tecnico abilitato.",
    image: "/images/copertina-pratiche-edilizie.jpg",
    points: [
      "CILA, SCIA e permessi di costruire",
      "Pratiche catastali",
      "Coordinamento con il progettista",
      "Fine lavori e agibilità",
    ],
    body: [
      "Nessun cantiere parte senza titolo. Predisponiamo e presentiamo le pratiche per i lavori che eseguiamo, affidando gli aspetti tecnici a un professionista abilitato.",
      "Vi accompagniamo da CILA e SCIA fino alla chiusura lavori, così non dovete inseguire scadenze e moduli tra Comune e cantiere.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  place: string;
  year: string;
  type: string;
  image: string;
  summary: string;
};

export const projects: Project[] = [
  {
    slug: "villa-lissone",
    title: "Villa unifamiliare",
    place: "Lissone",
    year: "2025",
    type: "Ristrutturazione completa",
    image: "/images/hero.jpg",
    summary:
      "Rifacimento di involucro, infissi e interni. Nuovo cappotto, serramenti in bronzo, finiture in calce e parquet.",
  },
  {
    slug: "appartamento-monza",
    title: "Appartamento d’epoca",
    place: "Monza",
    year: "2024",
    type: "Ristrutturazione interni",
    image: "/images/living.jpg",
    summary:
      "Demolizioni interne, nuovi impianti, cartongesso e tinte a calce. Soggiorno aperto sulla cucina, parquet a doghe larghe.",
  },
  {
    slug: "cucina-desio",
    title: "Casa a schiera",
    place: "Desio",
    year: "2025",
    type: "Finiture e cucina",
    image: "/images/kitchen.jpg",
    summary:
      "Rifacimento della zona giorno: cucina su misura, piano in marmo, terrazzo a terra e nuova illuminazione.",
  },
  {
    slug: "bagno-seregno",
    title: "Suite da bagno",
    place: "Seregno",
    year: "2024",
    type: "Impianti e finiture",
    image: "/images/bathroom.jpg",
    summary:
      "Due bagni rifatti da traccia: sanitari, doccia walk-in, rivestimenti in gres e rubinetteria in ottone.",
  },
  {
    slug: "facciata-muggio",
    title: "Palazzina residenziale",
    place: "Muggiò",
    year: "2023",
    type: "Facciata e cappotto",
    image: "/images/facade.jpg",
    summary:
      "Restauro di intonaci e cornici, cappotto termico, tinteggiatura e sistemazione dei davanzali.",
  },
  {
    slug: "attico-vimercate",
    title: "Attico sotto tetto",
    place: "Vimercate",
    year: "2024",
    type: "Recupero sottotetto",
    image: "/images/attic.jpg",
    summary:
      "Recupero di un sottotetto: isolamento in copertura, travi a vista, lucernari e pavimento in rovere.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Sopralluogo",
    text: "Veniamo a vedere l’immobile, ascoltiamo cosa vi serve e rileviamo vincoli, impianti e finiture esistenti.",
  },
  {
    n: "02",
    title: "Preventivo",
    text: "Ricevete un computo chiaro, con voci, tempi e cosa è incluso. Niente voci ‘imprevisti’ lasciate in sospeso.",
  },
  {
    n: "03",
    title: "Cantiere",
    text: "Un responsabile segue le maestranze. Vi aggiorniamo sulle fasi: demolizioni, impianti, finiture, collaudi.",
  },
  {
    n: "04",
    title: "Consegna",
    text: "Pulizia, verifica e consegna delle chiavi. Restiamo disponibili per la manutenzione successiva.",
  },
] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
