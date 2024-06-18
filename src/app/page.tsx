"use client"
import React from "react"
import Login from '@/containers/Login'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

const Home = () => {
  
  const router = useRouter()
  
  React.useEffect(() => {
    try {
      const userLogged = Cookies.get('SessionInfo')
      if (userLogged) {
        router.push('/resume')
      }
    } catch (error) {
        console.error(error)
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Login />
    </main>
  )
}

export default Home;