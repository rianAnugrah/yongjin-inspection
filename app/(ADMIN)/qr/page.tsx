  // File: app/page.tsx
  import Link from 'next/link'
  
  export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">QR Code App</h1>
        <div className="space-y-4">
          <Link href="/qr/qr-scanner" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            QR Scanner
          </Link>
          <Link href="/qr/qr-generator" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            QR Generator
          </Link>
        </div>
      </div>
    )
  }
  