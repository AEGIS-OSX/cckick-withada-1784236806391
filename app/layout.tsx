import type { Metadata } from 'next';
import { Instrument_Serif, Geist } from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display-loaded',
});

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body-loaded',
});

export const metadata: Metadata = {
  title: 'CC-Kick — Queens Professional Cleaning',
  description:
    'Expert residential cleaning service serving Queens, NY. Trusted by 200+ households. Book your first clean today.',
  openGraph: {
    title: 'CC-Kick — Queens Professional Cleaning',
    description:
      'Expert residential cleaning service serving Queens, NY. Trusted by 200+ households.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CC-Kick — Queens Professional Cleaning',
    description:
      'Expert residential cleaning service serving Queens, NY. Trusted by 200+ households.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${geist.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
