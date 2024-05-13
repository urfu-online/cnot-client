import * as React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Button, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface Props {
  title: string
  url: string
  goToCourse: string
  color?: string
  isEnrollment: boolean
}

export default function CourseButton(props: Props): JSX.Element {
  const { title, url, goToCourse, color, isEnrollment } = props
  console.log(url, isEnrollment)

  const [isEnrollmentState, setIsEnrollmentState] = useState<boolean>(false)
  useEffect(() => {
    setIsEnrollmentState(isEnrollment)
  }, [isEnrollment])

  const enrollInCourse = () => {
    console.log(isEnrollmentState)
    if (isEnrollmentState) {
      window.open(goToCourse)
    } else {
      axios.get(url, { withCredentials: true }).then((resp) => {
        const course = resp.data
        console.log(course.is_active)
        setIsEnrollmentState(course.is_active)
      })
    }
  }

  return (
    <Button
      variant={isEnrollmentState ? 'outlined' : 'contained'}
      size="large"
      endIcon={<ArrowForwardIcon sx={{ fontSize: 10 }} />}
      onClick={enrollInCourse}
      sx={{
        color: color ? color : '',
        background: '#e17f2e',
        mt: 2,
        border: 2,
        ':hover': {
          border: 2,
          background: '#955c45',
        },
      }}
    >
      <Typography variant={'h6'}>{isEnrollmentState ? 'Перейти на курс ' : title}</Typography>
    </Button>
  )
}
