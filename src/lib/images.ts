/** Resolve a JSON image filename to a public URL under /images. */
export function getImage(filename: string): string {
  const name = filename.split('/').pop() ?? filename;
  return `/images/${name}`;
}

export function getPlaceholder(): string {
  return '/images/project-placeholder.svg';
}
