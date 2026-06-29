// The body of work, curated and ordered to land directing jobs.
// Strongest, most credible directing first. Old web-sketch filler removed.
// Animation/VFX work is kept separate (category "vfx") as a craft credential.
// Every video id verified live. No dashes anywhere in copy.

export type Category = "television" | "commercial" | "music" | "film" | "vfx";

export interface Clip {
  title: string;
  id: string;
  source?: "youtube" | "vimeo";
  start?: number;
  featured?: boolean;
}

export interface Show {
  category: Category;
  show: string;
  network?: string;
  role: string;
  year?: string;
  note?: string;
  award?: string;
  clips: Clip[];
}

export const shows: Show[] = [
  // ───────── DIRECTING: the headline credits, best first ─────────
  {
    category: "television",
    show: "Patriot Act with Hasan Minhaj",
    network: "Netflix",
    role: "Segment Director",
    year: "2019 to 2020",
    award: "Peabody & Emmy Award-winning series",
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
    year: "2018 to 2019",
    note: "Studio and segment director across both seasons of Wyatt Cenac's HBO docu-comedy.",
    clips: [
      { title: "Space Billionaires", id: "hHPONwRZZzM", featured: true },
      { title: "Banking Deserts", id: "pENUvXEl69c" },
      { title: "Problem Areas for City Dogs", id: "qklgRliRzPM" },
      { title: "Problem Areas in America's Schools", id: "DFnIdq9fFhs" },
      { title: "Union Labor, Full Episode (S2 E1)", id: "r0ziIRPcl4s" },
      { title: "Surveillance", id: "hU-cPVD95pM" },
    ],
  },
  {
    category: "music",
    show: "Will Butler",
    network: "Arcade Fire",
    role: "Director",
    note: "Official music video for the Arcade Fire multi-instrumentalist's solo single.",
    clips: [{ title: "Friday Night (Official Video)", id: "rOoXr1qp9s4", featured: true }],
  },
  {
    category: "television",
    show: "The Screen Test",
    network: "truTV",
    role: "Creator, Director & EP",
    note: "Created, directed and finished his own sketch-comedy pilot, top to bottom.",
    clips: [
      { title: "Love Triangle in the ER, with Rachel Dratch", id: "oX9V80CEXD0", featured: true },
      { title: "Pilot", id: "hWHqRiPzZCU" },
      { title: "Italian Restaurant", id: "hqa9IZ15K9I" },
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
      { title: "Series Premiere, with Desus & Mero", id: "z0k-AbaPP6s", featured: true },
      { title: "The Missy Elliott Hall of Fame", id: "GT2EhCQNSGk" },
      { title: "Lena Waithe (Extended Cut)", id: "IcI7mwDhqNU" },
    ],
  },
  {
    category: "music",
    show: "Grooms",
    role: "Director",
    note: "Moody black-and-white narrative video for the Brooklyn band.",
    clips: [{ title: "Softer Now (Official Video)", id: "Um93ZZwGajM", featured: true }],
  },
  {
    category: "commercial",
    show: "Commercials & Parodies",
    role: "Director & VFX",
    note: "Spots and commercial parodies, directed and effects-finished.",
    clips: [
      { title: "New York Tough #WearAMask PSA", id: "cp0uG4iwbUA", featured: true },
      { title: "Presidential Strength ZzzQuil", id: "_fnkHItFQ8c" },
      { title: "Gatorade OxySticks", id: "Mgp6V7VGTjE" },
      { title: "Belsomra (Insert Edit)", id: "x0Bo_G4tDDM" },
    ],
  },
  {
    category: "television",
    show: "The Corrigan Show",
    role: "Director",
    note: "Kevin Corrigan interviews his famous friends. The guest list does the talking.",
    clips: [
      { title: "Pedro Pascal", id: "6OE6H7X5WiA", featured: true },
      { title: "Nick Offerman", id: "BIHBDVSKwqQ" },
      { title: "James Franco", id: "14L3QeSEKmY" },
      { title: "Janeane Garofalo", id: "95W7GtHByQw" },
      { title: "Natasha Lyonne, Abbi Jacobson & Ilana Glazer", id: "Pi91hxijTIE" },
    ],
  },
  {
    category: "film",
    show: "The Hawkins Family Yule Log",
    role: "Creator, Director & VFX",
    note: "A feature-length comedy Yule Log, directed and effects-finished solo.",
    clips: [{ title: "Official Trailer", id: "w-4IG6jFKeQ", featured: true }],
  },
  {
    category: "film",
    show: "Short Films",
    role: "Director",
    clips: [
      { title: "Dr. Seuss' The Pants With Nobody Inside Them", id: "sJjTCr6BIBs" },
      { title: "Soccer Time", id: "mFbZJ5YO1oQ" },
      { title: "Spare Time", id: "6284497", source: "vimeo" },
    ],
  },
  {
    category: "television",
    show: "Chris Gethard Presents",
    network: "Fusion",
    role: "Live Studio Director",
    note: "Live, single-take studio directing for the cult comedy series.",
    clips: [
      { title: "C.L.O.N. with Riley Soloner", id: "X9wOcq_vpCQ" },
      { title: "Comedy Amateurclass with Martin Urbano", id: "kdXjI1TCwNg" },
    ],
  },
  {
    category: "television",
    show: "The Special Without Brett Davis",
    network: "MNN",
    role: "Live Studio Director & Producer",
    note: "Over 100 episodes of live, anything-goes studio comedy.",
    clips: [
      { title: "Richard Kind Helps Count Dracula", id: "i-QuOwAZZ-M" },
      { title: "River L. Ramirez Explores Williamsburg", id: "nDmI7VUGE2g" },
    ],
  },

  // ───────── ANIMATION & VFX: the craft credential (kept separate) ─────────
  {
    category: "vfx",
    show: "Late Night with Jimmy Fallon",
    network: "NBC",
    role: "Animation Director & Head of Graphics",
    year: "2009 to 2013",
    note: "Four years leading animation and graphics for NBC's Late Night.",
    clips: [
      { title: "Large Marge", id: "jBgNaDCtIus", featured: true },
      { title: "Tootsie Pop, Alternate Ending", id: "21206793", source: "vimeo" },
      { title: "Kicking Stuff", id: "41yKPwIHWGo" },
    ],
  },
];

export const reel: Clip = { title: "Directing Reel", id: "_HXU3faQEMU" };

const directingCats: Category[] = ["television", "commercial", "music", "film"];
export const categoryLabels: Record<Category, string> = {
  television: "Television",
  commercial: "Commercials",
  music: "Music Videos",
  film: "Film",
  vfx: "Animation & VFX",
};
export const filterCats = directingCats;

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

export interface FlatClip extends Clip {
  category: Category;
  show: string;
  network?: string;
  role: string;
}
function flatten(list: Show[]): FlatClip[] {
  return list.flatMap((s) =>
    s.clips.map((c) => ({ ...c, category: s.category, show: s.show, network: s.network, role: s.role }))
  );
}
export const allClips: FlatClip[] = flatten(shows);
// directing index (the filterable grid) excludes the VFX section
export const indexClips: FlatClip[] = allClips.filter((c) => directingCats.includes(c.category));
export const featuredClips: FlatClip[] = indexClips.filter((c) => c.featured);
export const vfxClips: FlatClip[] = allClips.filter((c) => c.category === "vfx");
// directing shows, in order, for the credits list (VFX listed under its own block)
export const directingShows = shows.filter((s) => s.category !== "vfx");
export const vfxShows = shows.filter((s) => s.category === "vfx");
