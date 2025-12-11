import { HashRouter} from 'react-router-dom'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import { NotFound } from './Pages/NotFound.jsx'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}


function WrapperApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
}


export default WrapperApp
