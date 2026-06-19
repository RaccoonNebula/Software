import { FileEdit, Upload, CheckSquare, UserCheck, QrCode, Check } from 'lucide-react';

export default function ProcesoTimeline() {
  const pasos = [
    {
      icon: FileEdit,
      titulo: 'Completar Solicitud',
      descripcion: 'Llena el formulario con tus datos de viaje',
      color: 'bg-blue-500',
    },
    {
      icon: Upload,
      titulo: 'Subir Documentos',
      descripcion: 'Carga pasaporte, tickets y documentación requerida',
      color: 'bg-purple-500',
    },
    {
      icon: CheckSquare,
      titulo: 'Validación Automática',
      descripcion: 'El sistema verifica que todo esté completo',
      color: 'bg-green-500',
    },
    {
      icon: UserCheck,
      titulo: 'Revisión de Funcionario',
      descripcion: 'Un funcionario revisa y valida tu solicitud',
      color: 'bg-orange-500',
    },
    {
      icon: QrCode,
      titulo: 'Aprobación y QR',
      descripcion: 'Recibe tu código QR para presentar en frontera',
      color: 'bg-indigo-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-lg text-gray-600">
            Proceso simple y rápido para tu declaración aduanera
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gray-200" />
            <div className="absolute top-16 left-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-indigo-500" style={{ width: '80%' }} />

            <div className="grid grid-cols-5 gap-4 relative">
              {pasos.map((paso, index) => {
                const Icon = paso.icon;
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`${paso.color} w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg mb-6 relative z-10 ring-4 ring-white`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-gray-900 mb-2">
                        {paso.titulo}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {paso.descripcion}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {pasos.map((paso, index) => {
            const Icon = paso.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="relative">
                  <div className={`${paso.color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  {index < pasos.length - 1 && (
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gray-200" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-bold text-gray-900 mb-2">
                    {paso.titulo}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {paso.descripcion}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
