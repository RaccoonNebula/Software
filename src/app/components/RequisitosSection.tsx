import { FileText, CheckCircle, AlertCircle, Download, ExternalLink } from 'lucide-react';
import { downloadTestPDF } from '../utils/downloadPDF';

export default function RequisitosSection() {
  const requisitosGenerales = [
    {
      titulo: 'Pasaporte Vigente',
      descripcion: 'Debe tener una validez mínima de 6 meses desde la fecha de ingreso a Chile',
      obligatorio: true,
    },
    {
      titulo: 'Tarjeta de Turismo',
      descripcion: 'Se entrega al ingresar a Chile. Conservarla durante toda la estadía',
      obligatorio: true,
    },
    {
      titulo: 'Declaración Jurada de Salud',
      descripcion: 'Formulario obligatorio en caso de síntomas de enfermedad',
      obligatorio: false,
    },
    {
      titulo: 'Comprobante de Alojamiento',
      descripcion: 'Reserva de hotel o carta de invitación de residente en Chile',
      obligatorio: false,
    },
    {
      titulo: 'Pasaje de Retorno',
      descripcion: 'Comprobante de vuelo o medio de transporte de salida',
      obligatorio: false,
    },
  ];

  const documentosAdmitidos = [
    'Pasaporte vigente',
    'Cédula de identidad (para países Mercosur)',
    'Certificado de vacunación COVID-19',
    'Visa (según país de origen)',
    'Permiso notarial (menores de edad)',
    'Documentos del vehículo (permiso de circulación)',
  ];

  const prohibiciones = [
    {
      categoria: 'Productos Agrícolas No Permitidos',
      items: [
        'Frutas y verduras frescas sin certificación fitosanitaria',
        'Semillas sin autorización del SAG',
        'Plantas con tierra en las raíces',
        'Productos derivados de animales sin inspección veterinaria',
      ],
    },
    {
      categoria: 'Sustancias Prohibidas',
      items: [
        'Drogas y estupefacientes',
        'Armas de fuego sin permiso',
        'Material pornográfico',
        'Productos falsificados o piratería',
      ],
    },
    {
      categoria: 'Restricciones Monetarias',
      items: [
        'Montos superiores a USD $10,000 deben ser declarados',
        'Joyas y objetos de valor deben ser registrados',
      ],
    },
  ];

  const preguntasFrecuentes = [
    {
      pregunta: '¿Puedo ingresar alimentos a Chile?',
      respuesta: 'Sí, pero deben ser declarados en el formulario SAG. Algunos productos requieren certificación sanitaria. Carnes, lácteos y productos vegetales frescos están sujetos a inspección.',
    },
    {
      pregunta: '¿Qué pasa si no declaro productos?',
      respuesta: 'La no declaración de productos puede resultar en multas de hasta 20 UTM (aproximadamente $1,000 USD) y el decomiso inmediato de los productos.',
    },
    {
      pregunta: '¿Cuánto dinero puedo llevar sin declarar?',
      respuesta: 'Hasta USD $10,000 o su equivalente en otras monedas. Montos superiores deben ser declarados en el formulario de aduanas.',
    },
    {
      pregunta: '¿Necesito visa para entrar a Chile?',
      respuesta: 'Depende de tu nacionalidad. Ciudadanos de la mayoría de países americanos y europeos no requieren visa para turismo por hasta 90 días.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Requisitos y Documentación
            </h1>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas saber para tu trámite aduanero
            </p>
          </div>

          {/* Requisitos Generales */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="h-7 w-7 text-[#1e3a8a]" />
              Requisitos Generales de Ingreso
            </h2>

            <div className="space-y-4">
              {requisitosGenerales.map((req, index) => (
                <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                    req.obligatorio ? 'bg-red-100' : 'bg-blue-100'
                  }`}>
                    {req.obligatorio ? (
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    ) : (
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900">{req.titulo}</h3>
                      {req.obligatorio && (
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">
                          OBLIGATORIO
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{req.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documentos Admitidos */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Documentos de Identificación Admitidos
              </h2>
              <ul className="space-y-3">
                {documentosAdmitidos.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Descargables */}
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold mb-6">
                Formularios Descargables
              </h2>
              <div className="space-y-3">
                {[
                  'Declaración Jurada SAG/Aduanas (PDF)',
                  'Formulario de Autorización de Menores (PDF)',
                  'Solicitud de Permiso de Vehículo (PDF)',
                  'Guía de Productos Permitidos (PDF)',
                ].map((doc, index) => (
                  <button
                    key={index}
                    onClick={() => downloadTestPDF()}
                    className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg transition-all text-left"
                  >
                    <span className="text-sm">{doc}</span>
                    <Download className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Prohibiciones */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="h-7 w-7 text-red-600" />
              Productos Prohibidos y Restringidos
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {prohibiciones.map((prohibicion, index) => (
                <div key={index} className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-bold text-red-900 mb-4">{prohibicion.categoria}</h3>
                  <ul className="space-y-2">
                    {prohibicion.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-red-800">
                        <span className="text-red-600 font-bold">×</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Preguntas Frecuentes */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-6">
              {preguntasFrecuentes.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    {faq.pregunta}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.respuesta}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between bg-blue-50 p-6 rounded-xl">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    ¿Tienes más preguntas?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Consulta nuestra guía completa o contacta a soporte
                  </p>
                </div>
                <button className="flex items-center gap-2 bg-[#1e3a8a] text-white px-6 py-3 rounded-lg hover:bg-[#1e40af] transition-all">
                  Ver Guía Completa
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
