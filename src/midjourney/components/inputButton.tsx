import { useState } from 'preact/hooks'
import { Callback, OnInput } from 'src/shared/types'

interface IInputButtonProps {
  disabled?: boolean
  id?: string
  size: number
  placeholder: string
  text: string
  type: string
  onClick: Callback
  onInput: OnInput
}

export const InputButton = ({
  disabled,
  id,
  size,
  placeholder,
  text,
  type,
  onClick,
  onInput,
}: IInputButtonProps) => {
  const [btnId, setBtnId] = useState('')
  const [btnType, setBtnType] = useState('')

  setBtnId(id ? 'button-' + id : '')
  setBtnType(type ? 'btn btn-' + type : 'btn btn-primary')

  return (
    <div class='input-group'>
      <input
        disabled={disabled}
        size={size}
        placeholder={placeholder}
        class='form-control'
        onInput={onInput}
      />
      <button
        disabled={disabled}
        type='button'
        id={btnId}
        class={btnType}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  )
}
