interface IImageCard {
  batchNo: number
  jobId: string
}
export const ImageCard = ({ batchNo, jobId }: IImageCard) => {
  const imageURL =
    'https://cdn.midjourney.com/' + jobId + '/0_' + (batchNo - 1) + '.png'

  return (
    <div class='row'>
      <div class='col-2 fw-bold'>Image {batchNo}:</div>
      <div class='col'>{imageURL}</div>
      <div class='col-2'>
        <img src={imageURL} class='img-thumbnail' />
      </div>
    </div>
  )
}
