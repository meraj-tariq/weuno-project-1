import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import "../styles/globals.css";
import Header from '@/components/Header/Header';

const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Luxury Experience',
  description: 'Welcome to a world of luxury',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.className} bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}