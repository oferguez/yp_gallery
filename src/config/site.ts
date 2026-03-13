export interface NavItem {
  label: string;
  href: string;
}

export const themeOptions = [
  { name: 'light-gallery', label: 'Light Gallery' },
  { name: 'dark-museum', label: 'Dark Museum' },
  { name: 'warm-editorial', label: 'Warm Editorial' },
  { name: 'stone-atelier', label: 'Stone Atelier' },
  { name: 'linen-paper', label: 'Linen Paper' },
  { name: 'nocturne-blue', label: 'Nocturne Blue' },
  { name: 'sage-matte', label: 'Sage Matte' },
  { name: 'ink-study', label: 'Ink Study' },
  { name: 'sun-faded', label: 'Sun Faded' },
  { name: 'chalk-room', label: 'Chalk Room' },
  { name: 'oxide-red', label: 'Oxide Red' },
  { name: 'mist-silver', label: 'Mist Silver' }
] as const;

export type ThemeName = (typeof themeOptions)[number]['name'];

export interface RoomConfig {
  id: string;
  name: string;
  theme: ThemeName;
  description: string;
  connectedTo: string[];
}

export const rooms: RoomConfig[] = [
  {
    id: 'foyer',
    name: 'Foyer',
    theme: 'light-gallery',
    description: 'A quiet entry room for introductory works and measured tonal studies.',
    connectedTo: ['north-light', 'paper-archive']
  },
  {
    id: 'north-light',
    name: 'North Light Hall',
    theme: 'mist-silver',
    description: 'High-key paintings with cooler transitions and lifted atmosphere.',
    connectedTo: ['foyer', 'mineral-room', 'river-gallery']
  },
  {
    id: 'paper-archive',
    name: 'Paper Archive',
    theme: 'linen-paper',
    description: 'Smaller-format works with dry edges, erased marks, and matte surfaces.',
    connectedTo: ['foyer', 'ember-wing']
  },
  {
    id: 'mineral-room',
    name: 'Mineral Room',
    theme: 'stone-atelier',
    description: 'Dense pigment passages and compressed mid-tones with heavier surface texture.',
    connectedTo: ['north-light', 'ember-wing']
  },
  {
    id: 'river-gallery',
    name: 'River Gallery',
    theme: 'sage-matte',
    description: 'Longer horizontal works where space opens and closes around low horizon lines.',
    connectedTo: ['north-light', 'ember-wing']
  },
  {
    id: 'ember-wing',
    name: 'Ember Wing',
    theme: 'oxide-red',
    description: 'Darker paintings with warmer accents, evening tonal range, and close value intervals.',
    connectedTo: ['paper-archive', 'mineral-room', 'river-gallery']
  }
];

export const siteConfig = {
  artistName: 'Leora Finch',
  artistTagline: 'Contemporary painter exploring light, stillness, and material memory.',
  defaultTheme: 'warm-editorial' as ThemeName,
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'Browse', href: '/browse' },
    { label: 'Paintings', href: '/paintings' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ] satisfies NavItem[],
  homeIntro:
    'Leora Finch makes paintings that sit between landscape and interior space. Her work uses layered oil and wax to build slow transitions of color, surface haze, and quiet depth.',
  aboutIntro:
    'Working from a studio in Bristol, Finch develops each series through long sessions of looking, revision, and restraint. The paintings are built to hold attention over time rather than announce themselves immediately.'
};
