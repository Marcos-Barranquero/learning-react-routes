import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Admin, Analytics, DashBoard, Landing, UserHome } from './pages'
import { useState } from 'react'

type User = {
  id: number
  name: string
}

const App = () => {
  const [user, setUser] = useState(null as User | null)

  const login = () => {
    setUser({
      id: 1,
      name: 'John Doe',
    })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <BrowserRouter>
      <Navigation />

      {user ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>}

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
