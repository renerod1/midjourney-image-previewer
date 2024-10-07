import { ChangeEvent } from 'preact/compat'

export type Callback = () => void
export type OnInput = (e: ChangeEvent<HTMLInputElement>) => void
