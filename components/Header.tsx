'use client'

import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">Serpzilla</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-8">
                <a href="#features" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">Features</a>
                <a href="#pricing" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">Pricing</a>
                <a href="#testimonials" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">Testimonials</a>
                <a href="#faq" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">FAQ</a>
                <a href="#blog" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">Blog</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <button className="text-primary hover:text-blue-700 px-4 py-2 text-sm font-medium">
                Log in
              </button>
              <button className="bg-primary text-white hover:bg-blue-700 px-6 py-2 rounded-lg text-sm font-medium">
                Sign up
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">Testimonials</a>
            <a href="#faq" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">FAQ</a>
            <a href="#blog" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">Blog</a>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <button className="w-full text-primary hover:text-blue-700 px-3 py-2 text-base font-medium text-left">
                Log in
              </button>
              <button className="w-full bg-primary text-white hover:bg-blue-700 px-3 py-2 rounded-lg text-base font-medium mt-2">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
