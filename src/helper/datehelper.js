import { format, parseISO } from 'date-fns'

export function formatISO(isoString, formatString) {
  if (!isoString) {
    return null
  }
  return format(parseISO(isoString), formatString)
}
