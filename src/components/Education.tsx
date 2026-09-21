import { educationData } from '../data/portfolioData'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 border-b border-slate-200/70 bg-[#faf9f6]">
      <div className="container-editorial">
        <SectionHeading
          number="04"
          tag="Academic Background"
          title="Education & engineering studies."
          subtitle="Undergraduate engineering curriculum emphasizing core computer science fundamentals, algorithm design, and applied systems."
        />

        <div className="max-w-3xl">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-2xs hover:border-slate-300 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-purple-700 font-semibold block mb-1">
                    Undergraduate Degree
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 mt-0.5">
                    {edu.field}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-800 border border-purple-200/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2" />
                    {edu.status}
                  </span>
                </div>
              </div>

              {edu.notes && (
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-4">
                  {edu.notes}
                </p>
              )}

              {/* Verified academic foundational pillars */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-3">
                  Academic Focus & Foundations
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Data Structures & Algorithms</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Object-Oriented Programming & Systems</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Database Management & Architecture</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Operating Systems & Microcontroller Lab</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
