import { useEffect, useRef, useState } from 'preact/hooks'
import Lightbox from 'bs5-lightbox'

interface IImageCard {
  batchNo: number
  jobId: string
}

export const ImageCard = ({ batchNo, jobId }: IImageCard) => {
  const [isImage, setIsImage] = useState(false)
  const lightboxRef = useRef<Lightbox | null>(null)
  const imageURL =
    'https://cdn.midjourney.com/' + jobId + '/0_' + (batchNo - 1) + '.png'

  function imageExists(image_url: string) {
    const img = new Image()
    img.src = image_url
    img.onload = function () {
      setIsImage(true)
    }
  }

  useEffect(() => {
    imageExists(imageURL)
  }, [imageURL])

  useEffect(() => {
    if (isImage) {
      const link = document.querySelector<HTMLAnchorElement>(
        `a[href='${imageURL}']`,
      )
      if (link) {
        const handleClick = (e: Event) => {
          e.preventDefault()
          if (!lightboxRef.current) {
            lightboxRef.current = new Lightbox(link)
          }
          lightboxRef.current.show()
        }

        link.addEventListener('click', handleClick)

        return () => {
          link.removeEventListener('click', handleClick)
          if (lightboxRef.current) {
            lightboxRef.current.hide()
          }
        }
      }
    }
  }, [isImage, imageURL])

  if (!isImage) {
    return <div class='col'></div>
  } else {
    return (
      <div class='col col-sm-4'>
        <div class='card'>
          <div class='card-body'>
            <a
              href={imageURL}
              class='col-sm-4'
              data-bs-toggle='lightbox'
              data-gallery='mj-gallery'
              data-type='image'
            >
              <img
                class='img-thumbnail img-fluid'
                src={imageURL}
                alt={`Image ${batchNo}`}
              />
            </a>
            <h5 class='card-title'>Image {batchNo}:</h5>
            <a
              class='card-text'
              href={imageURL}
              target='_blank'
              rel='noopener noreferrer'
            >
              {imageURL}
            </a>
          </div>
        </div>
      </div>
    )
  }
}
