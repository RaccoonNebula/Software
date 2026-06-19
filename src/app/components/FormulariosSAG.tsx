import { Leaf, AlertTriangle, Check } from 'lucide-react';
import { useState } from 'react';
import SeccionFormulario from './SeccionFormulario';

interface FormulariosSAGProps {
  habilitado: boolean;
  enFormulario: boolean;
  onIniciarFormulario: () => void;
  onVolverDescripcion: () => void;
}

export default function FormulariosSAG({
  habilitado,
  enFormulario,
  onIniciarFormulario,
  onVolverDescripcion,
}: FormulariosSAGProps) {
  const descripcionContenido = (
    <div className="space-y-4">
      <p className="text-gray-700">
        El Servicio Agrícola y Ganadero (SAG) es la autoridad sanitaria encargada de proteger la agricultura y ganadería nacional. Es obligatorio declarar todos los productos de origen vegetal, animal o cualquier producto agropecuario que ingrese al país.
      </p>

      <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex gap-3">
        <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-red-800">
            <strong>Advertencia:</strong> La no declaración de productos puede resultar en multas de hasta 20 UTM y decomiso de los productos. Todos deben ser declarados, aunque sean permitidos.
          </p>
        </div>
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-bold text-gray-800 mb-3">Productos que debes declarar:</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'Frutas y verduras frescas',
            'Semillas y plantas',
            'Carnes y embutidos',
            'Productos lácteos',
            'Huevos y miel',
            'Mascotas y animales',
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-700">
              <span className="text-green-600 font-bold">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  const [submitted, setSubmitted] = useState(false);

  const formularioCompleto = submitted ? (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center max-w-2xl mx-auto">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Check className="h-8 w-8 text-green-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">¡Declaración SAG Enviada!</h2>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
        <p className="text-[#1e3a8a] font-medium">
          Su solicitud estará resuelta en un plazo de 5 a 10 días hábiles.
        </p>
      </div>
      <button onClick={() => setSubmitted(false)} className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
        Nueva Declaración
      </button>
    </div>
  ) : (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-green-500 text-white p-3 rounded-lg">
          <Leaf className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Formularios SAG</h2>
          <p className="text-gray-600">Servicio Agrícola y Ganadero</p>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6 flex gap-3">
        <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-red-800">
            <strong>Importante:</strong> Declare TODOS los productos. La omisión puede resultar en multas de hasta 20 UTM.
          </p>
        </div>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            ¿Qué tipo de productos lleva? *
          </label>
          <div className="space-y-2">
            {[
              'Productos vegetales (frutas, verduras, semillas)',
              'Productos animales (carnes, lácteos)',
              'Mascotas o animales vivos',
              'Ninguno',
            ].map((opcion) => (
              <label key={opcion} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-green-600"
                />
                <span>{opcion}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Detalle de Productos
          </label>
          <textarea
            rows={4}
            placeholder="Especifique qué productos lleva (ej: 2 kg de manzanas, queso artesanal, semillas de tomate...)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              País de Origen de los Productos
            </label>
            <input
              type="text"
              placeholder="Argentina"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Cantidad Aproximada
            </label>
            <input
              type="text"
              placeholder="5 kg"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
        >
          Enviar Declaración SAG
        </button>
      </form>
    </div>
  );

  return (

    <SeccionFormulario
      titulo="Formularios SAG"
      descripcion="Servicio Agrícola y Ganadero - Declaración de productos"
      icon={Leaf}
      color="bg-green-500"
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
