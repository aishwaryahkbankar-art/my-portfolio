import { useState } from 'react'

export function IoTBiogasDiagram() {
  const [activeMetric, setActiveMetric] = useState<'realtime' | 'cumulative'>('realtime')

  return (
    <div className="rounded-xl border border-slate-200/90 bg-slate-900 text-slate-100 p-5 font-mono text-xs shadow-inner overflow-hidden select-none">
      {/* Telemetry Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-[11px]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300 font-semibold tracking-wide">ESP32 SENSOR TELEMETRY</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <span>Wi-Fi 802.11 b/g/n</span>
          <span className="text-slate-600">•</span>
          <span className="text-emerald-400 font-medium">ONLINE</span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
            Sensor Reading
          </span>
          <div className="text-lg font-bold text-white tracking-tight">642 <span className="text-xs font-normal text-slate-400">ppm</span></div>
          <span className="text-[9px] text-emerald-400 block mt-0.5">MQ-4 Nominal</span>
        </div>

        <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
            Trigger Events
          </span>
          <div className="text-lg font-bold text-white tracking-tight">142</div>
          <span className="text-[9px] text-slate-400 block mt-0.5">Cycles logged</span>
        </div>

        <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
            Vol / Trigger
          </span>
          <div className="text-lg font-bold text-white tracking-tight">0.85 <span className="text-xs font-normal text-slate-400">L</span></div>
          <span className="text-[9px] text-slate-400 block mt-0.5">Calibrated flow</span>
        </div>

        <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
            Total Yield
          </span>
          <div className="text-lg font-bold text-purple-300 tracking-tight">120.7 <span className="text-xs font-normal text-slate-400">L</span></div>
          <span className="text-[9px] text-purple-400 block mt-0.5">Aggregated vol</span>
        </div>
      </div>

      {/* SVG Reading Graph */}
      <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800">
        <div className="flex items-center justify-between mb-2 text-[10px] text-slate-400">
          <span className="uppercase tracking-wider">Collected Gas Output & Trigger History</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setActiveMetric('realtime')}
              className={`px-1.5 py-0.5 rounded cursor-pointer ${activeMetric === 'realtime' ? 'bg-purple-900/60 text-purple-200 border border-purple-700/50' : 'text-slate-500'}`}
            >
              PPM Wave
            </button>
            <button
              type="button"
              onClick={() => setActiveMetric('cumulative')}
              className={`px-1.5 py-0.5 rounded cursor-pointer ${activeMetric === 'cumulative' ? 'bg-purple-900/60 text-purple-200 border border-purple-700/50' : 'text-slate-500'}`}
            >
              Yield Rate
            </button>
          </div>
        </div>

        {/* Clean Vector SVG Chart */}
        <div className="w-full h-28 relative">
          <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
            {/* Grid lines */}
            <line x1="0" y1="25" x2="500" y2="25" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="0" y1="50" x2="500" y2="50" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="0" y1="75" x2="500" y2="75" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />
            
            {/* Area fill */}
            <path
              d={activeMetric === 'realtime'
                ? "M 0 80 Q 50 65, 100 45 T 200 60 T 300 30 T 400 50 T 500 20 L 500 100 L 0 100 Z"
                : "M 0 95 Q 100 80, 200 65 T 350 40 T 500 15 L 500 100 L 0 100 Z"
              }
              fill="url(#biogas-chart-grad)"
              opacity="0.25"
            />

            {/* Gradient definition */}
            <defs>
              <linearGradient id="biogas-chart-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Plot stroke */}
            <path
              d={activeMetric === 'realtime'
                ? "M 0 80 Q 50 65, 100 45 T 200 60 T 300 30 T 400 50 T 500 20"
                : "M 0 95 Q 100 80, 200 65 T 350 40 T 500 15"
              }
              fill="none"
              stroke="#c084fc"
              strokeWidth="2.5"
            />

            {/* Indicator dots */}
            <circle cx="100" cy={activeMetric === 'realtime' ? 45 : 70} r="3" fill="#38bdf8" />
            <circle cx="300" cy={activeMetric === 'realtime' ? 30 : 45} r="3" fill="#38bdf8" />
            <circle cx="500" cy={activeMetric === 'realtime' ? 20 : 15} r="4" fill="#a855f7" />
          </svg>
        </div>

        {/* Legend / Status */}
        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-900">
          <span>T - 60 min (Continuous Buffer)</span>
          <span className="text-slate-400">Trigger Threshold: &gt; 500 ppm • Status: OK</span>
          <span>Current Instant</span>
        </div>
      </div>

      <div className="mt-3 text-center text-[10px] text-slate-500">
        Conceptual Interface & Telemetry Flow Schematic
      </div>
    </div>
  )
}

export function SonicFireDiagram() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 text-xs text-slate-800 shadow-2xs">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 text-[11px] font-mono">
        <span className="font-semibold text-slate-900 uppercase tracking-wide">
          Acoustic Extinction Mechanism
        </span>
        <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200/80 font-medium">
          Deep-Tech Concept
        </span>
      </div>

      {/* Conceptual Acoustic Propagation Flow */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
          {/* Node 1 */}
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-mono text-[10px] font-bold inline-flex items-center justify-center mb-1.5">
              1
            </span>
            <h4 className="font-bold text-slate-900 text-xs">Sonic Wave Generation</h4>
            <p className="text-[11px] text-slate-600 mt-1 leading-normal">
              Low-frequency acoustic emitter (30–60 Hz swept tone) produces collimated pressure waves.
            </p>
          </div>

          {/* Node 2 */}
          <div className="p-3.5 rounded-lg bg-purple-50/60 border border-purple-200/80">
            <span className="w-5 h-5 rounded-full bg-purple-200 text-purple-800 font-mono text-[10px] font-bold inline-flex items-center justify-center mb-1.5">
              2
            </span>
            <h4 className="font-bold text-purple-950 text-xs">Boundary Disruption</h4>
            <p className="text-[11px] text-slate-600 mt-1 leading-normal">
              High acoustic particle velocity destabilizes the flame's boundary shear layer.
            </p>
          </div>

          {/* Node 3 */}
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-mono text-[10px] font-bold inline-flex items-center justify-center mb-1.5">
              3
            </span>
            <h4 className="font-bold text-slate-900 text-xs">Oxygen Starvation</h4>
            <p className="text-[11px] text-slate-600 mt-1 leading-normal">
              Continuous thinning separates fuel vapors from oxygen, extinguishing the flame with zero residue.
            </p>
          </div>
        </div>

        {/* Vector Schematic Illustration */}
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
          <svg className="w-full h-24" viewBox="0 0 400 90" fill="none">
            {/* Acoustic Source */}
            <rect x="15" y="25" width="40" height="40" rx="4" fill="#334155" />
            <polygon points="55,30 75,18 75,72 55,60" fill="#475569" />
            <text x="35" y="49" fill="#f8fafc" fontSize="9" fontFamily="monospace" textAnchor="middle">SND</text>

            {/* Acoustic Waves */}
            <path d="M 90 25 A 35 35 0 0 1 90 65" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
            <path d="M 115 18 A 50 50 0 0 1 115 72" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 140 12 A 65 65 0 0 1 140 78" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 165 8 A 80 80 0 0 1 165 82" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />

            {/* Pressure Zone Indicator */}
            <rect x="200" y="22" width="70" height="46" rx="4" fill="#ede9fe" stroke="#c4b5fd" strokeWidth="1" strokeDasharray="2 2" />
            <text x="235" y="42" fill="#5b21b6" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">VELOCITY</text>
            <text x="235" y="54" fill="#6d28d9" fontSize="8" fontFamily="monospace" textAnchor="middle">FIELD</text>

            {/* Flame Object */}
            <path
              d="M 320 68 C 300 68, 305 48, 320 20 C 335 48, 340 68, 320 68 Z"
              fill="#fb923c"
              opacity="0.8"
            />
            <path
              d="M 320 68 C 310 68, 312 55, 320 38 C 328 55, 330 68, 320 68 Z"
              fill="#facc15"
            />
            {/* Disruption lines on flame */}
            <line x1="285" y1="35" x2="315" y2="35" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2 2" />
            <line x1="285" y1="50" x2="310" y2="50" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2 2" />
            <text x="360" y="48" fill="#b91c1c" fontSize="8" fontFamily="monospace">Extinction</text>
          </svg>
        </div>
      </div>

      <div className="mt-3 text-center text-[10px] text-slate-500 font-mono">
        Physics Concept Model • Non-Destructive Fire Suppression Analysis
      </div>
    </div>
  )
}

export function LineEditorDiagram() {
  return (
    <div className="rounded-xl border border-slate-200/90 bg-slate-900 text-slate-100 p-5 font-mono text-xs shadow-2xs">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-[11px]">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50 text-[10px] font-bold">
            C
          </span>
          <span className="text-slate-300 font-semibold tracking-wide">
            BUFFER DATA STRUCTURE & LINE INDEX
          </span>
        </div>
        <span className="text-[10px] text-slate-400">stdio.h • dynamic alloc</span>
      </div>

      {/* Memory Line Buffer Representation */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-3 p-2 rounded bg-slate-800/80 border border-slate-700/70 text-[11px]">
          <span className="text-purple-400 font-bold shrink-0">[ptr 0x01]</span>
          <span className="text-slate-500 shrink-0">L1:</span>
          <span className="text-emerald-300 truncate">#include &lt;stdio.h&gt;</span>
          <span className="ml-auto text-[10px] text-slate-400">19 bytes</span>
        </div>

        <div className="flex items-center gap-3 p-2 rounded bg-slate-800/80 border border-slate-700/70 text-[11px]">
          <span className="text-purple-400 font-bold shrink-0">[ptr 0x02]</span>
          <span className="text-slate-500 shrink-0">L2:</span>
          <span className="text-emerald-300 truncate">int main(int argc, char **argv) &#123;</span>
          <span className="ml-auto text-[10px] text-slate-400">32 bytes</span>
        </div>

        <div className="flex items-center gap-3 p-2 rounded bg-purple-950/60 border border-purple-600/70 text-[11px]">
          <span className="text-purple-300 font-bold shrink-0">[ptr 0x03]</span>
          <span className="text-purple-300 shrink-0 font-bold">L3*</span>
          <span className="text-white truncate">char *buffer = malloc(sizeof(char) * 128);</span>
          <span className="ml-auto text-[10px] text-purple-300 font-semibold">Active Cursor</span>
        </div>

        <div className="flex items-center gap-3 p-2 rounded bg-slate-800/80 border border-slate-700/70 text-[11px]">
          <span className="text-purple-400 font-bold shrink-0">[ptr 0x04]</span>
          <span className="text-slate-500 shrink-0">L4:</span>
          <span className="text-emerald-300 truncate">return 0; &#125;</span>
          <span className="ml-auto text-[10px] text-slate-400">12 bytes</span>
        </div>
      </div>

      {/* Operation Status */}
      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800 text-[10px] text-center text-slate-400">
        <div>
          <span className="text-slate-300 font-bold block">:i [line]</span>
          <span>Indexed Insert</span>
        </div>
        <div>
          <span className="text-slate-300 font-bold block">:d [line]</span>
          <span>Node Deallocation</span>
        </div>
        <div>
          <span className="text-slate-300 font-bold block">:w [file]</span>
          <span>Stream Sync</span>
        </div>
      </div>

      <div className="mt-3 text-center text-[10px] text-slate-500 font-mono">
        Low-Level Dynamic Array Buffer Architecture
      </div>
    </div>
  )
}
