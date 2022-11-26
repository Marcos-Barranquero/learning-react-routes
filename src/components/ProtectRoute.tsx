import { useLogin, User } from '../loginHook'
import { Navigate, Outlet } from 'react-router-dom'

type ProtectRouteProps = {
  user: User | null
  redirectTo?: string
  children?: JSX.Element
}
export const ProtectedRoute = ({ user, children, redirectTo = '/landing' }: ProtectRouteProps): JSX.Element => {
  if (!user) return <Navigate to={redirectTo} />

  return children ? children : <Outlet /> // children
}
