import type { Locale } from './config'
import esDict from '@/messages/es.json'
import enDict from '@/messages/en.json'

type Dictionary = {
  [key: string]: string | { [key: string]: string | Dictionary }
}

const dictionaries: Record<Locale, Dictionary> = {
  es: esDict as Dictionary,
  en: enDict as Dictionary,
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

export function getNestedValue(obj: Dictionary, path: string): string {
  return path.split('.').reduce((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Dictionary)[key]
    }
    return path
  }, obj as unknown) as string
}
