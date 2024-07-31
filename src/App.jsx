/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import MainLayout from "./layout/MainLayout"

function App() {
  
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />
    }
  ])

  return <RouterProvider router={routes} />
}

export default App
