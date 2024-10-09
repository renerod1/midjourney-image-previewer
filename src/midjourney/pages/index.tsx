import { useEffect, useState } from 'preact/hooks'
import { InputButton } from '../components/inputButton'
import { ImageCard } from '../components/imageCard'
import { ImageGrid } from '../components/imageGrid'

export const Midjourney = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isHidden, setIsHidden] = useState(true)
  const [jobId, setJobId] = useState('')

  const handleClickSubmit = () => {
    if (
      inputValue.match(
        '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
      ) != null
    ) {
      setJobId(
        inputValue.match(
          '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
        )[0],
      )
      setIsHidden(false)
    } else {
      setJobId('')
      setIsHidden(true)
    }
  }

  const handleInputChange = (e) => {
    setIsHidden(true)
    setInputValue(e.target.value)
  }

  return (
    <>
      <div>
        <div class='container text-center'>
          <div class='row'>
            <div class='col'>
              <h1>Midjourney Image Previewer</h1>
              <p>&nbsp;</p>
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
                onInput={handleInputChange}
              />
            </div>
          </div>
          <div class='row'>&nbsp;</div>
          {!isHidden && (
            <>
              <div class='row row-cols-4 g-4'>
                <ImageCard batchNo={1} jobId={jobId} />
                <ImageCard batchNo={2} jobId={jobId} />
                <ImageCard batchNo={3} jobId={jobId} />
                <ImageCard batchNo={4} jobId={jobId} />
                {/* <ImageCard batchNo={5} jobId={jobId} />
              <ImageCard batchNo={6} jobId={jobId} />
              <ImageCard batchNo={7} jobId={jobId} />
              <ImageCard batchNo={8} jobId={jobId} /> */}
                <ImageGrid jobId={jobId} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
