/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from 'react-dom/client'
import App from './App'
import GlobalStyle from './styles/global.style'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <>
    <GlobalStyle />
    <App />
  </>,
)
