import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Admin, Analytics, DashBoard, Landing, UserHome } from './pages'
const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
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

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/landing'>Landing</Link>
        </li>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/analytics'>Analytics</Link>
        </li>
        <li>
          <Link to='/admin'>Admin</Link>
        </li>
      </ul>
    </nav>
  )
}

export default App
