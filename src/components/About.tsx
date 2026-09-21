import { personalInfo } from '../data/portfolioData'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-slate-200/70 bg-[#faf9f6]">
      <div className="container-editorial">
        <SectionHeading
          number="01"
          tag="About Aishwarya"
          title="Curious mind, builder's mindset."
          subtitle="Combining engineering principles with practical code, hardware interfacing, and continuous experimentation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              I am a Computer Science Engineering student focused on software development, IoT systems, data science, and emerging technologies. Rather than treating computer science purely as theoretical coursework, I learn best by getting my hands dirty—prototyping circuits, writing low-level code, and building applications that address realistic constraints.
            </p>

            <p>
              My technical path is guided by a simple philosophy:
            </p>

            {/* Philosophy Callout Card */}
            <div className="p-6 rounded-xl bg-purple-50/70 border-l-4 border-purple-600 shadow-2xs my-6">
              <blockquote className="text-lg sm:text-xl font-medium text-slate-900 italic">
                "{personalInfo.philosophy}"
              </blockquote>
              <div className="mt-3 text-xs font-mono font-semibold uppercase tracking-wider text-purple-800">
                Personal Engineering Principle
              </div>
            </div>

            <p>
              Whether it is configuring an ESP32 microcontroller to monitor biogas levels, formulating an acoustic suppression study for deep-tech fire safety, or implementing memory-efficient line structures in C, I believe each project sharpens my technical rigor, architectural thinking, and resilience when encountering novel bugs.
            </p>
          </div>

          {/* Sidebar / Trait Cards & Pillars */}
          <div className="lg:col-span-5 space-y-5">
            {/* Personality Pillars */}
            <div className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-4">
                Working Style & Values
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-md bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0 font-mono font-bold text-xs">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Curious by Nature</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-normal">
                      Constantly asking how systems operate beneath high-level abstractions—from hardware registers to web protocols.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-md bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0 font-mono font-bold text-xs">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Hardworking & Persistent</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-normal">
                      Committed to seeing projects through debugging cycles, rigorous testing, and iterative refinements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-md bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0 font-mono font-bold text-xs">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Creative Problem Solving</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-normal">
                      Connecting cross-disciplinary concepts (like acoustics and fire safety, or embedded sensors and web dashboards) to create novel solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Snapshot Card */}
            <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-200 text-xs text-slate-600">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-slate-500 uppercase font-semibold">Academic Path</span>
                <span className="px-2 py-0.5 rounded bg-slate-200/70 text-slate-800 font-mono">B.Tech</span>
              </div>
              <p className="text-slate-700 font-medium">
                Undergraduate in Computer Science & Engineering. Looking ahead toward software engineering internships and collaborative technical opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
