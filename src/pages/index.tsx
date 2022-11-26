import { User } from '../loginHook'
import { Navigate } from 'react-router-dom'

export const Landing = () => <h2>Landing page (Public) </h2>

type UserHomeProps = {
  user: User | null
}
export const UserHome = () => {
  return <h2>Home page (Private) </h2>
}

export const DashBoard = () => <h2>Dashboard page (Private) </h2>

export const Analytics = () => <h2>Analytics page (Private, permission: 'analize') </h2>

export const Admin = () => <h2>Analytics page (Private, permission: 'admin') </h2>
