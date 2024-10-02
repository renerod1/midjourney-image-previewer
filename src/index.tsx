import {
  ErrorBoundary,
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from 'preact-iso'

import { Footer } from './components/footer'
import { Header } from './components/header'
import { Home } from './pages/Home/index'
import { Layout } from 'antd'
import { Midjourney } from './components/midjourney'
import { NotFound } from './pages/_404'

import './style.scss'

export function App() {
  return (
    <LocationProvider>
      <Layout>
        <Header />
        <Layout>
          <Layout.Content>
            <ErrorBoundary>
              <Router>
                <Route path='/midjourney-image-previewer/' component={Home} />
                <Route
                  path='/midjourney-image-previewer/midjourney'
                  component={Midjourney}
                />
                <Route default component={NotFound} />
              </Router>
            </ErrorBoundary>
          </Layout.Content>
        </Layout>
        <Footer />
      </Layout>
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
