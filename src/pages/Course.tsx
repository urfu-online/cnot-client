import * as React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Grid, Paper, Typography } from '@mui/material'
import CourseCoverBlock from '../components/CourseComponents/CourseCoverBlock'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CourseAuthorCard, { CourseAuthorCardProps } from '../components/CourseComponents/CourseAuthorCard'
// import CourseButton from '../components/CourseComponents/CourseButton'

export interface CourseStateProps {
  id: number
  display_name: string
  target?: string
  description?: string
  course_program?: string
  lectures_count?: number
  prerequisites?: string
  format?: string
  course_id?: string
  course_image_url?: string
  banner_image_url?: string
  course_video_url?: string | null
  short_description?: string
  duration?: string
  credits?: string
  start_display?: string
  start_date?: string
  end_date?: string | null
  enrollment_allowed?: boolean
  enrollment_start?: string | null
  enrollment_end?: string | null
  invitation_only?: boolean
  max_student_enrollments_allowed?: string | null
  language?: string | null
  pre_requisite_courses?: string | null
  authors?: CourseAuthorCardProps[]
  competences?: string[]
  results?: string[]
}

export interface MyCourse {
  id: number
  course_id: string | undefined
}

const Course = () => {
  const params = useParams()

  const [courses, setCourses] = useState<MyCourse[]>([])
  const [courseState, setCourseState] = useState<CourseStateProps>({
    id: 0,
    display_name: '',
    short_description: '',
    course_image_url: '',
    course_id: '',
  })
  useEffect(() => {
    const apiUrl = `https://courses.umnoc.ru/umnoc/api/courses/${params.id}`
    axios.get(apiUrl, { withCredentials: true }).then((resp) => {
      const allCourses = resp.data
      setCourseState(allCourses)
    })
  }, [setCourseState])

  useEffect(() => {
    const apiUrl = `https://courses.umnoc.ru/umnoc/api/courses/my`
    axios
      .get(apiUrl, { withCredentials: true })
      .then((resp) => {
        const allCourses = resp.data
        setCourses(allCourses)
      })
      .catch((err) => console.log(err))
  }, [setCourseState])

  return (
    <>
      <CourseCoverBlock
        id={courseState.id}
        title={courseState.display_name}
        description={courseState.short_description}
        image_url={courseState.course_image_url}
        url={`https://courses.umnoc.ru/umnoc/api/me/enroll/${courseState.id}`}
        goToCourse={`https://courses.umnoc.ru/courses/${courseState.course_id}/course`}
        isEnrollmentAllowed={courseState.enrollment_allowed}
        isEnrollment={courses.map((el) => el.id).includes(courseState.id)}
      />
      {/*{JSON.stringify(courses)}*/}
      <Container>
        <Paper elevation={0}>
          <Grid container spacing={6}>
            <Grid item md={8}>
              <Typography variant="h4" color={'secondary'} sx={{ mt: 4, mb: 4 }}>
                Об онлайн-курсе
              </Typography>
              <Typography variant={'subtitle1'} component={'p'}>
                {courseState.description}
              </Typography>
              {courseState.competences && (
                <>
                  <Typography variant="h5" color={'primary'} sx={{ mt: 4, mb: 2 }}>
                    Формируемые компетенции
                  </Typography>
                  <Typography variant={'subtitle1'} component={'ul'}>
                    {courseState.competences.map((competence, index) => (
                      <li key={index}>{competence}</li>
                    ))}
                  </Typography>
                </>
              )}
              {courseState.results && (
                <>
                  <Typography variant="h5" color={'primary'} sx={{ mt: 4, mb: 2 }}>
                    Результаты обучения
                  </Typography>
                  <Typography variant={'subtitle1'} component={'ul'}>
                    {courseState.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </Typography>
                </>
              )}
              {courseState.course_program && (
                <>
                  <Typography variant="h5" color={'primary'} sx={{ mt: 4, mb: 2 }}>
                    Программа курса
                  </Typography>
                  <Typography variant={'subtitle1'} component={'pre'}>
                    {courseState.course_program}
                  </Typography>
                </>
              )}
            </Grid>
            <Grid item md={4}>
              <Typography variant="h4" color={'secondary'} sx={{ mt: 4, mb: 4 }}>
                Информация
              </Typography>
              <Typography variant={'subtitle1'}>
                <strong>Общая трудоемкость курса:</strong> {courseState.credits ? courseState.credits : 'не указано'}
              </Typography>
              <Typography variant={'subtitle1'}>
                <strong>Длительность изучения курса:</strong>{' '}
                {courseState.duration ? courseState.duration : 'не указано'}
              </Typography>
              <Typography variant={'subtitle1'}>
                <strong>Количество лекций:</strong>{' '}
                {courseState.lectures_count ? courseState.lectures_count : 'не указано'}
              </Typography>
              <Typography variant={'subtitle1'}>
                <strong>Пререквизиты:</strong> {courseState.prerequisites ? courseState.prerequisites : 'не указано'}
              </Typography>
              <Typography variant={'subtitle1'}>
                <strong>Язык курса:</strong> {courseState.language ? courseState.language : 'не указано'}
              </Typography>
              <Typography variant={'subtitle1'}>
                <strong>Формат обучения:</strong> {courseState.format ? courseState.format : 'не указано'}
              </Typography>
              {/* <Typography variant={"subtitle1"}> */}
              {/*   <strong>Сертификат:</strong>{" "} */}
              {/*   {courseState.pre_requisite_courses */}
              {/*     ? courseState.pre_requisite_courses */}
              {/*     : "не указано"} */}
              {/* </Typography> */}
              {/* <CourseButton
                title={'Записаться на курс'}
                url={`https://courses.umnoc.ru/umnoc/api/me/enroll/${courseState.id}`}
              /> */}
            </Grid>
          </Grid>
          {courseState.authors && (
            <>
              <Typography
                variant="h4"
                color={'secondary'}
                sx={{
                  mt: 6,
                  mb: 4,
                }}
              >
                Авторский коллектив
              </Typography>
              <Grid container spacing={6}>
                {courseState.authors.map(({ name, description, photo_url }, index) => (
                  <Grid key={index} item md={4}>
                    <CourseAuthorCard name={name} description={description} photo_url={photo_url} />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Paper>
      </Container>
    </>
  )
}

export default Course
