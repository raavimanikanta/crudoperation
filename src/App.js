import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'
import Todolidt from './Todolidt'

const App = () => {
  return (
    <>
    {/* <Router>
        <div>
        <Navbar/>
        <Routes>
            <Route path="*" element={<PageNotFound/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>


            
        </Routes>
        </div>
    </Router> */}
    <Todolidt/>
    
    
    </>
       
   
  )
}

export default App