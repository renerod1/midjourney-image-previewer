import { useLocation } from 'preact-iso'

import './style.scss'

export function Footer() {
  const { url } = useLocation()

  return (
    <footer>
      <nav class='navbar'>
        <div class='container-fluid'>
          <span class='navbar-text'>
            Midjourney Image Previewer ©2024 - {new Date().getFullYear()}{' '}
            Created by René Rodriguez
          </span>
        </div>
      </nav>
    </footer>
  )
}
