import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider from './context/AdminContext.jsx'
import DoctorContextProvider from './context/DoctorContext.jsx'
import AppContextProvider from './context/AppContext.jsx'
import axios from 'axios'

// Setting the base URL for the backend
// In production (Vercel): Use VITE_BACKEND_URL environment variable
// In development: If not set, relative paths will be proxied to localhost:8080 by Vite
const backendUrl = import.meta.env.VITE_BACKEND_URL
if (backendUrl) {
  axios.defaults.baseURL = backendUrl
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextProvider>
      <DoctorContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </DoctorContextProvider>
    </AdminContextProvider>
  </BrowserRouter>

)
