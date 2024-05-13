import React from 'react'
import { Card, Typography } from '@mui/material'

export interface AboutCardProps {
  title: string
  subtitle: string
  number: number
}

const AboutCard = ({ title, subtitle, number }: AboutCardProps): JSX.Element => {
  return (
    <Card elevation={0} sx={{ pt: 2 }}>
      <Typography
        variant={'h3'}
        color={'secondary'}
        component={'span'}
        sx={{
          my: 2,
          border: 3,
          borderRadius: 50,
          width: 56,
          height: 56,
          display: 'inline-block',
          textAlign: 'center',
        }}
      >
        {number}
      </Typography>
      <Typography variant={'h5'} color={'primary'} sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography variant={'subtitle1'}>{subtitle}</Typography>
    </Card>
  )
}

export default AboutCard
