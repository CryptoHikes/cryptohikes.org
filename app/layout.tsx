import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeContext';
import { ReactNode } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; 
config.autoAddCss = false; // Prevents Font Awesome from adding its CSS since it's already being included above

export const metadata = {
  title: 'CryptoHikes',
  description: 'Explore the best hiking trails and learn about cryptocurrency.',
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" /> {/* Add this line for the favicon */}
      </head>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}