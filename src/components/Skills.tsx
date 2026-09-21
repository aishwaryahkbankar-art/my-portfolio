import { skillsCategories } from '../data/portfolioData'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-slate-200/70 bg-[#faf9f6]">
      <div className="container-editorial">
        <SectionHeading
          number="03"
          tag="Competencies"
          title="Technical skills & focus areas."
          subtitle="Organized by functional domains and applied experience, prioritizing fundamental understanding and hands-on building."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-2xs hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {category.title}
                </h3>
                <span className="font-mono text-xs text-slate-500 font-semibold">
                  {category.skills.length} skills
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-normal">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-50 hover:bg-purple-50 hover:text-purple-900 hover:border-purple-200 border border-slate-200/80 text-slate-800 transition-colors cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600/70 mr-2" aria-hidden="true" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note on Skill Progression */}
        <div className="mt-8 p-4 rounded-xl bg-slate-100/70 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
          <span className="font-medium">
            Skills are continuously developed through hands-on lab experiments, project architectures, and coursework.
          </span>
          <span className="font-mono text-[11px] text-slate-500 hidden sm:inline">
            No Arbitrary Percentages
          </span>
        </div>
      </div>
    </section>
  )
}
