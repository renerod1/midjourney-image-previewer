import { useLocation } from 'preact-iso'

import './style.scss'

export function Footer() {
  const { url } = useLocation()

  return (
    <footer>
      <nav>
        <a href='/midjourney-image-previewer/' class={url == '/' && 'active'}>
          Home
        </a>
        <a
          href='/midjourney-image-previewer/404'
          class={url == '/404' && 'active'}
        >
          404
        </a>
      </nav>
    </footer>
  )
}
