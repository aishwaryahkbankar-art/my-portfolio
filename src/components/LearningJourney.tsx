import { learningJourneyData } from '../data/portfolioData'
import { SectionHeading } from './SectionHeading'

export function LearningJourney() {
  return (
    <section id="journey" className="py-20 sm:py-28 border-b border-slate-200/70 bg-[#faf9f6]">
      <div className="container-editorial">
        <SectionHeading
          number="07"
          tag="Continuous Growth"
          title="The learning journey."
          subtitle="An honest roadmap of active study, engineering practice, and practical implementation without pretending mastery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningJourneyData.map((item, index) => (
            <div
              key={item.subject}
              className="rounded-xl border border-slate-200/90 bg-white p-6 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    STAGE 0{index + 1}
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                      item.status === 'Applied in Projects'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : item.status === 'Core Practice'
                        ? 'bg-purple-50 text-purple-800 border-purple-200'
                        : 'bg-blue-50 text-blue-800 border-blue-200'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  {item.subject}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.focusDescription}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Method: Build & Refactor</span>
                <span className="text-slate-400">Iterative</span>
              </div>
            </div>
          ))}
        </div>

        {/* Growth Philosophy Note */}
        <div className="mt-8 p-5 rounded-xl bg-purple-50/50 border border-purple-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span className="text-xs sm:text-sm text-purple-950 font-medium">
              "I learn by building, experiment with technology, and improve with every project."
            </span>
          </div>
          <span className="text-xs font-mono text-purple-800 shrink-0">
            Aishwarya's Approach
          </span>
        </div>
      </div>
    </section>
  )
}
