import * as React from 'react'

import { Container, Grid, Paper, Typography } from '@mui/material'
import AboutCard, { AboutCardProps } from '../components/AboutComponents/AboutCard'

const aboutCardData: AboutCardProps[] = [
  {
    title: 'Индивидуальные образователные траектории',
    subtitle:
      'Студент самостоятельно сможет сформировать траекторию обучения, которая будет соответствовать индивидуальному уровню развития профессиональных навыков и интересов',
    number: 1,
  },
  {
    title: 'Уровневая модель компетенций',
    subtitle:
      'Использование передовой инновационно- внедренческой (технопарки, инновационная инфраструктура университетов) инфраструктуры регионов',
    number: 2,
  },
  {
    title: 'Проектное обучение',
    subtitle:
      'Студенты могут участвовать в решении производственных задач под руководством преподавателей и наставников с предприятий в проектных командах',
    number: 3,
  },
]

const About = (): JSX.Element => (
  <>
    <Container>
      <Paper elevation={0}>
        <Typography variant="h4" color={'secondary'} sx={{ mt: 4, mb: 2 }}>
          О платформе
        </Typography>
        <Typography variant={'subtitle1'} component={'p'}>
          Образовательная платформа центра позволит изменить подход к инженерному образованию за счет создания
          практико-ориентированных цифровых образовательных ресурсов, включающих тренажеры и симуляторы.
        </Typography>
        <Typography variant={'subtitle1'} component={'p'}>
          Образовательные ресурсы будут создаваться совместно с компаниями, индустриальными участниками НОЦ.
        </Typography>
        <Typography variant="h4" color={'secondary'} sx={{ mt: 4, mb: 2 }}>
          Преимущества
        </Typography>
        <Typography variant={'subtitle1'} component={'p'}>
          В настоящее время образовательная программа Уральского федерального университета «Системная инженерия» (Master
          of Science. System Engineering) имеет международную аккредитацию агентства ASIIN e.V. (Accreditation Agency
          for Study Programmes in Engineering, Informatics, Natural Sciences and Mathematics). На основе этой программы
          планируется разработка сетевых образовательных программ ВО и ДПО по системной инженерии, в том числе для
          иностранных слушателей
        </Typography>
        <Grid container spacing={3}>
          {aboutCardData.map(({ title, subtitle, number }, index) => (
            <Grid key={index} item xs={12} md={4}>
              <AboutCard title={title} subtitle={subtitle} number={number} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  </>
)

export default About
