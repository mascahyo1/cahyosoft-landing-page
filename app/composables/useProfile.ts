import type { Profile } from '~/types/profile'
import profileData from '../data/profile.json'

export function useProfile() {
  const profile = profileData as Profile

  function waLink(): string {
    const wa = profile.contact.whatsapp?.trim()
    return wa ? `https://wa.me/${wa.replace(/\D/g, '')}` : ''
  }

  function mailTo(type: 'general' | 'privacy' | 'legal'): string {
    const email = profile.contact.email[type]?.trim()
    return email ? `mailto:${email}` : ''
  }

  return {
    profile,
    waLink,
    mailTo,
  }
}
