import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface AsistenteFormulariosProps {
  onFormulariosCalculados?: (formularios: string[]) => void;
}

export default function AsistenteFormularios({ onFormulariosCalculados }: AsistenteFormulariosProps) {
  const [respuestas, setRespuestas] = useState({
    tipoViaje: '',
    llevaProductos: '',
    menoresViajan: '',
    llevaVehiculo: '',
  });

  const [resultado, setResultado] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formulariosNecesarios: string[] = ['generales'];

    if (respuestas.llevaProductos === 'si') {
      formulariosNecesarios.push('sag');
    }

    if (respuestas.menoresViajan === 'si') {
      formulariosNecesarios.push('menores');
    }

    if (respuestas.llevaVehiculo === 'si') {
      formulariosNecesarios.push('vehiculo');
      formulariosNecesarios.push('pdi');
    }

    const nombresFormularios = formulariosNecesarios.map(id => {
      switch(id) {
        case 'generales': return 'Declaración Jurada Simple';
        case 'sag': return 'Formulario SAG - Declaración de Productos Agropecuarios';
        case 'menores': return 'Autorización de Viaje para Menores';
        case 'vehiculo': return 'Formulario de Ingreso/Salida de Vehículo';
        case 'pdi': return 'Permiso de Circulación PDI';
        default: return '';
      }
    });

    setResultado(nombresFormularios);

    if (onFormulariosCalculados) {
      onFormulariosCalculados(formulariosNecesarios);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Asistente de Formularios</h2>
        <p className="text-gray-600">
          Responde las siguientes preguntas y te diremos qué formularios necesitas completar
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            ¿Qué tipo de viaje vas a realizar?
          </label>
          <div className="space-y-2">
            {['Salida del país', 'Entrada al país', 'Tránsito'].map((opcion) => (
              <label key={opcion} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="tipoViaje"
                  value={opcion}
                  checked={respuestas.tipoViaje === opcion}
                  onChange={(e) => setRespuestas({ ...respuestas, tipoViaje: e.target.value })}
                  className="w-4 h-4 text-[#0039A6]"
                />
                <span>{opcion}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">
            ¿Llevas productos agrícolas, alimentos o animales?
          </label>
          <div className="flex gap-4">
            {['si', 'no'].map((opcion) => (
              <label key={opcion} className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 flex-1">
                <input
                  type="radio"
                  name="llevaProductos"
                  value={opcion}
                  checked={respuestas.llevaProductos === opcion}
                  onChange={(e) => setRespuestas({ ...respuestas, llevaProductos: e.target.value })}
                  className="w-4 h-4 text-[#0039A6]"
                />
                <span className="capitalize">{opcion}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">
            ¿Viajan menores de edad?
          </label>
          <div className="flex gap-4">
            {['si', 'no'].map((opcion) => (
              <label key={opcion} className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 flex-1">
                <input
                  type="radio"
                  name="menoresViajan"
                  value={opcion}
                  checked={respuestas.menoresViajan === opcion}
                  onChange={(e) => setRespuestas({ ...respuestas, menoresViajan: e.target.value })}
                  className="w-4 h-4 text-[#0039A6]"
                />
                <span className="capitalize">{opcion}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">
            ¿Llevas un vehículo?
          </label>
          <div className="flex gap-4">
            {['si', 'no'].map((opcion) => (
              <label key={opcion} className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 flex-1">
                <input
                  type="radio"
                  name="llevaVehiculo"
                  value={opcion}
                  checked={respuestas.llevaVehiculo === opcion}
                  onChange={(e) => setRespuestas({ ...respuestas, llevaVehiculo: e.target.value })}
                  className="w-4 h-4 text-[#0039A6]"
                />
                <span className="capitalize">{opcion}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors font-medium"
        >
          Ver Formularios Necesarios
        </button>
      </form>

      {resultado.length > 0 && (
        <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6" />
            Formularios que debes completar:
          </h3>
          <ul className="space-y-2">
            {resultado.map((formulario, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-600 font-bold">{index + 1}.</span>
                <span className="text-gray-700">{formulario}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
