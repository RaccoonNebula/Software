import { Car, Check } from 'lucide-react';
import { useState } from 'react';
import SeccionFormulario from './SeccionFormulario';

interface FormularioVehiculoProps {
  habilitado: boolean;
  enFormulario: boolean;
  onIniciarFormulario: () => void;
  onVolverDescripcion: () => void;
}

export default function FormularioVehiculo({
  habilitado,
  enFormulario,
  onIniciarFormulario,
  onVolverDescripcion,
}: FormularioVehiculoProps) {
  const descripcionContenido = (
    <div className="space-y-4">
      <p className="text-gray-700">
        Si vas a ingresar o sacar un vehículo de Chile, debes registrarlo en el sistema de aduanas. Este formulario te permite declarar los datos del vehículo y asociarlo a tu solicitud de entrada o salida del país.
      </p>

      <div className="bg-orange-50 p-4 rounded-lg">
        <h3 className="font-bold text-gray-800 mb-3">Información que necesitarás:</h3>
        <ul className="space-y-2">
          {[
            'Patente del vehículo',
            'Marca y modelo',
            'Año de fabricación',
            'Datos del conductor',
            'Permiso de circulación vigente',
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-700">
              <span className="text-orange-600 font-bold">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Importante:</strong> Asegúrate de tener el permiso de circulación, seguro obligatorio y certificado de anotaciones vigentes del vehículo.
        </p>
      </div>
    </div>
  );
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    patente: '',
    marca: '',
    modelo: '',
    año: '',
    tipoSolicitud: 'salida',
    nombreConductor: '',
    rutConductor: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const formularioCompleto = submitted ? (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center max-w-2xl mx-auto">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Check className="h-8 w-8 text-green-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">¡Vehículo Registrado!</h2>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
        <p className="text-[#1e3a8a] font-medium">
          Su solicitud estará resuelta en un plazo de 5 a 10 días hábiles.
        </p>
      </div>
      <button onClick={() => setSubmitted(false)} className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
        Nueva Solicitud
      </button>
    </div>
  ) : (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-orange-500 text-white p-3 rounded-lg">
          <Car className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Formulario de Vehículo</h2>
          <p className="text-gray-600">Registro de ingreso/salida de vehículo</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <label className="block font-medium text-gray-700 mb-2">
            Tipo de Solicitud
          </label>
          <div className="flex gap-4">
            {[
              { value: 'salida', label: 'Salida del País' },
              { value: 'entrada', label: 'Entrada al País' }
            ].map((opcion) => (
              <label key={opcion.value} className="flex items-center gap-2 p-3 bg-white border rounded-lg cursor-pointer hover:bg-gray-50 flex-1">
                <input
                  type="radio"
                  name="tipoSolicitud"
                  value={opcion.value}
                  checked={formData.tipoSolicitud === opcion.value}
                  onChange={(e) => setFormData({ ...formData, tipoSolicitud: e.target.value })}
                  className="w-4 h-4 text-[#0039A6]"
                />
                <span>{opcion.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Patente *
            </label>
            <input
              type="text"
              value={formData.patente}
              onChange={(e) => setFormData({ ...formData, patente: e.target.value.toUpperCase() })}
              placeholder="ABCD12"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Marca *
            </label>
            <input
              type="text"
              value={formData.marca}
              onChange={(e) => setFormData({ ...formData, marca: e.target.value })}
              placeholder="Toyota"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Modelo *
            </label>
            <input
              type="text"
              value={formData.modelo}
              onChange={(e) => setFormData({ ...formData, modelo: e.target.value })}
              placeholder="Corolla"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Año *
            </label>
            <input
              type="number"
              value={formData.año}
              onChange={(e) => setFormData({ ...formData, año: e.target.value })}
              placeholder="2020"
              min="1900"
              max="2026"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Nombre del Conductor *
            </label>
            <input
              type="text"
              value={formData.nombreConductor}
              onChange={(e) => setFormData({ ...formData, nombreConductor: e.target.value })}
              placeholder="Juan Pérez González"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              RUT del Conductor *
            </label>
            <input
              type="text"
              value={formData.rutConductor}
              onChange={(e) => setFormData({ ...formData, rutConductor: e.target.value })}
              placeholder="12.345.678-9"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Nota:</strong> Asegúrate de tener toda la documentación del vehículo al momento de cruzar la frontera (permiso de circulación, seguro obligatorio, y certificado de anotaciones vigentes).
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
        >
          Registrar {formData.tipoSolicitud === 'salida' ? 'Salida' : 'Entrada'} de Vehículo
        </button>
      </form>
    </div>
  );

  return (
    <SeccionFormulario
      titulo="Formulario de Vehículo"
      descripcion="Registro de ingreso/salida de vehículo"
      icon={Car}
      color="bg-orange-500"
      habilitado={habilitado}
      enFormulario={enFormulario}
      onIniciarFormulario={onIniciarFormulario}
      onVolverDescripcion={onVolverDescripcion}
      contenidoDescripcion={descripcionContenido}
    >
      {formularioCompleto}
    </SeccionFormulario>
  );
}
