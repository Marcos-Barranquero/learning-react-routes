import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Admin, Analytics, DashBoard, Landing, UserHome } from '../pages'
import { User } from '../loginHook'
import { ProtectedRoute } from './ProtectRoute'

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

type AppRouterProps = {
  user: User | null
}
export const AppRouter = ({ user }: AppRouterProps) => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/landing' element={<Landing />} />
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path='/home' element={<UserHome />} />
            <Route path='/dashboard' element={<DashBoard />} />
          </Route>
          <Route
            path='/analytics'
            element={
              <ProtectedRoute isAllowed={!!user && user.permissions.includes('analize')} redirectTo='/home'>
                <Analytics />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin'
            element={
              <ProtectedRoute isAllowed={!!user && user.permissions.includes('admin')} redirectTo='/home'>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<h2>404 Not Found</h2>} /> {/* This should be returned by the server so the CEO can see it*/}
        </Routes>
      </BrowserRouter>
    </>
  )
}
