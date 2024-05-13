import * as React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Container } from '@mui/material'

interface MainFeaturedPostProps {
  post: {
    description: string
    title: string
  }
}

const MainFeaturedPost = (props: MainFeaturedPostProps): JSX.Element => {
  const { post } = props

  return (
    <Paper
      square={true}
      elevation={0}
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        background: 'linear-gradient(215deg, rgba(255,221,0,1) 0%, rgba(247,148,29,1) 100%)',
      }}
    >
      <Container sx={{ p: 6 }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.1)',
          }}
        />
        <Grid container>
          <Grid item md={8}>
            <Box
              sx={{
                position: 'relative',
              }}
            >
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {post.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default MainFeaturedPost
