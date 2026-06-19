"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  if (!mounted) return null

  const linkClass = (path) =>
    pathname === path
      ? "border-b border-[#e0e3e5] pb-1 transition-all"
      : "hover:border-b hover:border-[#e0e3e5] transition-all"

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#101415]/30 backdrop-blur-xl border-b border-white/10 text-[#E0E3E5]">

        <div className="flex items-center justify-between px-4 sm:px-10 lg:px-20 py-4">

           {/* LOGO */}
          <div className="font-bold text-lg">
            Shahsawar
          </div>

          {/* MENU ICON */}
          <button
            className="sm:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>

         

          {/* DESKTOP LINKS */}
          <div className="hidden sm:flex items-center gap-8">

            <ul className="flex gap-10 text-sm">
              <li><Link href="/" className={linkClass("/")}>Home</Link></li>
              <li><Link href="/About" className={linkClass("/About")}>About</Link></li>
              <li><Link href="/Skills" className={linkClass("/Skills")}>Skills</Link></li>
            </ul>

            <a href="tel:+923098841413">
              <button className="px-6 py-2 rounded-full text-sm font-semibold bg-linear-to-r from-[#2e5bff] to-[#00d2ff] hover:scale-105 transition-all hover:shadow-[0_5px_15px_rgba(46,91,255,0.4),0_0_20px_rgba(0,210,255,0.3)]">
                Contact
              </button>
            </a>

          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-slate-900 z-50 p-6 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 mt-10 text-white text-lg">

          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/About" onClick={() => setOpen(false)}>About</Link>
          <Link href="/Skills" onClick={() => setOpen(false)}>Skills</Link>

        </div>
      </div>
    </>
  )
}

export default Navbar