import React from 'react'
import { Avatar, Card } from '@mui/material'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

export interface CourseAuthorCardProps {
  name: string
  description: string
  photo_url: string
}

const CourseAuthorCard = ({ name, description, photo_url }: CourseAuthorCardProps): JSX.Element => {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar
        alt=""
        src={photo_url}
        sx={{
          width: 156,
          height: 156,
          boxShadow: 6,
          border: 1,
          borderColor: 'white',
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" color="primary" align={'center'} sx={{ lineHeight: 1 }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" align={'center'}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CourseAuthorCard
