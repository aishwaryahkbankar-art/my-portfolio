import { technicalInterests } from '../data/portfolioData'
import { SectionHeading } from './SectionHeading'

export function Interests() {
  return (
    <section id="interests" className="py-20 sm:py-28 border-b border-slate-200/70 bg-[#faf9f6]">
      <div className="container-editorial">
        <SectionHeading
          number="06"
          tag="Curiosity & Focus"
          title="Technical interests & explorations."
          subtitle="Grounded areas of inquiry where software interfaces with hardware, data, and next-generation engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalInterests.map((interest) => (
            <div
              key={interest.title}
              className="rounded-xl border border-slate-200/90 bg-white p-6 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200/60">
                    {interest.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-2">
                  {interest.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {interest.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Active Inquiry</span>
                <span className="text-purple-600 font-bold">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
