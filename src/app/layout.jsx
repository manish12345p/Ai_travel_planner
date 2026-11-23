import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getUser, getActiveTrip } from '@/services';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['400', '500', '600'],
});

export const metadata = {
  title: 'ODYSSEY AI | Wander with intention.',
  description:
    'Odyssey orchestrates seamless routes, real-time pacing, and map-anchored journeys in seconds.',
  icons: {
    icon: '/assets/icons/logo.svg',
  },
};

export default async function RootLayout({ children }) {
  const [userRes, tripRes] = await Promise.all([getUser(), getActiveTrip()]);

  return (
    <html
      lang="en"
      data-theme="odyssey"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="font-sans bg-white text-slate-900 min-h-screen flex flex-col justify-between">
        <Header initialUser={userRes.data} initialActiveTrip={tripRes.data} />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
