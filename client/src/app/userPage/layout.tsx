<<<<<<< HEAD
import React from 'react'
=======

>>>>>>> 6c16c6a341267544ba4723ed722ea6fa711c003e
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'User Page',
  description: 'more information about the user',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

      <>
        {children}
      </>
  )
}