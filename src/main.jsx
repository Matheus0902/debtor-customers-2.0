import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { BrowserRouter } from 'react-router-dom'

import { Home } from './pages/Home'

import { AppRoutes } from './routes/app.routes'

import GlobalStyle from './styles/global'
import theme from './styles/theme'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
