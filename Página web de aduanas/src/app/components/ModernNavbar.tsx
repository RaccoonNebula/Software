import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import logo from '../../imports/652354343_1254984190143031_5421609110339168639_n.jpg';

interface ModernNavbarProps {
  onNavigate: (section: string) => void;
  onLoginClick: () => void;
  activeSection: string;
  isLoggedIn: boolean;
}

export default function ModernNavbar({ onNavigate, onLoginClick, activeSection, isLoggedIn }: ModernNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'formularios', label: 'Formularios' },
    { id: 'estado', label: 'Estado de Solicitud' },
    { id: 'requisitos', label: 'Requisitos' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('inicio')}>
            <img src={logo} alt="Aduanas Chile" className="h-12 w-12 rounded-full" />
            <div>
              <h1 className="font-bold text-xl text-[#1e3a8a]">Aduanas Chile</h1>
              <p className="text-xs text-gray-500">Gobierno Digital</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors relative pb-1 ${
                  activeSection === item.id
                    ? 'text-[#1e3a8a]'
                    : 'text-gray-600 hover:text-[#1e3a8a]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1e3a8a] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Login Button */}
          <button
            onClick={onLoginClick}
            className="hidden lg:flex items-center gap-2 bg-[#1e3a8a] text-white px-6 py-2.5 rounded-lg hover:bg-[#1e40af] transition-all shadow-sm hover:shadow-md"
          >
            <User className="h-4 w-4" />
            <span className="text-sm font-medium">
              {isLoggedIn ? 'Mi Cuenta' : 'Iniciar Sesión'}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-[#1e3a8a] font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onLoginClick();
                  setMobileMenuOpen(false);
                }}
                className="mt-2 flex items-center justify-center gap-2 bg-[#1e3a8a] text-white px-6 py-3 rounded-lg"
              >
                <User className="h-4 w-4" />
                <span>{isLoggedIn ? 'Mi Cuenta' : 'Iniciar Sesión'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
