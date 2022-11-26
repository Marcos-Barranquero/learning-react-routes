import { Navigate, Outlet } from 'react-router-dom'

type ProtectRouteProps = {
  isAllowed: boolean
  redirectTo?: string
  children?: JSX.Element
}

export const ProtectedRoute = ({ isAllowed, children, redirectTo = '/landing' }: ProtectRouteProps): JSX.Element => {
  if (!isAllowed) return <Navigate to={redirectTo} />

  return children ? children : <Outlet />
}
