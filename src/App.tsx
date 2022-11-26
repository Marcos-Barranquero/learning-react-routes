import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Admin, Analytics, DashBoard, Landing, UserHome } from './pages'
import { useLogin } from './loginHook'
import { ProtectedRoute } from './components/ProtectRoute'

const App = (): JSX.Element => {
  const { user, login, logout } = useLogin()

  return (
    <BrowserRouter>
      <Navigation />

      {user ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>}

      <Routes>
        <Route index element={<Landing />} />
        <Route path='/landing' element={<Landing />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path='/home' element={<UserHome />} />
          <Route path='/dashboard' element={<DashBoard />} />
        </Route>

        <Route
          path='/analytics'
          element={
            <ProtectedRoute user={user}>
              <Analytics />
            </ProtectedRoute>
          }
        ></Route>

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
