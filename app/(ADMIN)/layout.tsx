import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import NavDesktop from "../shared/nav-desktop";
import { FaBarcode, FaCog, FaDatabase, FaFile, FaHome, FaSearch } from "react-icons/fa";
import { MdQrCodeScanner } from "react-icons/md";
import NavMobile from "../shared/nav-mobile";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Admin | Yongjin Inspections",
  description: "yongjin inspection app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menus = [
   
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <FaHome />,
    },
    {
      label: "QR Scan",
      href: "/scanner",
      icon: <MdQrCodeScanner />,
    },
    {
      label: "Inspect",
      href: "/inspections",
      icon: <FaSearch />,
    },
    {
      label: "Master",
      href: "/master-list",
      icon: <FaDatabase />,
    },
    {
      label: "Report",
      href: "/report",
      icon: <FaFile />,
    },
    {
      label: "Setting",
      href: "/setting",
      icon: <FaCog />,
    },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <NavDesktop menus={menus} />
        <NavMobile menus={menus} />
        <div className="w-screen p-4 lg:p-0  lg:pl-20 bg-[#1b1c1d] text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
