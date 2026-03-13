const rawBase = import.meta.env.BASE_URL || '/';
const normalizedBase = rawBase === '/' ? '' : rawBase.replace(/\/$/, '');

export function withBase(path: string) {
  if (/^(https?:)?\/\//.test(path)) return path;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  if (!normalizedBase) return normalizedPath;
  return normalizedPath === '/' ? `${normalizedBase}/` : `${normalizedBase}${normalizedPath}`;
}

export function stripBase(pathname: string) {
  if (!normalizedBase) return pathname;
  if (pathname === normalizedBase || pathname === `${normalizedBase}/`) return '/';
  if (pathname.startsWith(`${normalizedBase}/`)) return pathname.slice(normalizedBase.length);
  return pathname;
}
