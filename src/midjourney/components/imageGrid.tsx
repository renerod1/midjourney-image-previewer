import { useEffect, useState } from 'preact/hooks'
import 'bs5-lightbox'

interface IImageGrid {
  batchNo: number
  jobId: string
}
export const ImageGrid = ({ batchNo, jobId }: IImageGrid) => {
  const [isImage, setIsImage] = useState(false)
  const imageURL =
    'https://cdn.midjourney.com/' + jobId + '/grid_' + (batchNo - 1) + '.png'

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
      <div class='col-4'>
        <div class='card'>
          <div class='card-body'>
            <a href={imageURL} data-toggle='lightbox' data-gallery='gallery'>
              <img src={imageURL} class='img-thumbnail img-fluid' />
            </a>
            <h5 class='card-title'>Image Grid {batchNo}:</h5>
            <a class='card-text' href={imageURL} target='_blank'>
              {imageURL}
            </a>
          </div>
        </div>
      </div>
    )
  }
}
