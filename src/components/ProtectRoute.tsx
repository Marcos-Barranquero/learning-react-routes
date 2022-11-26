import { useLogin, User } from '../loginHook'
import { Navigate } from 'react-router-dom'

type ProtectRouteProps = {
  children: JSX.Element,
  user: User | null
}
export const ProtectedRoute = ({ children, user }: ProtectRouteProps): JSX.Element => {
  if (!user) return <Navigate to='/landing' />

  return children
}
