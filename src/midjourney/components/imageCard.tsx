import { useEffect, useState } from 'preact/hooks'
import 'bs5-lightbox'

interface IImageCard {
  batchNo: number
  jobId: string
}

export const ImageCard = ({ batchNo, jobId }: IImageCard) => {
  const [isImage, setIsImage] = useState(false)
  const imageURL =
    'https://cdn.midjourney.com/' + jobId + '/0_' + (batchNo - 1) + '.png'

  function imageExists(image_url) {
    var img = new Image()
    img.src = image_url
    img.onload = function () {
      setIsImage(true)
    }
  }

  useEffect(() => {
    imageExists(imageURL)
  }),
    []

  if (!isImage) {
    return <div class='col'></div>
  } else {
    return (
      <div class='col'>
        <div class='card'>
          <div class='card-body'>
            <a href={imageURL} data-toggle='lightbox' data-gallery='gallery'>
              <img src={imageURL} class='img-thumbnail img-fluid' />
            </a>
            <h5 class='card-title'>Image {batchNo}:</h5>
            <a class='card-text' href={imageURL} target='_blank'>
              {imageURL}
            </a>
          </div>
        </div>
      </div>
    )
  }
}
