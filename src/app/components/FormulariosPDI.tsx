import { ShieldCheck, AlertCircle } from 'lucide-react';
import SeccionFormulario from './SeccionFormulario';

interface FormulariosPDIProps {
  habilitado: boolean;
  enFormulario: boolean;
  onIniciarFormulario: () => void;
  onVolverDescripcion: () => void;
}

export default function FormulariosPDI({
  habilitado,
  enFormulario,
  onIniciarFormulario,
  onVolverDescripcion,
}: FormulariosPDIProps) {
  const descripcionContenido = (
    <div className="space-y-4">
      <p className="text-gray-700">
        La Policía de Investigaciones de Chile (PDI) es la institución encargada del control migratorio. Todos los trámites de entrada y salida del país deben ser procesados por esta autoridad.
      </p>

      <div className="bg-red-50 border border-red-200 p-5 rounded-lg flex gap-3">
        <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-red-800">
          Los formularios PDI incluyen permisos de circulación para vehículos extranjeros, tarjetas de turismo, y certificados de salida del país.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-bold text-gray-800 mb-3">Documentos PDI disponibles:</h3>
        <ul className="space-y-2">
          {[
            'Permiso de circulación de vehículo extranjero',
            'Tarjeta de turismo',
            'Control de antecedentes',
            'Certificado de salida del país',
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-700">
              <span className="text-red-600 font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const formularioCompleto = (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-red-600 text-white p-3 rounded-lg">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Formularios PDI</h2>
          <p className="text-gray-600">Policía de Investigaciones de Chile</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-red-50 border border-red-200 p-5 rounded-lg flex gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-red-800">
              La PDI es la institución encargada del control migratorio en Chile. Todos los trámites relacionados con entrada y salida del país deben ser procesados por esta institución.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border border-red-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              Tarjeta de Turismo
            </h3>
            <p className="text-gray-600 text-sm ml-10 mb-3">
              Documento que autoriza la permanencia temporal en Chile para fines turísticos (válida por 90 días)
            </p>
            <button className="ml-10 text-red-600 hover:text-red-700 text-sm font-medium">
              Más información →
            </button>
          </div>

          <div className="border border-red-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              Permiso de Circulación de Vehículo
            </h3>
            <p className="text-gray-600 text-sm ml-10 mb-3">
              Autorización para ingreso temporal de vehículo extranjero al territorio nacional
            </p>
            <div className="ml-10 bg-gray-50 p-3 rounded-lg mb-3">
              <p className="text-xs text-gray-600 mb-2 font-medium">Documentos requeridos:</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Permiso de circulación del país de origen</li>
                <li>• Seguro obligatorio vigente</li>
                <li>• Cédula de identidad del conductor</li>
                <li>• Licencia de conducir vigente</li>
              </ul>
            </div>
            <button className="ml-10 text-red-600 hover:text-red-700 text-sm font-medium">
              Solicitar permiso →
            </button>
          </div>

          <div className="border border-red-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              Control de Antecedentes
            </h3>
            <p className="text-gray-600 text-sm ml-10 mb-3">
              Verificación de antecedentes penales para ingreso al país
            </p>
            <button className="ml-10 text-red-600 hover:text-red-700 text-sm font-medium">
              Consultar estado →
            </button>
          </div>

          <div className="border border-red-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              Certificado de Salida del País
            </h3>
            <p className="text-gray-600 text-sm ml-10 mb-3">
              Constancia de salida del territorio nacional (puede solicitarse para fines laborales o legales)
            </p>
            <button className="ml-10 text-red-600 hover:text-red-700 text-sm font-medium">
              Solicitar certificado →
            </button>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Tipo de Trámite PDI *
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent">
              <option value="">Seleccione un trámite</option>
              <option value="vehiculo">Permiso de Circulación de Vehículo</option>
              <option value="turismo">Tarjeta de Turismo</option>
              <option value="antecedentes">Control de Antecedentes</option>
              <option value="certificado">Certificado de Salida</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                placeholder="Pedro Silva Rojas"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Nacionalidad *
              </label>
              <input
                type="text"
                placeholder="Chilena"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Número de Pasaporte
              </label>
              <input
                type="text"
                placeholder="AB123456"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Observaciones
            </label>
            <textarea
              rows={3}
              placeholder="Información adicional relevante para su trámite..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Importante:</strong> Los trámites de PDI deben completarse presencialmente en los pasos fronterizos. Este formulario prepara su documentación.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            Preparar Documentación PDI
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <SeccionFormulario
      titulo="Formularios PDI"
      descripcion="Policía de Investigaciones de Chile"
      icon={ShieldCheck}
      color="bg-red-600"
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
