// File: app/qr-generator/page.tsx
"use client";

import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
//   import QRCode from 'qrcode.react'

export default function QRGenerator(props) {
  const { value } = props;

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="bg-white p-1 rounded shadow-md">
        <QRCodeSVG value={value} className="h-10 w-10"/>
      </div>
    </div>
  );
}
