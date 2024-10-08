import {
  ErrorBoundary,
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from 'preact-iso'

import { Footer } from './shared/components/footer'
import { Header } from './shared/components/header'
import { Midjourney } from './midjourney/pages'
import { NotFound } from './pages/_404'

import './style.scss'

export function App() {
  return (
    <LocationProvider>
      <Header />
      <main>
        <ErrorBoundary>
          <Router>
            <Route path='/midjourney-image-previewer' component={Midjourney} />
            <Route
              path='/midjourney-image-previewer/midjourney'
              component={Midjourney}
            />
            <Route default component={NotFound} />
          </Router>
        </ErrorBoundary>
      </main>
      <Footer />
    </LocationProvider>
  )
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'))
}

export async function prerender(data) {
  const { html, links } = await ssr(<App {...data} />)

  return {
    html,
    links,
    head: {
      title: globalThis.title,
      elements: new Set([
        {
          type: 'meta',
          props: { property: 'og:title', content: globalThis.title },
        },
      ]),
    },
  }
}
