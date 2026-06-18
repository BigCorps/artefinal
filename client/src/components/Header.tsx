import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Header Component
 * Modernismo Técnico Elegante - Minimalist header with CMYK gradient accent
 * Features: Responsive navigation, sticky positioning, brand logo
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src="/arte.png"
              alt="ArteFinal"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-display font-bold text-lg text-gray-900 group-hover:text-cyan-600 transition-colors">
            ArteFinal.app
          </span>
        </a>



        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://artefinal.app/arte/login">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Entrar
            </Button>
          </a>
          <a href="https://artefinal.app">
            <Button
              className="bg-gradient-to-r from-cyan-600 to-magenta-700 hover:from-cyan-600 hover:to-magenta-700 text-white font-semibold"
            >
              Começar Grátis
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-cyan-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
              <a href="https://artefinal.app/arte/login" className="w-full">
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 w-full"
                >
                  Entrar
                </Button>
              </a>
              <a href="https://artefinal.app" className="w-full">
                <Button
                  className="bg-gradient-to-r from-cyan-600 to-magenta-700 hover:from-cyan-600 hover:to-magenta-700 text-white font-semibold w-full"
                >
                  Começar Grátis
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
