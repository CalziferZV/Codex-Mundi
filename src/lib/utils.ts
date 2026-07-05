type ClassValue = string | boolean | undefined | null | Record<string, boolean>

export function cn(...classes: ClassValue[]): string {
  return classes
    .flatMap((c) => {
      if (!c) return []
      if (typeof c === 'object') {
        return Object.entries(c)
          .filter(([, v]) => v)
          .map(([k]) => k)
      }
      return [c]
    })
    .join(' ')
}

export function formatDate(date: string | Date, locale: string = 'es'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim()
}

export function truncate(text: string, length: number = 200): string {
  if (text.length <= length) return text
  return text.slice(0, length).trimEnd() + '...'
}
