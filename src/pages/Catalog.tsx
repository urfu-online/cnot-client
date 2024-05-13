import * as React from 'react'
import { useEffect, useState } from 'react'
import MainFeaturedPost from '../components/MainFeaturedPost'
import { CircularProgress, Container, Grid, Paper, Typography } from '@mui/material'
import axios from 'axios'
// import coursesData from "../data/courses.json";
import CatalogCard, { catalogStateProps } from '../components/CatalogComponents/CatalogCard'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const mainFeaturedPost = {
  title: 'Каталог онлайн-курсов',
  description: 'Профессиональные навыки в любое время и в любом месте',
}

const Catalog = (): JSX.Element => {
  const [isLoading, setIsloading] = useState(true)
  const [limit, setLimit] = useState(9)
  const [offset, setOffset] = useState(0)
  const [isShowButton, setIsShowButton] = useState(true)

  const [catalogState, setCatalogState] = useState<catalogStateProps[]>([])
  useEffect(() => {
    const apiUrl = `https://courses.umnoc.ru/umnoc/api/courses?limit=${limit}&offset=${offset}`
    axios.get(apiUrl, { withCredentials: true }).then((resp) => {
      const allCourses = resp.data.items

      setCatalogState(allCourses)
      setOffset(offset + limit)
      setIsloading(false)
    })
  }, [setCatalogState])

  const getMore = () => {
    const apiUrl = `https://courses.umnoc.ru/umnoc/api/courses?limit=${limit}&offset=${offset}`
    axios.get(apiUrl, { withCredentials: true }).then((resp) => {
      const allCourses = resp.data.items
      if (allCourses.length < 9) {
        setIsShowButton(false)
      }
      setCatalogState([...catalogState, ...allCourses])
      setOffset(offset + limit)
    })
  }

  // const catalogState: catalogStateProps[] = coursesData;
  return (
    <>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Container>
        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress color={'secondary'} />
          </Box>
        ) : (
          <Paper elevation={0}>
            <Typography variant="h4" color={'secondary'} sx={{ my: 4 }}>
              Список доступных онлайн-курсов
            </Typography>
            <Grid container spacing={2}>
              {catalogState
                .filter((element: catalogStateProps) => (element.catalog_visibility = 'both'))
                .map((element: catalogStateProps) => (
                  <Grid key={element.id} item xs={12} sm={6} md={4}>
                    <CatalogCard
                      id={element.id}
                      course_id={element.course_id}
                      course_image_url={element.course_image_url}
                      display_name={element.display_name}
                      description={element.description}
                    />
                  </Grid>
                ))}
            </Grid>
            {isShowButton && (
              <Button fullWidth sx={{ my: 3 }} onClick={getMore}>
                Показать еще
              </Button>
            )}
          </Paper>
        )}
      </Container>
    </>
  )
}

export default Catalog
