import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CC-Kick — Queens Professional Cleaning',
  description: 'Expert residential cleaning service serving Queens, NY. Book your first clean today.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
