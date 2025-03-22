import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './index.css'
import Home from './components/Home'
import Navbar from './components/Navbar' 
import VideoC from './components/VideoC'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home/>}/>

          <Route path='/room/:roomID' element={<VideoC/>}/>
       
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
