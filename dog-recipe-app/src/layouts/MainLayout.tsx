import { Outlet } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function MainLayout() {
    return (
        <div className="min-h-screen pb-16 bg-slate-50">
            <main className="max-w-md mx-auto min-h-[calc(100vh-4rem)] bg-white shadow-sm overflow-x-hidden">
                <Outlet />
            </main>
            <BottomNav />
        </div>
    );
}
