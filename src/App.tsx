import { Hero001VideoWalk } from './experiments/heroes/Hero001VideoWalk/Hero001VideoWalk'
import { Section002WhatIBuild } from './experiments/sections/Section002WhatIBuild/Section002WhatIBuild'
import { Section003About } from './experiments/sections/Section003About/Section003About'
import { SiteFooter } from './components/SiteFooter/SiteFooter'

function App() {
  return (
    <>
      <main>
        <Hero001VideoWalk />
        <Section002WhatIBuild />
        <Section003About />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
