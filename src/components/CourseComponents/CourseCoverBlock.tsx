import * as React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Container } from '@mui/material'
import CourseButton from './CourseButton'
// import Button from '@mui/material/Button'
import FormDialog from '../Dialog'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserState'

export interface CourseCoverBlockProps {
  id: number
  description: string | undefined
  title: string
  image_url: string | undefined
  url: string
  goToCourse: string
  isEnrollmentAllowed: boolean
  isEnrollment: boolean
}

export default function CourseCoverBlock({
  id,
  title,
  description,
  image_url,
  url,
  goToCourse,
  isEnrollmentAllowed,
  isEnrollment,
}: CourseCoverBlockProps): JSX.Element {
  const { state, checkUser } = useContext(UserContext)

  useEffect(() => {
    checkUser()
  }, [])

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
        <Grid container spacing={6}>
          <Grid item md={8}>
            <Box
              sx={{
                position: 'relative',
              }}
            >
              <Typography component="h1" variant="h4" color="inherit" gutterBottom>
                {title}
              </Typography>
              <Typography variant="subtitle1" color="inherit">
                {description}
              </Typography>
              {isEnrollmentAllowed ? (
                <CourseButton
                  title={isEnrollment ? 'Вы записаны на курс' : 'Записаться на курс'}
                  url={url}
                  goToCourse={goToCourse}
                  color={'white'}
                  isEnrollment={isEnrollment}
                />
              ) : (
                <>{state.user && <FormDialog id={id} />}</>
              )}
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box
              component="img"
              sx={{
                position: 'relative',
                boxShadow: 2,
                borderRadius: 2,
              }}
              width={'100%'}
              src={image_url}
              alt={`Заставка курса "${title}"`}
            />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}
