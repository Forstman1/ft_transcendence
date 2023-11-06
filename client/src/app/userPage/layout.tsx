
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