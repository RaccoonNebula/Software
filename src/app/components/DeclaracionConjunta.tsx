import { FileText, AlertTriangle, User, Plane, Package, Check } from 'lucide-react';
import { useState } from 'react';

export default function DeclaracionConjunta() {
  const [formData, setFormData] = useState({
    // Datos del Viajero
    nombres: '',
    apellidos: '',
    rut: '',
    pasaporte: '',
    nacionalidad: '',
    fechaNacimiento: '',
    profesion: '',

    // Datos del Viaje
    tipoViaje: 'entrada',
    procedencia: '',
    destinoFinal: '',
    vueloNumero: '',
    fechaLlegada: '',
    motivoViaje: 'turismo',

    // Declaración de Equipaje
    numMaletas: '',
    declaraProductosAgricolas: 'no',
    declaraAlimentos: 'no',
    declaraAnimales: 'no',
    declaraDinero: 'no',
    montoDinero: '',

    // Productos Específicos
    llevaFrutas: false,
    llevaVerduras: false,
    llevaCarnes: false,
    llevaLacteos: false,
    llevaSemillas: false,
    llevaPlantas: false,
    llevaMedicamentos: false,

    // Detalles
    descripcionProductos: '',
    observaciones: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¡Declaración Enviada Exitosamente!
          </h2>
          <p className="text-gray-600 mb-4">
            Tu declaración conjunta SAG/Aduanas ha sido recibida y está siendo procesada.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
            <p className="text-[#1e3a8a] font-medium">
              Su solicitud estará resuelta en un plazo de 5 a 10 días hábiles.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <div className="font-bold text-[#1e3a8a] mb-2">Código de Solicitud</div>
            <div className="text-2xl font-mono font-bold text-gray-900">ADU-2026-{Math.floor(Math.random() * 90000) + 10000}</div>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Recibirás un correo electrónico con los detalles de tu solicitud y el código QR para presentar en el control aduanero.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-[#1e3a8a] text-white px-6 py-3 rounded-lg hover:bg-[#1e40af] transition-all"
          >
            Nueva Declaración
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl">
      <div className="border-b border-gray-200 p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Declaración Conjunta SAG/Aduanas</h2>
            <p className="text-gray-600">Formulario oficial para ingreso y salida de Chile</p>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-3">
          <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-red-800">
            <strong>Importante:</strong> Este formulario es obligatorio para todos los viajeros. La información falsa o incompleta puede resultar en sanciones legales y multas de hasta 50 UTM.
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-8">
        {/* Sección 1: Datos del Viajero */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <User className="h-6 w-6 text-[#1e3a8a]" />
            <h3 className="text-xl font-bold text-gray-900">1. Datos del Viajero</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombres *
              </label>
              <input
                type="text"
                required
                value={formData.nombres}
                onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Juan Carlos"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Apellidos *
              </label>
              <input
                type="text"
                required
                value={formData.apellidos}
                onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Pérez González"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                RUT *
              </label>
              <input
                type="text"
                required
                value={formData.rut}
                onChange={(e) => setFormData({ ...formData, rut: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="12.345.678-9"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Número de Pasaporte *
              </label>
              <input
                type="text"
                required
                value={formData.pasaporte}
                onChange={(e) => setFormData({ ...formData, pasaporte: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="AB123456"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nacionalidad *
              </label>
              <input
                type="text"
                required
                value={formData.nacionalidad}
                onChange={(e) => setFormData({ ...formData, nacionalidad: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Chilena"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha de Nacimiento *
              </label>
              <input
                type="date"
                required
                min="1900-01-01"
                value={formData.fechaNacimiento}
                onChange={(e) => setFormData({ ...formData, fechaNacimiento: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profesión u Ocupación
              </label>
              <input
                type="text"
                value={formData.profesion}
                onChange={(e) => setFormData({ ...formData, profesion: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ingeniero"
              />
            </div>
          </div>
        </div>

        {/* Sección 2: Datos del Viaje */}
        <div className="border-t pt-8">
          <div className="flex items-center gap-3 mb-6">
            <Plane className="h-6 w-6 text-[#1e3a8a]" />
            <h3 className="text-xl font-bold text-gray-900">2. Datos del Viaje</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Viaje *
              </label>
              <select
                required
                value={formData.tipoViaje}
                onChange={(e) => setFormData({ ...formData, tipoViaje: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="entrada">Entrada a Chile</option>
                <option value="salida">Salida de Chile</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                País de Procedencia/Destino *
              </label>
              <input
                type="text"
                required
                value={formData.procedencia}
                onChange={(e) => setFormData({ ...formData, procedencia: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Argentina"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Número de Vuelo *
              </label>
              <input
                type="text"
                required
                value={formData.vueloNumero}
                onChange={(e) => setFormData({ ...formData, vueloNumero: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="LA800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha de Llegada/Salida *
              </label>
              <input
                type="date"
                required
                min="1900-01-01"
                value={formData.fechaLlegada}
                onChange={(e) => setFormData({ ...formData, fechaLlegada: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Motivo del Viaje *
              </label>
              <select
                required
                value={formData.motivoViaje}
                onChange={(e) => setFormData({ ...formData, motivoViaje: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="turismo">Turismo</option>
                <option value="negocios">Negocios</option>
                <option value="estudios">Estudios</option>
                <option value="trabajo">Trabajo</option>
                <option value="visita-familiar">Visita Familiar</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>
        </div>

        {/* Sección 3: Declaración de Equipaje */}
        <div className="border-t pt-8">
          <div className="flex items-center gap-3 mb-6">
            <Package className="h-6 w-6 text-[#1e3a8a]" />
            <h3 className="text-xl font-bold text-gray-900">3. Declaración de Equipaje y Bienes</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Número de Maletas/Bultos *
              </label>
              <input
                type="number"
                required
                min="0"
                value={formData.numMaletas}
                onChange={(e) => setFormData({ ...formData, numMaletas: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="2"
              />
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">Declaración Obligatoria (Marque SÍ o NO)</h4>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Lleva productos agrícolas (frutas, verduras, semillas, plantas)? *
                  </label>
                  <div className="flex gap-4">
                    {['si', 'no'].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="declaraProductosAgricolas"
                          value={option}
                          checked={formData.declaraProductosAgricolas === option}
                          onChange={(e) => setFormData({ ...formData, declaraProductosAgricolas: e.target.value })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="capitalize">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Lleva alimentos de origen animal (carnes, lácteos, embutidos)? *
                  </label>
                  <div className="flex gap-4">
                    {['si', 'no'].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="declaraAlimentos"
                          value={option}
                          checked={formData.declaraAlimentos === option}
                          onChange={(e) => setFormData({ ...formData, declaraAlimentos: e.target.value })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="capitalize">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Lleva animales o mascotas? *
                  </label>
                  <div className="flex gap-4">
                    {['si', 'no'].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="declaraAnimales"
                          value={option}
                          checked={formData.declaraAnimales === option}
                          onChange={(e) => setFormData({ ...formData, declaraAnimales: e.target.value })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="capitalize">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Lleva dinero en efectivo superior a USD $10,000? *
                  </label>
                  <div className="flex gap-4">
                    {['si', 'no'].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="declaraDinero"
                          value={option}
                          checked={formData.declaraDinero === option}
                          onChange={(e) => setFormData({ ...formData, declaraDinero: e.target.value })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="capitalize">{option}</span>
                      </label>
                    ))}
                  </div>
                  {formData.declaraDinero === 'si' && (
                    <div className="mt-3">
                      <input
                        type="number"
                        value={formData.montoDinero}
                        onChange={(e) => setFormData({ ...formData, montoDinero: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Monto en USD"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {(formData.declaraProductosAgricolas === 'si' || formData.declaraAlimentos === 'si') && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Productos Específicos que Lleva</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { key: 'llevaFrutas', label: 'Frutas frescas' },
                    { key: 'llevaVerduras', label: 'Verduras' },
                    { key: 'llevaCarnes', label: 'Carnes o embutidos' },
                    { key: 'llevaLacteos', label: 'Productos lácteos' },
                    { key: 'llevaSemillas', label: 'Semillas' },
                    { key: 'llevaPlantas', label: 'Plantas o flores' },
                    { key: 'llevaMedicamentos', label: 'Medicamentos' },
                  ].map((item) => (
                    <label key={item.key} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData[item.key as keyof typeof formData] as boolean}
                        onChange={(e) => setFormData({ ...formData, [item.key]: e.target.checked })}
                        className="w-4 h-4 text-green-600 rounded"
                      />
                      <span className="text-sm text-gray-700">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descripción Detallada de Productos que Declara
              </label>
              <textarea
                rows={4}
                value={formData.descripcionProductos}
                onChange={(e) => setFormData({ ...formData, descripcionProductos: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Especifique tipo, cantidad, peso aproximado y origen de los productos (ej: 2 kg de manzanas rojas de Argentina, queso artesanal 500g de Perú...)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Observaciones Adicionales
              </label>
              <textarea
                rows={3}
                value={formData.observaciones}
                onChange={(e) => setFormData({ ...formData, observaciones: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Cualquier información adicional relevante..."
              />
            </div>
          </div>
        </div>

        {/* Declaración Jurada */}
        <div className="border-t pt-8">
          <div className="bg-gray-50 border border-gray-300 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 mb-4">Declaración Jurada</h4>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Declaro bajo juramento que toda la información proporcionada en este formulario es verdadera y completa.
              Estoy consciente de que la declaración falsa o la omisión de información puede resultar en sanciones legales,
              multas administrativas y/o el decomiso de los bienes no declarados, de acuerdo a la legislación vigente de Chile.
            </p>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                className="w-5 h-5 text-blue-600 rounded mt-0.5"
              />
              <span className="text-sm text-gray-700">
                Acepto y confirmo que he leído y entendido esta declaración jurada *
              </span>
            </label>
          </div>
        </div>

        {/* Botón Submit */}
        <div className="border-t pt-8">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Enviar Declaración Conjunta
          </button>
          <p className="text-center text-sm text-gray-500 mt-4">
            Al enviar este formulario, recibirás un código de confirmación y un QR para presentar en el control aduanero.
          </p>
        </div>
      </form>
    </div>
  );
}
