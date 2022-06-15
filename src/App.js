import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import './App.css'

import RouteIndex from './routes/RouteIndex'
const theme = createTheme({
  typography: {
    fontFamily: 'font-h1-metropolis-regular'
  },
  palette: {
    primary: {
      main: '#A91674'
    },
    secondary: {
      main: '#F73A47'
    }
  }
})
function App () {
  const { personalIntrest,earTest } = useSelector(state => state)
  //console.log(earTest)
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <RouteIndex />
      </div>
    </ThemeProvider>
  )
}

export default App
