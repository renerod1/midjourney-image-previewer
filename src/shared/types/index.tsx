import { ChangeEvent } from 'preact/compat'

export type Callback = () => void
export type OnChange = (e: ChangeEvent<HTMLInputElement>) => void
