import AnnouncementBar from './components/AnnouncementBar'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import Ticker          from './components/Ticker'
import Logos           from './components/Logos'
import Features        from './components/Features'
import Solutions       from './components/Solutions'
import Partners        from './components/Partners'
import Testimonials    from './components/Testimonials'
import Pricing         from './components/Pricing'
import Resources       from './components/Resources'
import Footer          from './components/Footer'

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Logos />
        <Features />
        <Solutions />
        <Partners />
        <Testimonials />
        <Pricing />
        <Resources />
      </main>
      <Footer />
    </>
  )
}
