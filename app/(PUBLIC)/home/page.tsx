import Image from "next/image";
import { FaQuestionCircle, FaFile, FaSignInAlt } from "react-icons/fa";
import heroImage from "@/app/assets/img/hero.jpg"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <Image
        src={heroImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 "
      />
      <div className="absolute inset-0 backdrop-blur bg-gradient-to-tr from-black via-opacity-75 to-black opacity-50 z-10"></div>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-10">
          <h1 className="text-3xl bold w-full text-center">
            Yongjin Inspections
          </h1>
          <p className="h-full max-w-md text-center">
            Selamat datang di Aplikasi Inspeksi PT. Yongjin Javasuka Garment!
            Pastikan kualitas terbaik bersama kami, dari awal hingga akhir
            produksi. Bersama, kita wujudkan standar tertinggi!
          </p>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center z-10">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFile className="h-4 w-4" />
            Docs
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaQuestionCircle className="h-4 w-4" />
            Help
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/login"
            arget="_blank"
            rel="noopener noreferrer"
          >
            <FaSignInAlt className="h-4 w-4" />
            Login →
          </a>
        </footer>
      
    </div>
  );
}
