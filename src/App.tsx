import { AlertBox } from './components/AlertBox/AlertBox'
import './App.css'

function App() {

  return (
    <>
      <AlertBox
        type="success"
        message="This is a success alert!"
        onClose={() => alert('Alert closed!')}
      >
        <p>Additional content can go here.</p>
      </AlertBox>
    </>
  )
}

export default App
