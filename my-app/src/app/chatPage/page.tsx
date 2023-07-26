
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chat',
  };

export default function ChatPage() {

  return (
      <h1 className="text-4xl font-bold mb-4">Hello from Chat</h1>
  )
}