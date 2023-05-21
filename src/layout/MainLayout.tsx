import Navbar from '@/containers/navbar/Navbar'
import React, { ReactNode } from 'react'

interface MainLayoutProps {
    children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <Navbar children={children} />
  )
}

export default MainLayout