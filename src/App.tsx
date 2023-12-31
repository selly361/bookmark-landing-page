import { Header, Hero, Features, Extensions } from 'Components'
import { FeaturesProvider } from 'Contexts'
import { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <Header />
      <a href="#features" className="skip-to-content-link">Skip to content</a>
      <main className='main'>
        <Hero />
        <FeaturesProvider>
          <Features />
        </FeaturesProvider>
        <Extensions />
      </main>
    </Fragment>
  )
}

export default App
