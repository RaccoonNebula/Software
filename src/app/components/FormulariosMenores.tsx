import { Baby, Users } from 'lucide-react';
import SeccionFormulario from './SeccionFormulario';

interface FormulariosMenoresProps {
  habilitado: boolean;
  enFormulario: boolean;
  onIniciarFormulario: () => void;
  onVolverDescripcion: () => void;
}

export default function FormulariosMenores({
  habilitado,
  enFormulario,
  onIniciarFormulario,
  onVolverDescripcion,
}: FormulariosMenoresProps) {
  const descripcionContenido = (
    <div className="space-y-4">
      <p className="text-gray-700">
        Los menores de 18 años que viajen al extranjero requieren autorización especial. Este formulario es necesario cuando el menor viaja solo, con terceros, o solo con uno de sus padres.
      </p>

      <div className="bg-pink-50 border border-pink-200 p-5 rounded-lg">
        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <Users className="h-5 w-5 text-pink-600" />
          Cuándo necesitas este formulario:
        </h3>
        <ul className="space-y-2">
          {[
            'El menor viaja solo o acompañado de terceros',
            'El menor viaja solo con uno de los padres',
            'El menor está bajo tutela o custodia especial',
            'Viaje en grupo escolar o deportivo',
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <span className="text-pink-600 font-bold">{index + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Nota:</strong> La autorización debe ser firmada ante notario por ambos padres o tutores legales.
        </p>
      </div>
    </div>
  );

  const formularioCompleto = (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-pink-500 text-white p-3 rounded-lg">
          <Baby className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Autorización de Menores de Edad</h2>
          <p className="text-gray-600">Documentación para viajes de niños y adolescentes</p>
        </div>
      </div>

      <form className="space-y-6">
        <h3 className="font-bold text-gray-800">Datos del Menor</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Nombre Completo del Menor *
            </label>
            <input
              type="text"
              placeholder="María González López"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              RUT del Menor *
            </label>
            <input
              type="text"
              placeholder="12.345.678-9"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Fecha de Nacimiento *
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Edad *
            </label>
            <input
              type="number"
              placeholder="15"
              min="0"
              max="17"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <hr className="my-6" />

        <h3 className="font-bold text-gray-800">Datos del Viaje</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              País de Destino *
            </label>
            <input
              type="text"
              placeholder="Argentina"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Motivo del Viaje *
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
              <option value="">Seleccione</option>
              <option value="turismo">Turismo</option>
              <option value="estudio">Estudios</option>
              <option value="deporte">Deporte</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Fecha de Salida *
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Fecha de Regreso *
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <hr className="my-6" />

        <h3 className="font-bold text-gray-800">Adulto Responsable</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Nombre del Adulto Responsable *
            </label>
            <input
              type="text"
              placeholder="Carlos González"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              RUT del Responsable *
            </label>
            <input
              type="text"
              placeholder="98.765.432-1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Parentesco *
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
              <option value="">Seleccione</option>
              <option value="padre">Padre</option>
              <option value="madre">Madre</option>
              <option value="tutor">Tutor Legal</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Teléfono de Contacto *
            </label>
            <input
              type="tel"
              placeholder="+56 9 1234 5678"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Recordatorio:</strong> Esta autorización debe ser firmada ante notario por ambos padres. Lleve certificado de nacimiento del menor y cédulas de identidad de los padres.
          </p>
        </div>

        <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors font-medium">
          Generar Autorización de Viaje
        </button>
      </form>
    </div>
  );

  return (
    <SeccionFormulario
      titulo="Autorización de Menores de Edad"
      descripcion="Documentación para viajes de niños y adolescentes"
      icon={Baby}
      color="bg-pink-500"
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
