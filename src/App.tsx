import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Admin, Analytics, DashBoard, Landing, UserHome } from './pages'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/home' element={<UserHome />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='*' element={<h2>404 Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
