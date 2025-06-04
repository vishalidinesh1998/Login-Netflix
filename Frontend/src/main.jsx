import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Sucess from './Components/Sucess.jsx'
import Failed from './Components/Failed.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/sucess' element={<Sucess />}></Route>
        <Route path='/fail' element={<Failed />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
