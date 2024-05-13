import * as React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

interface Props {
  title: string
  url: string
}

const HomeCardButton = (props: Props): JSX.Element => {
  const { title, url } = props
  return (
    <Button
      component={Link}
      fullWidth
      variant="outlined"
      size="large"
      endIcon={<ArrowForwardIcon sx={{ fontSize: 10 }} />}
      to={url}
      sx={{
        py: 3,
        textAlign: 'left',
        display: 'flex',
        justifyContent: 'space-between',
        border: 2,
        ':hover': {
          border: 2,
        },
      }}
    >
      <Typography variant={'h6'}>{title}</Typography>
    </Button>
  )
}

export default HomeCardButton
