import { Analytics } from '@vercel/analytics/react';
import Providers from './providers';
import { BottomNav } from './bottom-nav';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <main className="flex min-h-screen w-full flex-col bg-background">
        <div className="flex flex-col flex-1 pb-16">
          <main className="flex-1 overflow-hidden">
            {children}
          </main>
        </div>
        <BottomNav />
        <Analytics />
      </main>
    </Providers>
  );
}
