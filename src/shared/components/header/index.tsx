import { useLocation } from 'preact-iso'

import './style.scss'

export function Header() {
  const { url } = useLocation()

  return (
    <header>
      <nav class='navbar'>
        <div class='container-fluid'>
          <a
            href='/midjourney-image-previewer/midjourney'
            class={url == '/' && 'active'}
          >
            Midjourney
          </a>
        </div>
      </nav>
    </header>
  )
}
