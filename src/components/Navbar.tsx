import { useState, useEffect } from 'react'
import { personalInfo, contactData } from '../data/portfolioData'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [resumeToast, setResumeToast] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const handleResumeClick = (e: React.MouseEvent) => {
    if (!contactData.resumeUrl) {
      e.preventDefault()
      setResumeToast(true)
      setTimeout(() => setResumeToast(false), 4500)
    }
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#faf9f6]/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="container-editorial flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-slate-900 font-semibold tracking-tight transition-colors hover:text-purple-700"
            aria-label={`${personalInfo.name} - Home`}
          >
            <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-mono text-sm flex items-center justify-center font-bold group-hover:bg-purple-700 transition-colors">
              A
            </span>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-tight text-slate-900 leading-tight">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono font-medium text-slate-500 leading-none mt-0.5 hidden xs:block">
                CSE Student
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-600 rounded-md hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="h-4 w-px bg-slate-200 mx-2" aria-hidden="true" />

            {/* Resume Button */}
            {contactData.resumeUrl ? (
              <a
                href={contactData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200/80 rounded-md transition-colors"
              >
                <span>Resume</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              <button
                type="button"
                onClick={handleResumeClick}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 rounded-md transition-colors cursor-pointer"
                title="Request Resume"
              >
                <span>Resume</span>
                <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={handleResumeClick}
              className="text-xs font-semibold px-2.5 py-1.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
            >
              Resume
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs transition-opacity"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Drawer Sheet */}
          <div className="relative w-full bg-[#faf9f6] border-b border-slate-200 shadow-xl px-6 pt-5 pb-8 flex flex-col z-10">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded bg-slate-900 text-white font-mono text-xs flex items-center justify-center font-bold">
                  A
                </span>
                <span className="font-bold text-slate-900">{personalInfo.name}</span>
              </div>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="p-2 text-slate-500 hover:text-slate-800 rounded-md"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-2 mt-4" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="px-3 py-2.5 text-base font-medium text-slate-700 hover:text-purple-700 hover:bg-slate-100/80 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                Get in Touch
              </a>
              <button
                type="button"
                onClick={(e) => {
                  closeMobileMenu()
                  handleResumeClick(e)
                }}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold rounded-md text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
              >
                Request Resume
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Resume Notification Toast */}
      {resumeToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 max-w-sm bg-white border border-slate-200 rounded-xl shadow-lg p-4 text-sm text-slate-800 animate-fade-in"
        >
          <div className="flex items-start gap-3">
            <span className="text-purple-600 mt-0.5">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <div className="flex-1">
              <p className="font-semibold text-slate-900">Resume on Request</p>
              <p className="text-slate-600 text-xs mt-1">
                To receive Aishwarya's updated curriculum vitae, reach out at{' '}
                <a href={`mailto:${contactData.email}`} className="text-purple-700 underline font-medium">
                  {contactData.email}
                </a>
              </p>
            </div>
            <button
              type="button"
              onClick={() => setResumeToast(false)}
              className="text-slate-400 hover:text-slate-600"
              aria-label="Dismiss toast"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
