import { useState } from 'preact/hooks'
import { Callback, OnChange } from 'src/shared/types'

interface IInputButtonProps {
  disabled?: boolean
  id?: string
  size: number
  placeholder: string
  text: string
  type: string
  onChange: OnChange
  onClick: Callback
}

export const InputButton = ({
  disabled,
  id,
  size,
  placeholder,
  text,
  type,
  onChange,
  onClick,
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
        onChange={onChange}
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
