interface IImageGrid {
  jobId: string
}
export const ImageGrid = ({ jobId }: IImageGrid) => {
  const imageURL = 'https://cdn.midjourney.com/' + jobId + '/grid_0' + '.png'

  return (
    <div class='row'>
      <div class='col-2 fw-bold'>Image Grid:</div>
      <div class='col'>{imageURL}</div>
      <div class='col-4'>
        <img src={imageURL} class='img-thumbnail' />
      </div>
    </div>
  )
}
