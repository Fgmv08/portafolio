import { Routes, Route } from 'react-router-dom'
import './App.css'
import FrankComponent from './components/Frank/FrankComponent'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrankComponent  />} />
    </Routes>
  )
}

export default App


