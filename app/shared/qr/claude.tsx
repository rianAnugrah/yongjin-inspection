// File: package.json
{
    "name": "nextjs-qr-app",
    "version": "0.1.0",
    "private": true,
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "next lint"
    },
    "dependencies": {
      "next": "13.4.19",
      "react": "18.2.0",
      "react-dom": "18.2.0",
      "react-qr-reader": "^3.0.0-beta-1",
      "qrcode.react": "^3.1.0"
    },
    "devDependencies": {
      "@types/node": "20.5.9",
      "@types/react": "18.2.21",
      "@types/react-dom": "18.2.7",
      "autoprefixer": "10.4.15",
      "postcss": "8.4.29",
      "tailwindcss": "3.3.3",
      "typescript": "5.2.2"
    }
  }
  
  // File: app/layout.tsx
  import './globals.css'
  import type { Metadata } from 'next'
  
  export const metadata: Metadata = {
    title: 'QR Code App',
    description: 'QR Code Scanner and Generator',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }
  
  
  
  
  // File: app/globals.css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;