import { getNestedValue } from '@/lib/i18n/dictionary'
import type { Dictionary } from '@/lib/i18n/dictionary'

export const realityColors: Record<string, string> = {
  historical: '#1e3a5f',
  scientific: '#1b5e1b',
  hypothesis: '#7a621a',
  theoretical: '#4a1a6a',
  mythological: '#6a1a3a',
  speculative: '#7a4a1a',
  conspiratorial: '#6a1a1a',
  fiction: '#3a1a5a',
  philosophical: '#1a4a4a',
  unclassified: '#4a4a4a',
}

interface Props {
  status: string
  dict: Dictionary
}

export default function RealityTag({ status, dict }: Props) {
  const color = realityColors[status] || realityColors.unclassified
  return (
    <span
      className="cm-tag"
      style={{ backgroundColor: color, color: '#fff', borderColor: color }}
    >
      {getNestedValue(dict, `reality.${status}`)}
    </span>
  )
}
