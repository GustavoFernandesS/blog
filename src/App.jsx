import './App.css'
import { BrowserRouter, Routes, Route, navigate } from 'react-router-dom'
import Home from './pages/home'
import About from './About/About'
import Navbar from './Componentes/Navbar'

function App (){
  return (
    <div className='App'>
      <Navbar>
         <div className='container'>
           <Routes>
             <Route path='/' element={<Home />} />
             <Route exact path='/about' element={<About/>}></Route>
           </Routes>
         </div>
         <Footer/>
         </Navbar>
    </div>
  )
}

export default App