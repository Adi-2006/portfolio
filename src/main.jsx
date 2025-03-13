import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter ,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import About from'./Compo/About.jsx'
import Contact from './Compo/Contact.jsx'
import Home from './Compo/Home.jsx'
import Skills from './Compo/Skills.jsx'
import Projects from './Compo/Projects.jsx'


const Router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
      <Route path='' element = {<Home/>} />
      <Route path='about' element = {<About/>} />
      <Route path='skills' element = {<Skills/>} />
      <Route path='projects' element = {<Projects/>} />
      <Route path='contact' element = {<Contact/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>,
)