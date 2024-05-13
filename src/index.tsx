import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './theme'
import AppStore from './store/AppStore'

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(
    <ThemeProvider>
      <BrowserRouter>
        <AppStore>
          <App />
        </AppStore>
      </BrowserRouter>
    </ThemeProvider>
  )
}
