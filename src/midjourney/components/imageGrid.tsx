interface IImageGrid {
  jobId: string
}
export const ImageGrid = ({ jobId }: IImageGrid) => {
  const imageURL = 'https://cdn.midjourney.com/' + jobId + '/grid_0' + '.png'

  return (
    <div class='col-4'>
      <div class='card'>
        <div class='card-body'>
          <img src={imageURL} class='img-thumbnail img-fluid' />
          <h5 class='card-title'>Image Grid:</h5>
          <a class='card-text' href={imageURL} target='_blank'>
            {imageURL}
          </a>
        </div>
      </div>
    </div>
  )
}
