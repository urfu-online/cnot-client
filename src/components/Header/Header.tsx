import React, { useContext, useEffect } from 'react'
import HeaderBrand from './HeaderBrand'
import { Box, Container, Toolbar } from '@mui/material'
import HeaderNavs from './HeaderNavs'
import { UserContext } from '../../context/UserState'
import HeaderLoginButton from './HeaderLoginButton'
import HeaderUserAccountMenu from './HeaderUserAccountMenu'

const Header: React.FC = (): JSX.Element => {
  const { state, checkUser } = useContext(UserContext)

  useEffect(() => {
    checkUser()
  }, [])

  return (
    <>
      {/*<HeaderBrand />*/}
      <Container sx={{ px: { xs: 0, sx: 0, md: 0, lg: 0, xl: 0 } }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <HeaderNavs />
          </Box>
          {state.user && (
            <HeaderUserAccountMenu
              url_logout={'https://courses.urfu.online/logout'}
              url_dashboard={'https://courses.urfu.online/dashboard'}
              url_studio={'https://studio.umnoc.ru'}
              username={state.user.user.username}
              is_staff={state.user.user.is_staff}
            />
          )}
          {!state.user && (
            <HeaderLoginButton
              url={{ login: 'https://courses.urfu.online/login', register: 'https://courses.urfu.online/register' }}
            />
          )}
        </Toolbar>
      </Container>
    </>
  )
}

export default Header
