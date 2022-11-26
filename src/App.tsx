import { useLogin } from './loginHook'
import { AppRouter } from './components/AppRouter'

type LoginButtonProps = { login: () => void }
type LogoutButtonProps = { logout: () => void }

const LoginButton = ({ login }: LoginButtonProps): JSX.Element => {
  return <button onClick={login}>Login</button>
}

const LogoutButton = ({ logout }: LogoutButtonProps): JSX.Element => {
  return <button onClick={logout}>Logout</button>
}

const App = (): JSX.Element => {
  const { user, login, logout } = useLogin()

  return (
    <>
      {user ? <LogoutButton logout={logout} /> : <LoginButton login={login} />}
      <AppRouter user={user} />
    </>
  )
}

export default App
