
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chat',
    description: 'Chat with your friends and invite them to play the game',
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