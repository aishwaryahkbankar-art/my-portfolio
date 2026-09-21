export interface Project {
  id: string
  number: string
  title: string
  category: string
  badgeText?: string
  statusTag: 'Implemented Prototype' | 'Deep-Tech Concept' | 'Systems Programming'
  description: string
  problem: string
  whatWasBuilt: string
  architectureSteps: string[]
  technologies: string[]
  technicalHighlights: string[]
  links: {
    github?: string | null
    liveDemo?: string | null
    caseStudy?: string | null
  }
  isPrimary?: boolean
  diagramType: 'iot-biogas' | 'sonic-fire' | 'line-editor'
}

export interface SkillCategory {
  title: string
  description: string
  skills: string[]
}

export interface EducationItem {
  degree: string
  field: string
  status: string
  institution?: string
  graduationYear?: string
  notes?: string
}

export interface CertificationItem {
  id: string
  title: string
  issuer?: string
  date?: string
  credentialUrl?: string
  status?: string
}

export interface LearningItem {
  subject: string
  category: string
  status: 'Active Learning' | 'Core Practice' | 'Applied in Projects'
  focusDescription: string
}

export interface ContactInfo {
  email: string
  githubUsername: string
  githubUrl?: string | null
  linkedinName: string
  linkedinUrl?: string | null
  instagramHandle: string
  instagramUrl?: string | null
  resumeUrl?: string | null
}
