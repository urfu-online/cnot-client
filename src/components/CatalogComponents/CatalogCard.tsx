import * as React from 'react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

import Avatar from '@mui/material/Avatar'
// import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// import { Construction } from '@mui/icons-material'

import { ButtonGroup } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export interface catalogStateProps {
  id: number
  slug?: string
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
  enrollment_start?: string | null
  enrollment_end?: string | null
  invitation_only?: boolean
  max_student_enrollments_allowed?: string | null
  language?: string | null
  pre_requisite_courses?: string | null
  authors?: []
  competences?: string[]
  results?: string[]
  catalog_visibility?: string
}

export default function CatalogCard({
  id,
  course_id,
  course_image_url,
  display_name,
  description,
}: catalogStateProps): JSX.Element {
  const navigate = useNavigate()
  return (
    <Card
      elevation={3}
      sx={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
      onClick={() => navigate(`./${id}`)}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'white' }} aria-label="recipe">
            <img src="/icons/icon-300x300.png" width={'100%'} />
          </Avatar>
        }
        action={
          <>
            {/*<IconButton aria-label="Construction" component={'a'} href={`https://studio.umnoc.ru/course/${course_id}`}>*/}
            {/*  // <Construction />*/}

            {/*</IconButton>*/}
          </>
        }
        title={display_name}
      />
      <CardMedia component="img" height="194" image={course_image_url} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          overflow="hidden"
          whiteSpace="pre-line"
          textOverflow="ellipsis"
          height={64}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup fullWidth variant="text"></ButtonGroup>
      </CardActions>
    </Card>
  )
}
