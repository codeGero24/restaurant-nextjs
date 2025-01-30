import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Heebo, Nunito, Pacifico } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

import '@/styles/globals.scss';

const nunito = Nunito({
  variable: '--font-nunito',
  style: 'normal',
  weight: '800',
  subsets: ['latin'],
});

const heebo = Heebo({
  variable: '--font-heebo',
  style: 'normal',
  weight: '500',
  subsets: ['latin'],
});

const pacifico = Pacifico({
  variable: '--font-pacifico',
  style: 'normal',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Restoran - Ristorante Italiano',
  description: 'Scopri la vera cucina italiana nel cuore della città',
  keywords: 'ristorante, italiano, cucina, pasta, pizza',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='it'>
      <body
        className={`${nunito.variable} ${heebo.variable} ${pacifico.variable} mx-auto max-w-screen-xl antialiased`}
      >
        <Button variant='scroll-up' />
        <Header />
        <main id='l-main'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
