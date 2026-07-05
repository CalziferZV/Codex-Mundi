import type { Locale } from './config'

type Dictionary = {
  [key: string]: string | { [key: string]: string | Dictionary }
}

const dictionaries = {
  es: () => import('@/messages/es.json').then((m) => m.default as Dictionary),
  en: () => import('@/messages/en.json').then((m) => m.default as Dictionary),
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]()
}

export function getNestedValue(obj: Dictionary, path: string): string {
  return path.split('.').reduce((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Dictionary)[key]
    }
    return path
  }, obj as unknown) as string
}
