"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full border-b">
      <div className="container flex h-16 items-center px-4 mx-auto">
        <Link href="/" className="font-bold text-xl">
          더드림 국제특허법률사무소
        </Link>
        <div className="ml-auto flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection("practice-areas")} 
            className="hover:text-gray-600"
          >
            업무영역
          </button>
          <button 
            onClick={() => scrollToSection("members")} 
            className="hover:text-gray-600"
          >
            구성원
          </button>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="hover:text-gray-600"
          >
            오시는 길
          </button>
        </div>
      </div>
    </nav>
  );
} 