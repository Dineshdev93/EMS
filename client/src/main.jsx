import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Homeroute from './routes/Homeroute.jsx'
import Addemployee from './Components/Addemployee.jsx'
import Empdtlsroute from './routes/Empdtlsroute.jsx'
import { Provider }  from 'react-redux'
import empstore from './Store/empStore.js'
import Editemployee from './Components/Editemployee.jsx'
const paths = createBrowserRouter([
  {
    path : '/' , element:<App/>,
    children : [
      {path : '/',element:<Homeroute/>},
      {path : '/addemp', element:<Addemployee/>},
      {path : '/details',element:<Empdtlsroute/>},
      {path : '/editemp/:id',element:<Editemployee/>},

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={empstore}>
     <RouterProvider router={paths}/>
    </Provider>
  </React.StrictMode>,
)
