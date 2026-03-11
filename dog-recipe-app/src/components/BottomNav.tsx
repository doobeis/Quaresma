import { Home, ShieldAlert, Ticket } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function BottomNav() {
    const navItems = [
        { to: '/', icon: Home, label: 'Início' },
        { to: '/guia', icon: ShieldAlert, label: 'Guia de Toxicidade' },
        { to: '/cupom', icon: Ticket, label: 'Cupom' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-brand-yellow/30 pb-safe z-50">
            <div className="flex justify-around items-center h-16 max-w-md mx-auto">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            cn(
                                'flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors',
                                isActive ? 'text-brand-orange' : 'text-slate-400 hover:text-brand-yellow'
                            )
                        }
                    >
                        <item.icon className="w-6 h-6" />
                        <span className="text-[10px] font-bold">{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </nav >
    );
}
