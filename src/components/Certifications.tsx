import { useState } from 'react'
import { certificationsData } from '../data/portfolioData'
import { SectionHeading } from './SectionHeading'

export function Certifications() {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasCertifications = certificationsData.length > 0

  return (
    <section id="certifications" className="py-20 sm:py-28 border-b border-slate-200/70 bg-[#faf9f6]">
      <div className="container-editorial">
        <SectionHeading
          number="05"
          tag="Credentials & Milestones"
          title="Certifications & achievements."
          subtitle="A structured record of verified course completions, technical certificates, and academic recognitions."
        />

        <div className="max-w-3xl">
          {hasCertifications ? (
            <div className="space-y-4">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {cert.issuer} {cert.date && `• ${cert.date}`}
                    </p>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-purple-700 hover:text-purple-900 underline"
                    >
                      Verify Credential
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* Clean Authentic In-Progress State */
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200/70 flex items-center justify-center text-purple-700 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-bold text-slate-900 tracking-tight">
                    Continuous Certification & Coursework Verification
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Formal credentials and verified course milestones will be linked here as official certifications are completed. Currently prioritizing core coursework and practical lab implementations.
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <span className="font-mono text-slate-500">
                      Standard Policy: Zero Unverified Claims
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="font-medium text-purple-700 hover:text-purple-900 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Criteria' : 'View Verification Criteria'}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="mt-4 p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-600 space-y-1.5">
                      <p className="font-semibold text-slate-800">
                        Planned verification categories:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-slate-600">
                        <li>Microcontroller & Embedded Systems Certifications</li>
                        <li>Data Science & Python Algorithmic Assessments</li>
                        <li>Full-Stack & Web Engineering Practical Coursework</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
