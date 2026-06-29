// Global site/profile data for Edmond Hawkins — Writer · Director · Animator
export const site = {
  name: "Edmond Hawkins",
  roles: ["Writer", "Director", "Animator"],
  // Short, punchy positioning line for the hero.
  tagline: "Brooklyn-based comedy director who builds the joke, shoots the joke, and does the VFX on the joke.",
  // Longer bio, lifted and lightly tightened from the original site.
  bio: [
    "Edmond Hawkins is a Brooklyn-based comedy writer and director with a deep background in animation and visual effects.",
    "He was Studio & Segment Director on both seasons of HBO's Wyatt Cenac's Problem Areas, a Segment Director on Netflix's Patriot Act with Hasan Minhaj, and spent four years as Animation Director / Head of Graphics on Late Night with Jimmy Fallon.",
    "Along the way he's created and directed his own shows, cut music videos for Will Butler and Grooms, and built more than a few robots, monsters and one very memorable Yule Log out of cardboard and pixels.",
  ],
  // Marquee of networks/outlets his work has lived on.
  networks: ["NETFLIX", "HBO", "NBC", "truTV", "FUSE", "MNN"],
  // Notable on-screen collaborators, surfaced as a credibility strip.
  collaborators: [
    "Hasan Minhaj", "Wyatt Cenac", "Jimmy Fallon", "Pedro Pascal", "Natasha Lyonne",
    "Will Butler", "James Franco", "Nick Offerman", "Janeane Garofalo", "Abbi Jacobson",
    "Ilana Glazer", "Richard Kind", "Rachel Dratch", "Missy Elliott", "Lena Waithe",
    "Kid Fury & Crissle", "Desus & Mero", "Chris Gethard", "John Milhiser", "Joe Pera",
  ],
  contact: {
    // TODO: confirm with Edmond — placeholder until real address/handles are supplied.
    email: "hello@edmondhawkins.com",
    location: "Brooklyn, NY",
    // Formspree (or Web3Forms) endpoint — drop a real ID here to make the form send.
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
