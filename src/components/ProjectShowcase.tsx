import { projectsData } from '../data/portfolioData'
import { SectionHeading } from './SectionHeading'
import { IoTBiogasDiagram, SonicFireDiagram, LineEditorDiagram } from './ProjectDiagrams'

export function ProjectShowcase() {
  const primaryProject = projectsData.find((p) => p.isPrimary) || projectsData[0]
  const secondaryProjects = projectsData.filter((p) => !p.isPrimary)

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-slate-200/70 bg-[#faf9f6]">
      <div className="container-editorial">
        <SectionHeading
          number="02"
          tag="Selected Work"
          title="Engineered solutions, practical systems."
          subtitle="A curated selection of technical projects ranging from embedded IoT telemetry to deep-tech conceptual studies and systems programming in C."
        />

        {/* PRIMARY FEATURED PROJECT: LARGE EDITORIAL CARD */}
        <div className="mb-14 lg:mb-18">
          <div className="rounded-2xl border border-slate-300/80 bg-white p-6 sm:p-8 lg:p-10 shadow-xs hover:border-slate-400/80 transition-all duration-300">
            {/* Header / Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded border border-purple-200/60">
                  PROJECT {primaryProject.number}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {primaryProject.category}
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {primaryProject.statusTag}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Project Narrative & Engineering Details */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                    {primaryProject.title}
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    {primaryProject.description}
                  </p>
                </div>

                {/* Problem & Solution Breakdown */}
                <div className="space-y-4 text-sm">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                      Problem Context
                    </span>
                    <p className="text-slate-700 leading-normal">
                      {primaryProject.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-200/60">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-purple-900 font-bold block mb-1">
                      Implementation Strategy
                    </span>
                    <p className="text-slate-800 leading-normal">
                      {primaryProject.whatWasBuilt}
                    </p>
                  </div>
                </div>

                {/* Architecture Pipeline */}
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-2.5">
                    System Architecture Flow
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
                    {primaryProject.architectureSteps.map((step, idx) => (
                      <div key={step} className="flex items-center gap-1.5">
                        <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-800 font-medium">
                          {step}
                        </span>
                        {idx < primaryProject.architectureSteps.length - 1 && (
                          <span className="text-slate-400 font-bold">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies List */}
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                    Technologies & Modules
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {primaryProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100/90 text-slate-700 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Highlights */}
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-2.5">
                    Engineering Highlights
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    {primaryProject.technicalHighlights.map((hl) => (
                      <li key={hl} className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-0.5">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Honest Project Status Bar */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Hardware & Firmware Project</span>
                  <span className="text-slate-600 font-medium bg-slate-100 px-2 py-0.5 rounded">
                    Code / Demo on Request
                  </span>
                </div>
              </div>

              {/* Right Column: Visual Telemetry Diagram */}
              <div className="lg:col-span-6 lg:sticky lg:top-24">
                <div className="mb-2 text-xs font-mono text-slate-500 font-medium">
                  ARCHITECTURAL TELEMETRY MOCKUP
                </div>
                <IoTBiogasDiagram />
                <p className="mt-3 text-xs text-slate-500 italic leading-relaxed">
                  Restrained architectural representation showing continuous MQ-4 gas telemetry, volume measurement, and automated alert logging on the ESP32 node.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECONDARY PROJECTS: BALANCED ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-300/80 bg-white p-6 sm:p-8 shadow-xs hover:border-slate-400/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200/60">
                      PROJECT {project.number}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      {project.category}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                      project.statusTag === 'Deep-Tech Concept'
                        ? 'bg-amber-50 text-amber-900 border-amber-200'
                        : 'bg-blue-50 text-blue-900 border-blue-200'
                    }`}
                  >
                    {project.statusTag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Diagram Visual */}
                <div className="mb-6">
                  {project.diagramType === 'sonic-fire' && <SonicFireDiagram />}
                  {project.diagramType === 'line-editor' && <LineEditorDiagram />}
                </div>

                {/* Problem Statement */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 mb-4 text-xs">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                    Problem Solved
                  </span>
                  <p className="text-slate-700 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* What Was Built */}
                <div className="p-4 rounded-xl bg-purple-50/40 border border-purple-200/50 mb-5 text-xs">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-purple-900 font-bold block mb-1">
                    What Was Built
                  </span>
                  <p className="text-slate-800 leading-relaxed">
                    {project.whatWasBuilt}
                  </p>
                </div>

                {/* Technical Highlights */}
                <div className="mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                    Key Highlights
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {project.technicalHighlights.map((hl) => (
                      <li key={hl} className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-0.5">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Footer */}
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-medium rounded bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{project.statusTag === 'Deep-Tech Concept' ? 'Feasibility Study & Strategy' : 'C Systems Code'}</span>
                  <span className="text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    Verified Work
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
