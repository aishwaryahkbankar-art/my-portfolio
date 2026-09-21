import { personalInfo, contactData } from '../data/portfolioData'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 border-t border-slate-200/80 bg-white">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-slate-900 text-white font-mono text-xs flex items-center justify-center font-bold">
                A
              </span>
              <span className="font-bold text-slate-900 text-sm tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {personalInfo.professionalTitle}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
            {contactData.githubUrl && (
              <a
                href={contactData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-700 transition-colors"
              >
                GitHub
              </a>
            )}
            {contactData.linkedinUrl && (
              <a
                href={contactData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-700 transition-colors"
              >
                LinkedIn
              </a>
            )}
            {contactData.instagramUrl && (
              <a
                href={contactData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-700 transition-colors"
              >
                Instagram
              </a>
            )}
            <a
              href={`mailto:${contactData.email}`}
              className="hover:text-purple-700 transition-colors"
            >
              Email
            </a>
          </div>

          {/* Copyright & Top Scroll */}
          <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
            <span>© {currentYear} {personalInfo.name}</span>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-slate-900 transition-colors cursor-pointer inline-flex items-center gap-1"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
