import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { ProjectShowcase } from './components/ProjectShowcase'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Certifications } from './components/Certifications'
import { Interests } from './components/Interests'
import { LearningJourney } from './components/LearningJourney'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] text-[#0f172a]">
      {/* Intelligently Positioned Subtle Navigation */}
      <Navbar />

      {/* Main Portfolio Content */}
      <main id="main-content" className="flex-1">
        {/* Section 1: Editorial Hero */}
        <Hero />

        {/* Section 2: Authentic About & Personal Philosophy */}
        <About />

        {/* Section 3: Visual Centerpiece - Selected Work & Architectural Schematics */}
        <ProjectShowcase />

        {/* Section 4: Categorized Technical Skills (No arbitrary percentages) */}
        <Skills />

        {/* Section 5: Undergraduate Engineering Education */}
        <Education />

        {/* Section 6: Verified Credentials & Milestones */}
        <Certifications />

        {/* Section 7: Grounded Technical Interests */}
        <Interests />

        {/* Section 8: Active Learning Journey Progression */}
        <LearningJourney />

        {/* Section 9: Direct Contact Channels & Accessible Form */}
        <Contact />
      </main>

      {/* Section 10: Clean Minimal Footer */}
      <Footer />
    </div>
  )
}

export default App
