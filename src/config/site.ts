export type ThemeName = 'light-gallery' | 'dark-museum' | 'warm-editorial';

export interface NavItem {
  label: string;
  href: string;
}

export const siteConfig = {
  artistName: 'Leora Finch',
  artistTagline: 'Contemporary painter exploring light, stillness, and material memory.',
  defaultTheme: 'light-gallery' as ThemeName,
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'Paintings', href: '/paintings' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ] satisfies NavItem[],
  homeIntro:
    'Leora Finch makes paintings that sit between landscape and interior space. Her work uses layered oil and wax to build slow transitions of color, surface haze, and quiet depth.',
  aboutIntro:
    'Working from a studio in Bristol, Finch develops each series through long sessions of looking, revision, and restraint. The paintings are built to hold attention over time rather than announce themselves immediately.'
};

export const themeOptions: { name: ThemeName; label: string }[] = [
  { name: 'light-gallery', label: 'Light Gallery' },
  { name: 'dark-museum', label: 'Dark Museum' },
  { name: 'warm-editorial', label: 'Warm Editorial' }
];
