
  // File: app/qr-generator/page.tsx
  'use client'
  
  import { useState, useEffect } from 'react'
  import {QRCodeSVG} from 'qrcode.react';
//   import QRCode from 'qrcode.react'
  

  
  export default function QRGeneratorPage() {
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
  
    const url = "http://localhost:3000/dashboard/inspections/fire/01"
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">QR Generator</h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <QRCodeSVG value={url} />
        </div>
        <p className="mt-4">URL: {url}</p>
        {latitude && longitude && (
          <p className="mt-2">
            GPS: {latitude.toFixed(6)}, {longitude.toFixed(6)}
          </p>
        )}
      </div>
    )
  }
  