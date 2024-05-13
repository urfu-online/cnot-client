import * as React from 'react'
import MainFeaturedPost from '../components/MainFeaturedPost'
import { Grid, Container, Paper, Typography } from '@mui/material'

import HomeCard, { HomeCardProps } from '../components/HomeComponents/HomeCard'

const mainFeaturedPost = {
  title: 'Образовательная платформа НОЦ\u00A0Урал',
  description: 'Практико-ориентированное образование по\u00A0востребованным направлениям подготовки',
}

const homeCardData: HomeCardProps[] = [
  {
    title: 'Образовательная платформа',
    url: '/',
    list: [
      'Программы ДПО по направлениям НОЦ',
      'Онлайн-курсы с участием индустриальных партнеров',
      'Сетевые образовательные программы высшего образования',
    ],
  },
  {
    title: 'Центр развития компетенций',
    url: '/',
    list: [
      'Развитие управленческих компетенций руководителей проектов',
      'Обучение современным требованиям к управлению проектами',
      'Подготовка экспертных материалов, проведение экспертизы и прикладного консалтинга для поддержки принятия решений в области управления',
    ],
  },
  {
    title: 'Технологическое предпринимательство',
    url: '/',
    list: [
      'подготовка класса технологических предпринимателей',
      'подготовка проектных команд для реализации технологических проектов и трансформации производств',
    ],
  },
]

const Home = (): JSX.Element => (
  <>
    <MainFeaturedPost post={mainFeaturedPost} />
    <Container>
      <Paper elevation={0}>
        <Typography variant="h4" color={'secondary'} sx={{ my: 4 }}>
          Образовательные направления
        </Typography>
        <Grid container spacing={3}>
          {homeCardData.map(({ title, url, list }, index) => (
            <Grid key={index} item xs={12} md={4}>
              <HomeCard title={title} url={url} list={list} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  </>
)

export default Home
