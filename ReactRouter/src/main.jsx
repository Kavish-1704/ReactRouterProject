import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
    
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/home'
import About from './components/aboutus'
import Contact from './components/contactus'
import User from './components/user'
import Github, { GithubInfoLoader } from './components/github'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },{
//         path:"About",
//         element: <About />
//       },{
//         path:"/contact_us",
//         element: <Contact />
//       }
//     ],
//   }
// ])
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
     <Route path='' element={<About/>}/>
     <Route path='contact_us' element={<Contact/>}/>
     <Route path='About' element = {<Home/>}/>
     <Route path='user/:userid' element = {<User />}/>
     <Route 
     loader= {GithubInfoLoader}
     path='github' 
     element = {<Github/>}/>

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
