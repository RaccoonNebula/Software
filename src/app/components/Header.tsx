import { Menu, User } from 'lucide-react';
import { useState } from 'react';
import logo from '../../imports/652354343_1254984190143031_5421609110339168639_n.jpg';

interface HeaderProps {
  onLoginClick: () => void;
  isLoggedIn: boolean;
}

export default function Header({ onLoginClick, isLoggedIn }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0039A6] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Chile Aduanas" className="h-14 w-14 rounded-full" />
            <div>
              <h1 className="text-xl font-bold">Chile Aduanas</h1>
              <p className="text-sm text-blue-100">Sistema de Trámites Aduaneros</p>
            </div>
          </div>

          <button
            onClick={onLoginClick}
            className="hidden md:flex items-center gap-2 bg-white text-[#0039A6] px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <User className="h-5 w-5" />
            <span>{isLoggedIn ? 'Mi Cuenta' : 'Ingresar con Clave Única'}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mt-4 md:hidden">
            <button
              onClick={onLoginClick}
              className="w-full flex items-center justify-center gap-2 bg-white text-[#0039A6] px-4 py-2 rounded-lg"
            >
              <User className="h-5 w-5" />
              <span>{isLoggedIn ? 'Mi Cuenta' : 'Ingresar con Clave Única'}</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
