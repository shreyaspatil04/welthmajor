import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[100vh] px-4 text-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>

      {/* Card Container */}
      <div className="relative bg-gray-900 bg-opacity-70 border border-blue-700 rounded-xl shadow-2xl p-10 max-w-md w-full backdrop-blur-md">
        
        {/* 404 Heading with red gradient */}
        <h1 className="text-8xl font-extrabold mb-4 bg-gradient-to-r from-red-500 via-red-700 to-red-900 bg-clip-text text-transparent animate-pulse">
          404
        </h1>

        {/* Icon + Subheading */}
        <div className="flex items-center gap-2 mb-4 text-2xl font-semibold">
          <AlertCircle className="w-7 h-7 text-blue-400" />
          <span>Page Not Found</span>
        </div>

        {/* Message */}
        <p className="text-gray-300 max-w-md mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist, was moved, 
          or you might have mistyped the URL.
        </p>

        {/* Button */}
        <Link href="/">
          <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-lg shadow-blue-500/30 transition-transform hover:scale-105">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
