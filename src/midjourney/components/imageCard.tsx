interface IImageCard {
  batchNo: number
  jobId: string
}
export const ImageCard = ({ batchNo, jobId }: IImageCard) => {
  const imageURL =
    'https://cdn.midjourney.com/' + jobId + '/0_' + (batchNo - 1) + '.png'

  return (
    <div class='col'>
      <div class='card'>
        <div class='card-body'>
          <img src={imageURL} class='img-thumbnail img-fluid' />
          <h5 class='card-title'>Image {batchNo}:</h5>
          <a class='card-text' href={imageURL} target='_blank'>
            {imageURL}
          </a>
        </div>
      </div>
    </div>
  )
}
