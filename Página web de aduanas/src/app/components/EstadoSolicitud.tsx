import { Search, QrCode, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function EstadoSolicitud() {
  const [codigoSolicitud, setCodigoSolicitud] = useState('');
  const [resultado, setResultado] = useState<any>(null);

  const handleBuscar = (e: React.FormEvent) => {
    e.preventDefault();
    setResultado({ noEncontrada: true, codigo: codigoSolicitud });
  };

  const estadoConfig = {
    pendiente: {
      icon: Clock,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      label: 'Pendiente de Revisión',
    },
    revision: {
      icon: AlertCircle,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      label: 'En Revisión',
    },
    aprobada: {
      icon: CheckCircle,
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200',
      label: 'Aprobada',
    },
    rechazada: {
      icon: XCircle,
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-200',
      label: 'Rechazada',
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Consulta tu Solicitud
          </h2>
          <p className="text-lg text-gray-600">
            Ingresa tu código de solicitud o escanea tu QR
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <form onSubmit={handleBuscar} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Código de Solicitud
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={codigoSolicitud}
                      onChange={(e) => setCodigoSolicitud(e.target.value)}
                      placeholder="Ej: ADU-2026-00123"
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#1e3a8a] text-white py-3 rounded-xl font-semibold hover:bg-[#1e40af] transition-all shadow-lg hover:shadow-xl"
                >
                  Buscar Solicitud
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  <QrCode className="h-5 w-5" />
                  Escanear QR
                </button>
              </div>
            </form>
          </div>

          {/* Results */}
          {resultado && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 p-6 rounded-xl">
                <XCircle className="h-8 w-8 text-gray-400 flex-shrink-0" />
                <div>
                  <div className="font-bold text-gray-700 text-lg">Solicitud no encontrada</div>
                  {resultado.codigo && (
                    <div className="text-sm text-gray-500 mt-1">
                      No se encontró ninguna solicitud con el código <span className="font-mono font-semibold">{resultado.codigo}</span>.
                    </div>
                  )}
                  <div className="text-sm text-gray-500 mt-1">
                    Verifique el código ingresado e intente nuevamente.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
