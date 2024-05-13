import * as React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'

interface Props {
  list: string[]
}

const HomeCardList = (props: Props): JSX.Element => {
  const { list } = props
  return (
    <List subheader={<li />}>
      {list.map((item, index) => (
        <ListItem key={index} sx={{ px: 0, py: 2 }}>
          <ListItemIcon>
            <CheckCircleOutlineRoundedIcon fontSize="large" color={'secondary'} />
          </ListItemIcon>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  )
}

export default HomeCardList
