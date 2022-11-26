import { useLogin, User } from '../loginHook'
import { Navigate } from 'react-router-dom'

type ProtectRouteProps = {
  children: JSX.Element
  user: User | null
  redirectTo?: string
}
export const ProtectedRoute = ({ children, user, redirectTo = '/landing' }: ProtectRouteProps): JSX.Element => {
  if (!user) return <Navigate to={redirectTo} />

  return children
}
