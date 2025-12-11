import { AlertBox } from './components/AlertBox/AlertBox'
import { CssBaseline } from '@mui/material'
import './App.css'

function App() {

  return (
    <>
      <CssBaseline />
      <AlertBox
        type="warning"
        message="Your profile has been updated successfully!"
        onClose={() => alert('Alert closed!')}
      >
        <p>You can now continue using the application.</p>
      </AlertBox>
    </>
  )
}

export default App
