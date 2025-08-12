import './globals.css';

import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Next.js + Tailwind CSS 移动端',
  description: 'Next.js'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className="flex min-h-screen w-full flex-col">{children}</body>
      <Analytics />
    </html>
  );
}
