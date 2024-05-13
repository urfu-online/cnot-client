import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'

import About from './pages/About'
import Course from './pages/Course'
import { UserState } from './context/UserState'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Box from '@mui/material/Box'

const App = (): JSX.Element => {
  return (
    <UserState>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh' }}>
        <Box>
          <Header />
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/courses" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog/:id" element={<Course />} />
            <Route path="/courses/:id" element={<Course />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </UserState>
  )
}

export default App
