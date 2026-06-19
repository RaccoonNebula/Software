import { useState } from 'react';
import ModernNavbar from './components/ModernNavbar';
import HeroSection from './components/HeroSection';
import FuncionalidadesSection from './components/FuncionalidadesSection';
import ProcesoTimeline from './components/ProcesoTimeline';
import EstadoSolicitud from './components/EstadoSolicitud';
import ModernFooter from './components/ModernFooter';
import LoginModal from './components/LoginModal';
import AsistenteFormularios from './components/AsistenteFormularios';
import FormulariosGenerales from './components/FormulariosGenerales';
import FormulariosSAG from './components/FormulariosSAG';
import FormulariosMenores from './components/FormulariosMenores';
import FormulariosPDI from './components/FormulariosPDI';
import FormularioVehiculo from './components/FormularioVehiculo';
import DeclaracionConjunta from './components/DeclaracionConjunta';
import RequisitosSection from './components/RequisitosSection';
import ContactoSection from './components/ContactoSection';
import ChatWidget from './components/ChatWidget';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formulariosHabilitados, setFormulariosHabilitados] = useState<string[]>([]);
  const [enFormulario, setEnFormulario] = useState<{ [key: string]: boolean }>({});
  const [formularioActivo, setFormularioActivo] = useState<string | null>(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleComenzarSolicitud = () => {
    setActiveSection('formularios');
    setFormularioActivo('asistente');
  };

  const handleConsultarEstado = () => {
    setActiveSection('estado');
  };

  const handleFormulariosCalculados = (formularios: string[]) => {
    setFormulariosHabilitados(formularios);
  };

  const handleIniciarFormulario = (seccion: string) => {
    setEnFormulario({ ...enFormulario, [seccion]: true });
  };

  const handleVolverDescripcion = (seccion: string) => {
    setEnFormulario({ ...enFormulario, [seccion]: false });
  };

  const renderFormularioContent = () => {
    if (!formularioActivo) {
      return (
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Selecciona un Formulario
          </h3>
          <p className="text-gray-600">
            Comienza con el asistente "¿Qué formularios necesito?" para habilitar los formularios correspondientes
          </p>
        </div>
      );
    }

    switch (formularioActivo) {
      case 'asistente':
        return <AsistenteFormularios onFormulariosCalculados={handleFormulariosCalculados} />;
      case 'declaracion-conjunta':
        return <DeclaracionConjunta />;
      case 'generales':
        return (
          <FormulariosGenerales
            habilitado={formulariosHabilitados.includes('generales')}
            enFormulario={enFormulario['generales'] || false}
            onIniciarFormulario={() => handleIniciarFormulario('generales')}
            onVolverDescripcion={() => handleVolverDescripcion('generales')}
          />
        );
      case 'sag':
        return (
          <FormulariosSAG
            habilitado={formulariosHabilitados.includes('sag')}
            enFormulario={enFormulario['sag'] || false}
            onIniciarFormulario={() => handleIniciarFormulario('sag')}
            onVolverDescripcion={() => handleVolverDescripcion('sag')}
          />
        );
      case 'menores':
        return (
          <FormulariosMenores
            habilitado={formulariosHabilitados.includes('menores')}
            enFormulario={enFormulario['menores'] || false}
            onIniciarFormulario={() => handleIniciarFormulario('menores')}
            onVolverDescripcion={() => handleVolverDescripcion('menores')}
          />
        );
      case 'pdi':
        return (
          <FormulariosPDI
            habilitado={formulariosHabilitados.includes('pdi')}
            enFormulario={enFormulario['pdi'] || false}
            onIniciarFormulario={() => handleIniciarFormulario('pdi')}
            onVolverDescripcion={() => handleVolverDescripcion('pdi')}
          />
        );
      case 'vehiculo':
        return (
          <FormularioVehiculo
            habilitado={formulariosHabilitados.includes('vehiculo')}
            enFormulario={enFormulario['vehiculo'] || false}
            onIniciarFormulario={() => handleIniciarFormulario('vehiculo')}
            onVolverDescripcion={() => handleVolverDescripcion('vehiculo')}
          />
        );
      default:
        return null;
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'inicio':
        return (
          <>
            <HeroSection
              onComenzarSolicitud={handleComenzarSolicitud}
              onConsultarEstado={handleConsultarEstado}
            />
            <FuncionalidadesSection />
            <ProcesoTimeline />
          </>
        );

      case 'formularios':
        return (
          <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Formularios Aduaneros</h2>
                  <p className="text-gray-600">Completa los formularios necesarios para tu trámite</p>
                </div>

                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Sidebar */}
                  <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
                      <h3 className="font-bold text-gray-900 mb-4">Formularios Disponibles</h3>
                      <div className="space-y-2">
                        {[
                          { id: 'asistente', label: '¿Qué necesito?', required: true },
                          { id: 'declaracion-conjunta', label: 'Declaración Conjunta SAG/Aduanas', required: false, destacado: true },
                          { id: 'generales', label: 'Generales' },
                          { id: 'sag', label: 'SAG' },
                          { id: 'menores', label: 'Menores' },
                          { id: 'pdi', label: 'PDI' },
                          { id: 'vehiculo', label: 'Vehículo' },
                        ].map((form) => (
                          <button
                            key={form.id}
                            onClick={() => setFormularioActivo(form.id)}
                            className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                              formularioActivo === form.id
                                ? 'bg-blue-50 text-[#1e3a8a] font-medium'
                                : 'text-gray-600 hover:bg-gray-50'
                            } ${!form.required && !formulariosHabilitados.includes(form.id) && form.id !== 'asistente' && form.id !== 'declaracion-conjunta' ? 'opacity-50' : ''} ${form.destacado ? 'border-l-4 border-[#1e3a8a]' : ''}`}
                            disabled={!form.required && !formulariosHabilitados.includes(form.id) && form.id !== 'asistente' && form.id !== 'declaracion-conjunta'}
                          >
                            <span className={form.destacado ? 'font-medium' : ''}>{form.label}</span>
                            {form.required && <span className="text-red-500 ml-1">*</span>}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3">
                    {renderFormularioContent()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'estado':
        return <EstadoSolicitud />;

      case 'requisitos':
        return <RequisitosSection />;

      case 'contacto':
        return <ContactoSection />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <ModernNavbar
        onNavigate={setActiveSection}
        onLoginClick={() => setLoginModalOpen(true)}
        activeSection={activeSection}
        isLoggedIn={isLoggedIn}
      />

      {renderContent()}

      <ModernFooter />

      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLogin={handleLogin}
      />

      <ChatWidget />
    </div>
  );
}
