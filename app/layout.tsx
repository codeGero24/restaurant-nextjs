import type { Metadata } from 'next';
import { Heebo, Nunito, Nunito_Sans, Pacifico } from 'next/font/google';
import '@/styles/globals.scss';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const nunito = Nunito({
  variable: '--font-nunito',
  style: 'normal',
  weight: '800',
  subsets: ['latin'],
});

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='it'>
      <body
        className={`${nunito.variable} ${nunitoSans.variable} ${heebo.variable} ${pacifico.variable} mx-auto max-w-screen-xl antialiased`}
      >
        <Header />
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
