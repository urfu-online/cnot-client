import React from 'react'
import HomeCardButton from './HomeCardButton'
import { Card } from '@mui/material'

import HomeCardList from './HomeCardList'

export interface HomeCardProps {
  title: string
  url: string
  list: string[]
}

const HomeCard = (props: HomeCardProps): JSX.Element => {
  const { title, url, list } = props
  return (
    <Card elevation={0}>
      <HomeCardButton title={title} url={url} />
      <HomeCardList list={list} />
    </Card>
  )
}

export default HomeCard
