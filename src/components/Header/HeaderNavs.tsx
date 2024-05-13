import React from 'react'
import { Tab, Tabs } from '@mui/material'
import { Link, matchPath, useLocation } from 'react-router-dom'

const HeaderNavs = (): JSX.Element => {
  const useRouteMatch = (patterns: readonly string[]) => {
    const { pathname } = useLocation()

    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i]
      const possibleMatch = matchPath(pattern, pathname)
      if (possibleMatch !== null) {
        return possibleMatch
      }
    }
    return null
  }
  const routeMatch = useRouteMatch(['/', '/catalog', '/about', '/courses', '/catalog/:id', '/courses/:id'])
  let currentTab = routeMatch?.pattern?.path
  if (currentTab.includes('/:id')) {
    currentTab = currentTab.substring(0, currentTab.indexOf('/:'))
  }

  return (
    <Tabs value={currentTab}>
      <Tab label="Главная" value="/" to="/" component={Link} />
      <Tab label="Каталог курсов" value="/courses" to="/courses" component={Link} />
      <Tab label="О платформе" value="/about" to="/about" component={Link} />
    </Tabs>
  )
}

export default HeaderNavs
