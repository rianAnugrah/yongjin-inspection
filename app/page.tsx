"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PublicHomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, []);
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
</div>
  );
}
