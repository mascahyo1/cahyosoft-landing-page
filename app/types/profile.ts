export interface Profile {
  company: {
    name: string
    shortName: string
    tagline: string
    description: string
    yearFounded: number
    yearsExperience: number
    totalClients: number
    totalProjects: number
  }
  contact: {
    whatsapp: string
    email: {
      general: string
      privacy: string
      legal: string
    }
  }
  socialMedia: {
    facebook: string
    instagram: string
    linkedin: string
    github: string
    twitter: string
  }
  address: {
    street: string
    city: string
    province: string
    country: string
  }
  copyright: {
    year: number
    text: string
  }
}
