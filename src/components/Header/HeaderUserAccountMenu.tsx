import React from 'react'
import { Avatar, Box, IconButton, Tooltip, Menu, ListItemIcon, MenuItem, Divider, Typography } from '@mui/material'
import { Logout, School, Construction } from '@mui/icons-material'

interface IHeaderUserAccountMenuProps {
  url_logout: string
  url_dashboard: string
  url_studio: string
  username: string
  is_staff: boolean
}

const HeaderUserAccountMenu = ({
  url_logout,
  url_dashboard,
  url_studio,
  username,
  is_staff,
}: IHeaderUserAccountMenuProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <>
            <Typography>{username}</Typography>
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }} />
            </IconButton>
          </>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem component={'a'} href={url_dashboard}>
          <ListItemIcon>
            <School />
          </ListItemIcon>
          Перейти к обучению
        </MenuItem>
        <MenuItem component={'a'} href={url_studio} disabled={!is_staff}>
          <ListItemIcon>
            <Construction />
          </ListItemIcon>
          Перейти в студию
        </MenuItem>
        <Divider />
        <MenuItem component={'a'} href={url_logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Выйти из системы
        </MenuItem>
      </Menu>
    </>
  )
}

export default HeaderUserAccountMenu
