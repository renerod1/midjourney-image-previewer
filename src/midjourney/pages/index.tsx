import { useEffect, useState } from 'preact/hooks'
import { InputButton } from '../components/inputButton'

export const Midjourney = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [parsed, setParsed] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isHidden, setIsHidden] = useState(true)
  const [jobId, setJobId] = useState('')
  const [image1URL, setImage1URL] = useState('')
  const [image2URL, setImage2URL] = useState('')
  const [image3URL, setImage3URL] = useState('')
  const [image4URL, setImage4URL] = useState('')
  const [image5URL, setImage5URL] = useState('')
  const [image6URL, setImage6URL] = useState('')
  const [image7URL, setImage7URL] = useState('')
  const [image8URL, setImage8URL] = useState('')
  const [imageGridURL, setImageGridURL] = useState('')

  useEffect(() => {
    setParsed(false)
    setIsHidden(true)
    setJobId('')
  }, [inputValue])

  const handleClickSubmit = () => {
    setIsHidden(inputValue ? false : true)
    if (!isHidden) {
      parseURL(inputValue)
    }
  }

  const handleInputChange = (e) => {
    console.log('e', e.target.value)
    setParsed(false)
    setIsHidden(true)
    setInputValue(e.target.value)
  }

  const parseURL = (url: string) => {
    setJobId(
      url.match(
        '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
      )[0],
    )
    createImageURL(jobId)
  }

  const createImageURL = (id: string) => {
    setImage1URL('https://cdn.midjourney.com/' + id + '/0_0.png')
    setImage2URL('https://cdn.midjourney.com/' + id + '/0_1.png')
    setImage3URL('https://cdn.midjourney.com/' + id + '/0_2.png')
    setImage4URL('https://cdn.midjourney.com/' + id + '/0_3.png')
    setImage5URL('https://cdn.midjourney.com/' + id + '/0_4.png')
    setImage6URL('https://cdn.midjourney.com/' + id + '/0_5.png')
    setImage7URL('https://cdn.midjourney.com/' + id + '/0_6.png')
    setImage8URL('https://cdn.midjourney.com/' + id + '/0_7.png')
    setImageGridURL('https://cdn.midjourney.com/' + id + '/grid_0.png')
  }

  return (
    <>
      <div>
        <div class='container text-center'>
          <div class='row'>
            <div class='col'>
              <h1>Midjourney Image Previewer</h1>
            </div>
          </div>
        </div>
        <div class='container text-start'>
          <div class='row'>
            <div class='col'>
              <InputButton
                id='image-link'
                size={96}
                placeholder='Image Link'
                text='Submit'
                type='primary'
                onClick={handleClickSubmit}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {!isHidden && (
            <>
              <div class='row'>
                <div class='col-2'>
                  <div class='strong'>Job ID:</div>
                </div>
                <div class='col'>
                  <div>{jobId}</div>
                </div>
              </div>
              <div class='row'>
                <div class='col-2'>
                  <div class='strong'>Image 1:</div>
                </div>
                <div class='col'>
                  <div>{image1URL}</div>
                </div>
                <div class='col'>
                  <img src={image1URL} class='img-thumbnail' />
                </div>
              </div>
              <div class='row'>
                <div class='col-2'>
                  <div class='strong'>Image 2:</div>
                </div>
                <div class='col'>
                  <div>{image2URL}</div>
                </div>
                <div class='col'>
                  <img src={image2URL} class='img-thumbnail' />
                </div>
              </div>
              <div class='row'>
                <div class='col-2'>
                  <div class='strong'>Image 3:</div>
                </div>
                <div class='col'>
                  <div>{image3URL}</div>
                </div>
                <div class='col'>
                  <img src={image3URL} class='img-thumbnail' />
                </div>
              </div>
              <div class='row'>
                <div class='col-2'>
                  <div class='strong'>Image 4:</div>
                </div>
                <div class='col'>
                  <div>{image4URL}</div>
                </div>
                <div class='col'>
                  <img src={image4URL} class='img-thumbnail' />
                </div>
              </div>
              <div class='row'>
                <div class='col-2'>
                  <div class='strong'>Image 5:</div>
                </div>
                <div class='col'>
                  <div>{image5URL}</div>
                </div>
                <div class='col'>
                  <img src={image5URL} class='img-thumbnail' />
                </div>
              </div>
              <div class='row'>
                <div class='col-2'>
                  <div class='strong'>Image 6:</div>
                </div>
                <div class='col'>
                  <div>{image6URL}</div>
                </div>
                <div class='col'>
                  <img src={image6URL} class='img-thumbnail' />
                </div>
              </div>
              <div class='row'>
                <div class='col-2'>
                  <div class='strong'>Image 7:</div>
                </div>
                <div class='col'>
                  <div>{image7URL}</div>
                </div>
                <div class='col'>
                  <img src={image7URL} class='img-thumbnail' />
                </div>
              </div>
              <div class='row'>
                <div class='col-2'>
                  <div class='strong'>Image 8:</div>
                </div>
                <div class='col'>
                  <div>{image8URL}</div>
                </div>
                <div class='col'>
                  <img src={image8URL} class='img-thumbnail' />
                </div>
              </div>
              <div class='row'>
                <div class='col-2'>
                  <div class='strong'>Image Grid:</div>
                </div>
                <div class='col'>
                  <div>{imageGridURL}</div>
                </div>
                <div class='col'>
                  <img src={imageGridURL} class='img-thumbnail' />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
