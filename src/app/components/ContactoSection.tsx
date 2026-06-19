import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HeadphonesIcon } from 'lucide-react';
import { useState } from 'react';

export default function ContactoSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      titulo: 'Teléfono de Atención',
      items: [
        { label: 'Mesa de Ayuda', value: '+56 2 2397 5000' },
        { label: 'Emergencias 24/7', value: '600 123 4567' },
        { label: 'WhatsApp', value: '+56 9 8765 4321' },
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Mail,
      titulo: 'Correo Electrónico',
      items: [
        { label: 'Consultas Generales', value: 'consultas@aduana.gob.cl' },
        { label: 'Soporte Técnico', value: 'soporte@aduana.gob.cl' },
        { label: 'Denuncias', value: 'denuncias@aduana.gob.cl' },
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: MapPin,
      titulo: 'Oficinas Principales',
      items: [
        { label: 'Casa Matriz', value: 'Av. Bulnes 80, Santiago Centro' },
        { label: 'Aeropuerto SCL', value: 'Terminal Internacional, Pudahuel' },
        { label: 'Paso Los Libertadores', value: 'Ruta 60, Los Andes' },
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Clock,
      titulo: 'Horarios de Atención',
      items: [
        { label: 'Lunes a Viernes', value: '8:00 - 18:00 hrs' },
        { label: 'Sábados', value: '9:00 - 13:00 hrs' },
        { label: 'Emergencias', value: '24/7 todos los días' },
      ],
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const canalesAtencion = [
    {
      icon: HeadphonesIcon,
      titulo: 'Call Center',
      descripcion: 'Atención telefónica personalizada',
      horario: 'Lun - Vie: 8:00 - 20:00',
      contacto: '600 123 4567',
    },
    {
      icon: MessageCircle,
      titulo: 'Chat en Línea',
      descripcion: 'Respuestas inmediatas por chat',
      horario: 'Lun - Vie: 9:00 - 18:00',
      contacto: 'Iniciar chat',
    },
    {
      icon: Mail,
      titulo: 'Email',
      descripcion: 'Respuesta en 24-48 horas hábiles',
      horario: 'Disponible siempre',
      contacto: 'consultas@aduana.gob.cl',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contacto y Soporte
            </h1>
            <p className="text-xl text-gray-600">
              Estamos aquí para ayudarte con tus consultas
            </p>
          </div>

          {/* Información de Contacto */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl mb-6`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    {info.titulo}
                  </h2>
                  <div className="space-y-4">
                    {info.items.map((item, idx) => (
                      <div key={idx}>
                        <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                        <div className="font-semibold text-gray-900">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Canales de Atención */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Canales de Atención Disponibles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {canalesAtencion.map((canal, index) => {
                const Icon = canal.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1e3a8a] rounded-full mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{canal.titulo}</h3>
                    <p className="text-sm text-gray-600 mb-3">{canal.descripcion}</p>
                    <div className="text-xs text-gray-500 mb-3">{canal.horario}</div>
                    <button className="text-[#1e3a8a] font-medium text-sm hover:underline">
                      {canal.contacto}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formulario */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envíanos un Mensaje
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-gray-600">
                    Hemos recibido tu mensaje. Te responderemos pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Juan Pérez"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="correo@ejemplo.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+56 9 1234 5678"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Asunto *
                      </label>
                      <select
                        required
                        value={formData.asunto}
                        onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Seleccione un asunto</option>
                        <option value="consulta">Consulta General</option>
                        <option value="soporte">Soporte Técnico</option>
                        <option value="reclamo">Reclamo</option>
                        <option value="sugerencia">Sugerencia</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Emergencias */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-lg mb-3">Emergencias 24/7</h3>
                <p className="text-red-100 text-sm mb-4">
                  Para situaciones urgentes en frontera o aduanas
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-3">
                  <div className="text-xs text-red-100 mb-1">Línea Directa</div>
                  <div className="text-xl font-bold">600 123 4567</div>
                </div>
                <button className="w-full bg-white text-red-600 py-2 rounded-lg font-medium hover:bg-red-50 transition-all">
                  Llamar Ahora
                </button>
              </div>

              {/* Redes Sociales */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Síguenos</h3>
                <div className="space-y-3">
                  {[
                    { red: 'Facebook', usuario: '@AduanaChile' },
                    { red: 'Twitter', usuario: '@Aduana_CL' },
                    { red: 'Instagram', usuario: '@aduana.chile' },
                    { red: 'LinkedIn', usuario: 'Aduanas Chile' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all"
                    >
                      <div>
                        <div className="font-medium text-gray-900">{social.red}</div>
                        <div className="text-sm text-gray-500">{social.usuario}</div>
                      </div>
                      <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
