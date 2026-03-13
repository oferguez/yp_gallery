const DEFAULT_WIDTHS = [520, 760, 980, 1280, 1600];

function withParams(src: string, width: number) {
  const url = new URL(src);
  url.searchParams.set('auto', 'format');
  url.searchParams.set('fit', 'max');
  url.searchParams.set('q', '82');
  url.searchParams.set('w', String(width));
  return url.toString();
}

export function unsplashSrc(src: string, width = 1400) {
  return withParams(src, width);
}

export function unsplashSrcSet(src: string, widths = DEFAULT_WIDTHS) {
  return widths.map((width) => `${withParams(src, width)} ${width}w`).join(', ');
}
