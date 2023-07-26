import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
};


export default function Home() {
  return (
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
  )
}
