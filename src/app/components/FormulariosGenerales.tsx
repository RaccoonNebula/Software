import { FileText } from 'lucide-react';
import SeccionFormulario from './SeccionFormulario';

interface FormulariosGeneralesProps {
  habilitado: boolean;
  enFormulario: boolean;
  onIniciarFormulario: () => void;
  onVolverDescripcion: () => void;
}

export default function FormulariosGenerales({
  habilitado,
  enFormulario,
  onIniciarFormulario,
  onVolverDescripcion,
}: FormulariosGeneralesProps) {
  const descripcion = (
    <div className="space-y-4">
      <p className="text-gray-700">
        Los formularios generales son documentos obligatorios que deben completar todos los viajeros que ingresen o salgan de Chile. Estos formularios permiten a las autoridades aduaneras llevar un control de los bienes, valores y efectos personales que cruzan las fronteras.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-bold text-gray-800 mb-3">Este formulario incluye:</h3>
        <ul className="space-y-2">
          {[
            'Declaración Jurada Simple - Declaración de bienes y efectos personales',
            'Declaración de Equipaje - Detalle de artículos en equipaje de mano y facturado',
            'Declaración de Valores - Para montos superiores a USD $10,000',
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <span className="text-blue-600 font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Importante:</strong> La no declaración de bienes o valores puede resultar en sanciones y multas. Es obligatorio declarar todos los artículos de valor.
        </p>
      </div>
    </div>
  );

  const formularioCompleto = (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-500 text-white p-3 rounded-lg">
          <FileText className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Formularios Generales</h2>
          <p className="text-gray-600">Trámites comunes para ingreso y salida del país</p>
        </div>
      </div>

      <form className="space-y-6">
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Tipo de Trámite *
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">Seleccione una opción</option>
            <option value="entrada">Entrada al país</option>
            <option value="salida">Salida del país</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Nombre Completo *
            </label>
            <input
              type="text"
              placeholder="Juan Pérez González"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              RUT *
            </label>
            <input
              type="text"
              placeholder="12.345.678-9"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Pasaporte
            </label>
            <input
              type="text"
              placeholder="AB123456"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Nacionalidad *
            </label>
            <input
              type="text"
              placeholder="Chilena"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">
            ¿Lleva valores superiores a USD $10,000?
          </label>
          <div className="flex gap-4">
            {['Sí', 'No'].map((opcion) => (
              <label key={opcion} className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="valores"
                  value={opcion}
                  className="w-4 h-4 text-blue-600"
                />
                <span>{opcion}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Descripción de Equipaje
          </label>
          <textarea
            rows={4}
            placeholder="Describa los artículos de valor que lleva en su equipaje..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          Enviar Declaración
        </button>
      </form>
    </div>
  );

  return (
    <SeccionFormulario
      titulo="Formularios Generales"
      descripcion="Trámites comunes para ingreso y salida del país"
      icon={FileText}
      color="bg-blue-500"
      habilitado={habilitado}
      enFormulario={enFormulario}
      onIniciarFormulario={onIniciarFormulario}
      onVolverDescripcion={onVolverDescripcion}
      contenidoDescripcion={descripcion}
    >
      {formularioCompleto}
    </SeccionFormulario>
  );
}
