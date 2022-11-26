import { useState } from 'react'
export type User = {
  id: number
  name: string
}
export const useLogin = () => {
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

  return {
    user,
    login,
    logout,
  }
}
