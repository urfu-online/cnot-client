import React from 'react'
import { Button, ButtonGroup } from '@mui/material'

interface IHeaderLoginButtonProps {
  url: {
    login: string
    register: string
  }
}

const HeaderLoginButton = ({ url }: IHeaderLoginButtonProps): JSX.Element => {
  return (
    <ButtonGroup variant="outlined">
      <Button component={'a'} href={url.register}>
        Регистрация
      </Button>
      <Button component={'a'} href={url.login}>
        Войти
      </Button>
    </ButtonGroup>
  )
}

export default HeaderLoginButton
