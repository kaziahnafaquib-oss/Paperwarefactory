import React from "react";
import { ClientLogin } from "../components/paperware/ClientLogin";

const ClientDashboard = React.lazy(() => import('../components/paperware/ClientDashboard').then(module => ({ default: module.ClientDashboard })));

export function ClientPortalPage() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  if (!isLoggedIn) {
    return <ClientLogin onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <React.Suspense fallback={
        <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
             <div className="flex flex-col items-center gap-4">
                 <div className="size-10 border-4 border-black/10 border-t-black rounded-full animate-spin" />
                 <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Loading Enterprise Hub...</p>
             </div>
        </div>
    }>
        <ClientDashboard onLogout={() => setIsLoggedIn(false)} />
    </React.Suspense>
  );
}