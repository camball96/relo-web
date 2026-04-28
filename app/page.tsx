import {Hero} from './components/marketing/hero'
import {Features} from './components/marketing/features'
import {About} from './components/marketing/about'
import {Contact} from './components/marketing/contact'
import {Footer} from './components/layout/footer'
import {Nav} from './components/layout/nav'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <About />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  )
}
