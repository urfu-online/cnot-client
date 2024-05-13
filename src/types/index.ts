import { ReactElement } from 'react'

export interface IResponse<T> {
  message: string | string[]
  body: T
}

export interface WithChildrenProps {
  children: ReactElement
}
