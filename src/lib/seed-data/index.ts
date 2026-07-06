import { newCategories as catNew } from './categories'
import { domain9Entries } from './entries-domain9'
import { domain10Entries } from './entries-domain10'
import { domain11Entries, domain12Entries } from './entries-domains11-12'
import { entries200Pt1 } from './entries-200-pt1'
import { entries200Pt2 } from './entries-200-pt2'
import { entries200Pt3 } from './entries-200-pt3'
import { entries200Pt4 } from './entries-200-pt4'
import { subsectionsPart1 } from './subsections-1'
import { subsectionsPart2 } from './subsections-2'
import { subsectionsPart3 } from './subsections-3'

export const newCategories = catNew
export const newEntries = [
  ...domain9Entries,
  ...domain10Entries,
  ...domain11Entries,
  ...domain12Entries,
  ...entries200Pt1,
  ...entries200Pt2,
  ...entries200Pt3,
  ...entries200Pt4,
]
export const newSubsections = [
  ...subsectionsPart1,
  ...subsectionsPart2,
  ...subsectionsPart3,
]
