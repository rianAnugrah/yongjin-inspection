// File: app/qr-scanner/page.tsx
'use client'
  
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import { QrReader } from 'react-qr-reader';

export default function QRScanner() {
  const [data, setData] = useState('No result')
  const [latitude, setLatitude] = useState<number | null>(null)
  const [longitude, setLongitude] = useState<number | null>(null)

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
        },
        (error) => {
          console.error('Error getting location:', error)
        }
      )
    } else {
      console.log('Geolocation is not available')
    }
  }, [])

  const handleScan = (result: any, error: any) => {
    if (!!result) {
      setData(result?.text)
      window.location.href = result?.text
    }

    if (!!error) {
      console.info(error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-3xl font-bold mb-4">QR Scanner</h1>
      <div className="w-full max-w-md">
        <QrReader
          onResult={handleScan}
          constraints={{ facingMode: 'environment' }}
          className="w-full"
        />
      </div>
      <p className="mt-4">Scanned data: {data}</p>
      {latitude && longitude && (
        <p className="mt-2">
          GPS: {latitude.toFixed(6)}, {longitude.toFixed(6)}
        </p>
      )}
    </div>
  )
}
