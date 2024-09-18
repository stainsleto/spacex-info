import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home/Home'
import { Launches } from './pages/launches/Launches'
import { History } from './pages/history/History'
import { Rockets } from './pages/rockets/Rockets'
import { SingleHistory } from './pages/history/SingleHistory'
import { SingleLaunch } from './pages/launches/SingleLaunch'
import { SingleRocket } from './pages/rockets/SingleRocket'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/launches' element={<Launches />} />
          <Route path='/history' element={<History />} />
          <Route path='/rockets' element={<Rockets />} />
          <Route path='/history/:id' element={<SingleHistory />} />
          <Route path='/launches/:id' element={<SingleLaunch />} />
          <Route path='/rockets/:id' element={<SingleRocket />} />
          
        </Routes>
      </BrowserRouter>     
    </>
  )
}

export default App
