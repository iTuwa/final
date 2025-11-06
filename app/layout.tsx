export const metadata = {
  title: 'OpenSea.io',
  description: 'Mystery Box Airdrop',
};

import './globals.css';
import dynamic from 'next/dynamic';
const Providers = dynamic(() => import('../providers'), { ssr: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
