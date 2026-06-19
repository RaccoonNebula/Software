import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface SeccionFormularioProps {
  titulo: string;
  descripcion: string;
  icon: LucideIcon;
  color: string;
  habilitado: boolean;
  enFormulario: boolean;
  onIniciarFormulario: () => void;
  onVolverDescripcion: () => void;
  children: ReactNode;
  contenidoDescripcion?: ReactNode;
}

export default function SeccionFormulario({
  titulo,
  descripcion,
  icon: Icon,
  color,
  habilitado,
  enFormulario,
  onIniciarFormulario,
  onVolverDescripcion,
  children,
  contenidoDescripcion,
}: SeccionFormularioProps) {
  if (!habilitado) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 opacity-50">
        <div className="flex items-center gap-3 mb-4">
          <div className={`${color} text-white p-3 rounded-lg`}>
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{titulo}</h2>
            <p className="text-gray-600">{descripcion}</p>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          <p className="text-yellow-800 text-sm">
            🔒 <strong>Formulario bloqueado:</strong> Primero completa el asistente "¿Qué formularios necesito?" para habilitar este formulario.
          </p>
        </div>
      </div>
    );
  }

  if (enFormulario) {
    return (
      <div className="space-y-4">
        <button
          onClick={onVolverDescripcion}
          className="text-gray-600 hover:text-gray-800 flex items-center gap-2 text-sm"
        >
          ← Volver a la descripción
        </button>
        {children}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className={`${color} text-white p-3 rounded-lg`}>
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{titulo}</h2>
          <p className="text-gray-600">{descripcion}</p>
        </div>
      </div>

      {contenidoDescripcion}

      <button
        onClick={onIniciarFormulario}
        className={`w-full ${color} text-white py-3 rounded-lg hover:opacity-90 transition-all font-medium mt-6`}
      >
        Click aquí para realizar este formulario
      </button>
    </div>
  );
}
