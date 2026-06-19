import { X } from 'lucide-react';
import { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export default function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [rut, setRut] = useState('');

  if (!isOpen) return null;

  const handleLogin = () => {
    onLogin();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-6">
          <div className="bg-[#0039A6] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Clave Única</h2>
          <p className="text-gray-600">Ingresa con tu RUT y clave única del Estado de Chile</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              RUT
            </label>
            <input
              type="text"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
              placeholder="12.345.678-9"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0039A6] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Clave Única
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0039A6] focus:border-transparent"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-[#0039A6] text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
          >
            Ingresar
          </button>

          <div className="text-center text-sm text-gray-600">
            <a href="#" className="text-[#0039A6] hover:underline">
              ¿Olvidaste tu clave?
            </a>
            <span className="mx-2">•</span>
            <a href="#" className="text-[#0039A6] hover:underline">
              Crear Clave Única
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
