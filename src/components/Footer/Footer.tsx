import React from 'react'
import Box from '@mui/material/Box'
import { Container } from '@mui/material'

const Footer: React.FC = (): JSX.Element => {
  return (
    <Box sx={{ background: '#0a2435', height: '200px', mt: 10 }}>
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ color: 'white', mt: 5 }}>
          <p>© УрФУ</p>
        </Box>
        <Box sx={{ color: 'white', mt: 5 }}>
          <p>
            Контакты <br />
            <a style={{ color: 'white' }} href="mailto:courses@urfu.online">
              courses@urfu.online
            </a>
          </p>
        </Box>
        <Box></Box>
      </Container>
    </Box>
  )
}

export default Footer
