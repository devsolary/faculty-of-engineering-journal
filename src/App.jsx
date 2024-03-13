import { Route, Routes, useLocation } from 'react-router-dom'
// import './App.css'
import Home from "./Pages/Home"
import Submissions from "./Pages/Submissions"
import Papers from "./Pages/Papers"
import Editorial from "./Pages/Editorial"
import Publication from "./Pages/Publication"
// import Announcement from "./Pages/Announcements"
// import Archive from "./Pages/Archive"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Faqs from "./Pages/Faqs"
import Header from './Components/Header'
import Register from './Pages/Register'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { createContext } from 'react'
import Login from './Pages/Login'

export const userContext = createContext()

function App() {
  const location = useLocation()

  const [user, setUser] = useState({})

  axios.defaults.withCredentials = true

  // useEffect(() => {
  //   axios.get('http://localhost:3001/')
  //   .then(user => {
  //     setUser(user.data)
  //     console.log(user.data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }, [])

  return (
    <userContext.Provider value={user} className='App'>
        {
          location.pathname != '/register' && <Header />
        }
        {/* <Register/> */}
        {/* <Publication/> */}
        {/* < Login/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/submissions' element={<Submissions />} />
          <Route path='/papers' element={<Papers />} />
          <Route path='/editorial' element={<Editorial />} />
          <Route path='/publication' element={<Publication />} />
          {/* <Route path='/announcement' element={<Announcement />} /> */}
          {/* <Route path='/archive' element={<Archive />} /> */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </userContext.Provider>
  )
}

export default App;
