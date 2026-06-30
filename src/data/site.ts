// Global site/profile data for Edmond Hawkins — positioning: DIRECTOR first.
export const site = {
  name: "Edmond Hawkins",
  // Primary identity the site sells.
  role: "Comedy Director",
  // Genuine differentiator, kept as a credential (not a competing title).
  craft: "Animation & VFX",
  // Short, punchy hero line. Director first; VFX as the superpower. No dashes.
  tagline:
    "A comedy director for Netflix, HBO and Fuse who does his own animation and visual effects, so the idea in his head is the one that lands on screen.",
  // Three prestige credit callouts for the hero (network + show), in place of vanity stats.
  heroCredits: [
    { network: "NETFLIX", show: "Patriot Act" },
    { network: "HBO", show: "Problem Areas" },
    { network: "truTV", show: "The Screen Test" },
  ],
  // Bio. Director-led; animation/VFX framed as the edge. Writer dropped (per direction).
  bio: [
    "Edmond Hawkins is a Brooklyn-based comedy director.",
    "He directed segments for Netflix's Patriot Act with Hasan Minhaj, was Studio & Segment Director across both seasons of HBO's Wyatt Cenac's Problem Areas, created and directed his own pilot for truTV, and directs music videos and commercials.",
    "He is also a sought-after animator and visual-effects artist, handling animation and VFX for Saturday Night Live and Late Night with Jimmy Fallon. That means he can see a joke all the way through, from the idea to the finished frame.",
  ],
  // Marquee of outlets the work has lived on.
  networks: ["NETFLIX", "HBO", "SNL", "truTV", "FUSE", "NBC"],
  // Notable on-screen collaborators (social proof).
  collaborators: [
    "Hasan Minhaj", "Wyatt Cenac", "Pedro Pascal", "Natasha Lyonne", "Will Butler",
    "James Franco", "Nick Offerman", "Janeane Garofalo", "Abbi Jacobson", "Ilana Glazer",
    "Richard Kind", "Rachel Dratch", "Missy Elliott", "Lena Waithe", "Kid Fury & Crissle",
    "Desus & Mero", "John Milhiser", "Joe Pera",
  ],
  contact: {
    email: "edmondhawkins@gmail.com",
    location: "Brooklyn, NY",
    // Formspree / Web3Forms endpoint. Drop a real ID here to make the form post in place.
    formEndpoint: "https://formspree.io/f/your-form-id",
  },
  socials: [
    { label: "YouTube", href: "https://www.youtube.com/results?search_query=edmond+hawkins+director" },
    { label: "Vimeo", href: "https://vimeo.com/edmondhawkins" },
    { label: "IMDb", href: "https://www.imdb.com/find/?q=Edmond%20Hawkins" },
    { label: "Instagram", href: "https://instagram.com/" },
  ],
} as const;

export type Site = typeof site;
