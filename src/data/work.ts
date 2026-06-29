// The complete, verified body of work — grouped by show/project.
// Every video id below was checked live against YouTube/Vimeo oEmbed.

export type Category = "television" | "film" | "music" | "web";

export interface Clip {
  title: string;
  /** YouTube id, or Vimeo numeric id when source === "vimeo" */
  id: string;
  source?: "youtube" | "vimeo";
  /** optional start time (seconds) for deep-linked clips */
  start?: number;
  /** mark the strongest 1-2 pieces per show for the "Selected Work" grid */
  featured?: boolean;
}

export interface Show {
  category: Category;
  show: string;
  network?: string;
  role: string;
  year?: string;
  /** one-line context shown under the show title */
  note?: string;
  /** optional recognition for the series (kept accurate to the show, not the individual) */
  award?: string;
  clips: Clip[];
}

export const shows: Show[] = [
  // ───────────────────────── TELEVISION ─────────────────────────
  {
    category: "television",
    show: "Patriot Act with Hasan Minhaj",
    network: "Netflix",
    role: "Segment Director",
    year: "2019–2020",
    award: "Peabody & Emmy Award–winning series",
    note: "Directed deep-dive comedy segments for Hasan Minhaj's acclaimed Netflix series.",
    clips: [
      { title: "Why We Can't Retire", id: "j_aDGFXNfyw", featured: true },
      { title: "The Dark Side of the Video Game Industry", id: "pLAi_cmly6Q", start: 1317 },
      { title: "Why Your Public Transportation Sucks", id: "1Z1KLpf_7tU", start: 1352 },
    ],
  },
  {
    category: "television",
    show: "Wyatt Cenac's Problem Areas",
    network: "HBO",
    role: "Studio & Segment Director",
    year: "2018–2019",
    note: "Studio and segment director across both seasons of Wyatt Cenac's HBO docu-comedy.",
    clips: [
      { title: "Space Billionaires", id: "hHPONwRZZzM", featured: true },
      { title: "Banking Deserts", id: "pENUvXEl69c" },
      { title: "Problem Areas for City Dogs", id: "qklgRliRzPM" },
      { title: "Smartphone Heaven", id: "3MQeMzCdibM" },
      { title: "America's Schools", id: "DFnIdq9fFhs" },
      { title: "Union Labor — Full Episode (S2E1)", id: "r0ziIRPcl4s" },
      { title: "Full Episode — S2E6", id: "EcHGw5lmhiM" },
      { title: "Surveillance (S2E2 Clip)", id: "hU-cPVD95pM" },
      { title: "Adult Baby Walker", id: "1Q5UiZVcQf4" },
      { title: "Cow Poop", id: "iLqFu6cmdqI" },
      { title: "Dentistry", id: "FngtRa2Kkms" },
    ],
  },
  {
    category: "television",
    show: "The Read with Kid Fury & Crissle",
    network: "Fuse",
    role: "Director & Consulting Producer",
    year: "2019",
    note: "Directed the TV adaptation of the iconic pop-culture podcast.",
    clips: [
      { title: "Series Premiere — feat. Desus & Mero", id: "z0k-AbaPP6s", featured: true },
      { title: "The Missy Elliott Hall of Fame", id: "GT2EhCQNSGk" },
      { title: "Lena Waithe — Extended Cut", id: "IcI7mwDhqNU" },
    ],
  },
  {
    category: "television",
    show: "The Screen Test",
    network: "truTV",
    role: "Creator · Writer · Director · EP · VFX",
    note: "Created and ran his own sketch-comedy pilot — top to bottom.",
    clips: [
      { title: "Love Triangle in the ER — feat. Rachel Dratch", id: "oX9V80CEXD0", featured: true },
      { title: "Pilot", id: "hWHqRiPzZCU" },
      { title: "Italian Restaurant", id: "hqa9IZ15K9I" },
    ],
  },
  {
    category: "television",
    show: "Late Night with Jimmy Fallon",
    network: "NBC",
    role: "Animation Director / Head of Graphics",
    year: "2009–2013",
    note: "Four years leading graphics and animation for NBC's Late Night.",
    clips: [
      { title: "Large Marge", id: "jBgNaDCtIus", featured: true },
      { title: "Tootsie Pop: Alternate Ending", id: "21206793", source: "vimeo" },
      { title: "Kicking Stuff", id: "41yKPwIHWGo" },
    ],
  },
  {
    category: "television",
    show: "Chris Gethard Presents",
    network: "Fusion / MNN",
    role: "Live Studio Director",
    clips: [
      { title: "Comedy Amateurclass Vol. 2 — Martin Urbano", id: "kdXjI1TCwNg" },
      { title: "C.L.O.N. — Riley Soloner", id: "X9wOcq_vpCQ" },
      { title: "CLON 3: Song of the Summer", id: "T67zQXQlNfQ" },
    ],
  },
  {
    category: "television",
    show: "The Special Without Brett Davis",
    network: "MNN",
    role: "Live Studio Director / Producer",
    note: "100+ episodes of live, anything-goes public-access comedy.",
    clips: [
      { title: "A Look at The Special", id: "EGWNGQHvMuE" },
      { title: "River L. Ramirez Explores Williamsburg", id: "nDmI7VUGE2g" },
      { title: "Richard Kind Helps Count Dracula", id: "i-QuOwAZZ-M", featured: true },
    ],
  },

  // ───────────────────────── FILM ─────────────────────────
  {
    category: "film",
    show: "The Hawkins Family Yule Log",
    role: "Writer · Director · Producer · VFX",
    note: "A feature-length comedy Yule Log — written, directed and effects-finished solo.",
    clips: [{ title: "Official Trailer", id: "w-4IG6jFKeQ", featured: true }],
  },
  {
    category: "film",
    show: "Short Films",
    role: "Writer · Director",
    clips: [
      { title: "Spare Time", id: "6284497", source: "vimeo" },
      { title: "Soccer Time", id: "mFbZJ5YO1oQ" },
      { title: "Dr. Seuss' The Pants With Nobody Inside Them", id: "sJjTCr6BIBs", featured: true },
    ],
  },

  // ───────────────────────── MUSIC VIDEOS ─────────────────────────
  {
    category: "music",
    show: "Will Butler — “Friday Night”",
    network: "Arcade Fire",
    role: "Director",
    note: "Official music video for the Arcade Fire multi-instrumentalist's solo single.",
    clips: [{ title: "Friday Night (Official Video)", id: "rOoXr1qp9s4", featured: true }],
  },
  {
    category: "music",
    show: "Grooms — “Softer Now”",
    role: "Director",
    note: "Moody black-and-white narrative video for the Brooklyn band.",
    clips: [{ title: "Softer Now (Official Video)", id: "Um93ZZwGajM", featured: true }],
  },

  // ───────────────────────── WEB ─────────────────────────
  {
    category: "web",
    show: "Commercials & Parodies",
    role: "Director · VFX",
    clips: [
      { title: "#WearAMask PSA — New York Tough", id: "cp0uG4iwbUA", featured: true },
      { title: "Presidential Strength ZzzQuil", id: "_fnkHItFQ8c" },
      { title: "Gatorade OxySticks", id: "Mgp6V7VGTjE" },
      { title: "Belsomra — Insert Edit", id: "x0Bo_G4tDDM" },
    ],
  },
  {
    category: "web",
    show: "The Corrigan Show",
    role: "Director",
    note: "Kevin Corrigan interviews his famous friends. Just don't expect normal questions.",
    clips: [
      { title: "Pedro Pascal", id: "6OE6H7X5WiA", featured: true },
      { title: "Nick Offerman", id: "BIHBDVSKwqQ" },
      { title: "James Franco", id: "14L3QeSEKmY" },
      { title: "Janeane Garofalo", id: "95W7GtHByQw" },
      { title: "Natasha Lyonne, Abbi Jacobson & Ilana Glazer", id: "Pi91hxijTIE" },
    ],
  },
  {
    category: "web",
    show: "The Jon Friedman Internet Program",
    role: "Director · Animator",
    clips: [
      { title: "Milk", id: "wQFw9bDno2s" },
      { title: "The First Guy to Be Waved At", id: "h1-mx8qG7pA" },
      { title: "Side Effects", id: "GNu1sxQeBvM" },
    ],
  },
  {
    category: "web",
    show: "Fixing Breaking Bad",
    role: "Director · VFX",
    clips: [
      { title: "Part 1", id: "UGuv6xsVCVc" },
      { title: "Part 2", id: "Q6vYiGqQLDU" },
    ],
  },
  {
    category: "web",
    show: "Shorts & Sketches",
    role: "Director · VFX",
    clips: [
      { title: "Caper Break Up — feat. John Milhiser", id: "igbfaAYawJ0" },
      { title: "Nature Doc'ing", id: "QFjruJMVPGo" },
      { title: "Saturday Morning'ish Cartoons", id: "G1auBCyHhho" },
      { title: "Blackmagic 4K — Brooklyn", id: "bNB2hkv7BNI" },
    ],
  },
];

// The reel gets first-class treatment.
export const reel: Clip = { title: "Directing Reel", id: "_HXU3faQEMU" };

export const categoryLabels: Record<Category, string> = {
  television: "Television",
  film: "Film",
  music: "Music Videos",
  web: "Web & Commercial",
};

// Thumbnail + watch URLs that work for both sources.
// Vimeo thumbnails are self-hosted (fetched from Vimeo's oEmbed at build prep
// time) so the grid never depends on a flaky third-party thumbnail proxy.
export function thumb(c: Clip): string {
  return c.source === "vimeo"
    ? `${import.meta.env.BASE_URL.replace(/\/$/, "")}/img/vimeo-${c.id}.jpg`
    : `https://i.ytimg.com/vi/${c.id}/hqdefault.jpg`;
}
export function watchUrl(c: Clip): string {
  if (c.source === "vimeo") return `https://vimeo.com/${c.id}`;
  return `https://youtu.be/${c.id}${c.start ? `?t=${c.start}` : ""}`;
}
export function embedUrl(c: Clip, autoplay = true): string {
  const ap = autoplay ? "1" : "0";
  return c.source === "vimeo"
    ? `https://player.vimeo.com/video/${c.id}?autoplay=${ap}&title=0&byline=0&portrait=0`
    : `https://www.youtube-nocookie.com/embed/${c.id}?autoplay=${ap}&rel=0&modestbranding=1${c.start ? `&start=${c.start}` : ""}`;
}

// Flattened list (clip + its show context) for the filterable grid.
export interface FlatClip extends Clip {
  category: Category;
  show: string;
  network?: string;
  role: string;
}
export const allClips: FlatClip[] = shows.flatMap((s) =>
  s.clips.map((c) => ({ ...c, category: s.category, show: s.show, network: s.network, role: s.role }))
);
export const featuredClips: FlatClip[] = allClips.filter((c) => c.featured);

export const stats = {
  videos: allClips.length,
  shows: shows.length,
  networks: 6,
};
