import { FileText, Upload, CheckCircle, Search, QrCode, Mail } from 'lucide-react';

export default function FuncionalidadesSection() {
  const funcionalidades = [
    {
      icon: FileText,
      titulo: 'Formularios Digitales',
      descripcion: 'Completa tus declaraciones aduaneras desde cualquier dispositivo',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Upload,
      titulo: 'Cargar Documentos',
      descripcion: 'Sube tus documentos en formato PDF de manera segura',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: CheckCircle,
      titulo: 'Validación Automática',
      descripcion: 'Sistema inteligente que valida tus documentos al instante',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Search,
      titulo: 'Seguimiento',
      descripcion: 'Consulta el estado de tu solicitud en tiempo real',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: QrCode,
      titulo: 'Código QR',
      descripcion: 'Genera tu código QR para agilizar el paso por aduanas',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Mail,
      titulo: 'Notificaciones',
      descripcion: 'Recibe actualizaciones por correo electrónico',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Funcionalidades del Sistema
          </h2>
          <p className="text-lg text-gray-600">
            Herramientas diseñadas para hacer tus trámites aduaneros más rápidos y eficientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {funcionalidades.map((func, index) => {
            const Icon = func.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105 cursor-pointer"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${func.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {func.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {func.descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
