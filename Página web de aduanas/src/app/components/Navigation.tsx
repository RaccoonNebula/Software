import { ClipboardList, FileText, Leaf, Baby, ShieldCheck, HelpCircle } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const sections = [
    { id: 'asistente', name: '¿Qué formularios necesito?', icon: HelpCircle, color: 'bg-purple-500' },
    { id: 'generales', name: 'Formularios Generales', icon: FileText, color: 'bg-blue-500' },
    { id: 'sag', name: 'Formularios SAG', icon: Leaf, color: 'bg-green-500' },
    { id: 'menores', name: 'Menores de Edad', icon: Baby, color: 'bg-pink-500' },
    { id: 'pdi', name: 'PDI (Policía)', icon: ShieldCheck, color: 'bg-red-600' },
    { id: 'vehiculo', name: 'Vehículos', icon: ClipboardList, color: 'bg-orange-500' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-[88px] z-40">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  isActive
                    ? `${section.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{section.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
