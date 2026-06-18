import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HeroSection from './sections/HeroSection.jsx'
import SkillsSection from './sections/SkillsSection.jsx'
import ProjectsSection from './sections/ProjectsSection.jsx'
import ServicesSection from './sections/ServicesSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'

export default function App() {
  return (
    <div className="min-h-dvh bg-slate-900 text-slate-200">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/25 to-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-[-240px] right-[-240px] h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <Navbar />

      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
        <ExperienceSection />
      </main>

      <Footer />
    </div>
  )
}
