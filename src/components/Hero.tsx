import { personalInfo, contactData } from '../data/portfolioData'

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-36 lg:pb-24 border-b border-slate-200/70 bg-gradient-to-b from-[#faf9f6] via-[#faf9f6] to-slate-50/50">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Introduction */}
          <div className="lg:col-span-7">
            {/* Status Pill - Refined and non-repetitive */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-slate-900/[0.04] border border-slate-300/60 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span className="text-xs font-semibold text-slate-700 tracking-wide">
                CSE Student · Software · IoT · Data
              </span>
            </div>

            {/* Primary Name Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-3">
              {personalInfo.name}
            </h1>

            {/* Professional Title & Tagline */}
            <div className="mb-6">
              <p className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
                {personalInfo.professionalTitle}
              </p>
              <p className="text-sm sm:text-base font-medium text-slate-600 mt-0.5">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Supporting Narrative - Natural & Human */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8 max-w-xl font-normal">
              {personalInfo.bio}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-xs hover:shadow group"
              >
                <span>Explore Projects</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300/80 transition-colors shadow-2xs"
              >
                <span>Get in Touch</span>
                <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              {contactData.githubUrl && (
                <a
                  href={contactData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span className="font-mono text-xs">{contactData.githubUsername}</span>
                </a>
              )}
            </div>

            {/* Authentic Currently Exploring Strip */}
            <div className="pt-6 border-t border-slate-200/80">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2.5 font-medium">
                CURRENTLY EXPLORING
              </p>
              <div className="flex flex-wrap gap-2">
                {personalInfo.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-md bg-white border border-slate-200/80 text-slate-800 shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600/80 mr-1.5" aria-hidden="true" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Restrained Editorial Project Schematic (IoT Biogas System) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs relative">
              {/* Card Label */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 text-[11px] font-mono">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200/60">
                    PROJECT 01
                  </span>
                  <span className="text-slate-600 font-semibold uppercase tracking-wider">
                    IoT Telemetry Schematic
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-emerald-700 font-medium text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  ESP32 Active
                </span>
              </div>

              {/* Title & Context */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  Biogas Monitoring System
                </h3>
                <p className="text-xs text-slate-600 mt-0.5 leading-normal">
                  ESP32 telemetry node logging gas concentration, flow triggers, and web dashboard alerts.
                </p>
              </div>

              {/* Architectural Signal Flow */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 mb-4 font-mono text-[11px]">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5 font-bold">
                  Telemetry Flow
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="px-1.5 py-0.5 bg-white rounded border border-slate-200">MQ-4 Sensor</span>
                  <span className="text-slate-400">→</span>
                  <span className="px-1.5 py-0.5 bg-purple-50 text-purple-900 rounded border border-purple-200/60 font-medium">ESP32</span>
                  <span className="text-slate-400">→</span>
                  <span className="px-1.5 py-0.5 bg-white rounded border border-slate-200">Wi-Fi</span>
                  <span className="text-slate-400">→</span>
                  <span className="px-1.5 py-0.5 bg-white rounded border border-slate-200">Dashboard</span>
                </div>
              </div>

              {/* Metric Readouts Mockup */}
              <div className="grid grid-cols-3 gap-2 mb-4 font-mono text-center">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 block">Gas Level</span>
                  <span className="text-sm font-bold text-slate-900">642 <span className="text-[10px] font-normal text-slate-500">ppm</span></span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 block">Triggers</span>
                  <span className="text-sm font-bold text-slate-900">142</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 block">Vol / Trig</span>
                  <span className="text-sm font-bold text-purple-700">0.85 <span className="text-[10px] font-normal text-slate-500">L</span></span>
                </div>
              </div>

              {/* Restrained Vector Wave Sparkline */}
              <div className="p-3 rounded-lg bg-slate-900 text-slate-200 mb-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5">
                  <span>TELEMETRY STREAM</span>
                  <span className="text-emerald-400">Threshold: OK</span>
                </div>
                <svg className="w-full h-12" viewBox="0 0 300 48" fill="none">
                  <path
                    d="M 0 36 Q 30 30, 60 20 T 120 28 T 180 14 T 240 22 T 300 10"
                    stroke="#c084fc"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="60" cy="20" r="3" fill="#38bdf8" />
                  <circle cx="180" cy="14" r="3" fill="#38bdf8" />
                  <circle cx="300" cy="10" r="3.5" fill="#a855f7" />
                </svg>
              </div>

              {/* Explanatory Footer & Link */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                <span className="text-[11px] italic">
                  Schematic representation
                </span>
                <a
                  href="#projects"
                  className="font-semibold text-purple-700 hover:text-purple-900 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Explore Project</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
