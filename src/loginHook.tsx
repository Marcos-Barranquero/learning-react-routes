import { useState } from 'react'
export type User = {
  id: number
  name: string
  permissions: ['admin' | 'analize' | 'other']
}

const defaultUser: User = {
  id: 1,
  name: 'John Doe',
  permissions: ['analize'],
}

export const useLogin = () => {
  const [user, setUser] = useState(null as User | null)

  const login = () => {
    setUser(defaultUser)
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
