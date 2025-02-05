import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'

import Contact from './components/contact.jsx'
import Skills from './components/Skills.jsx'

import Projects from './components/Project.jsx'

import About from './components/About.jsx'

const router = createBrowserRouter(   // i create a router for routerProvider 
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/Skills' element={<Skills />} />
      <Route path='/Projects' element={<Projects />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
