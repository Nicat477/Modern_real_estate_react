import React from 'react'
import Header from '../common/header/Header'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from '../home/Home'
import Footer from '../common/footer/Footer'
import About from '../about/About'
import Service from '../services/Service'
import Blog from '../blog/Blog'
import Pricing from '../pricing/Pricing'
import Contact from '../contact/Contact'
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Service/>}/>
          <Route path='/services' element={<Blog/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/contact' element={<Contact/>}/>
          {/* <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} /> */}
        </Routes>
        <Footer/>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default Pages
