import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Open_Sans, Roboto_Serif } from 'next/font/google';
import './globals.css';

const roboto_serif = Roboto_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-serif',
});
const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const metadata = {
  title: 'TicketE',
  description: 'Checkout page',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto_serif.variable} ${open_sans.variable}`}
    >
      <body className="font-opensans">
        {/* TODO: Navbar */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
