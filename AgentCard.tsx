import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

interface AgentCardProps {
  agent: {
    id: string;
    name: string;
    experience: string;
    phone: string;
    email: string;
    image: string;
    specialty: string;
  };
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={agent.image}
          alt={agent.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
          <a href={`tel:${agent.phone}`} className="bg-amber-500 p-3 rounded-full text-slate-900 hover:bg-white transition-colors">
            <Phone className="h-5 w-5" />
          </a>
          <a href={`mailto:${agent.email}`} className="bg-amber-500 p-3 rounded-full text-slate-900 hover:bg-white transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-slate-900 font-display mb-1">{agent.name}</h3>
        <p className="text-amber-500 font-medium text-sm mb-3">{agent.specialty}</p>
        <div className="inline-block bg-slate-100 px-3 py-1 rounded-full text-xs font-semibold text-slate-600">
          {agent.experience} Experience
        </div>
      </div>
    </div>
  );
}
