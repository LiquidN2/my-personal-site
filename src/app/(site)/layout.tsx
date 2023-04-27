import '@/styles/main.scss';

import { Metadata } from 'next';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ThemeProvider from '@/components/context/theme-provider.component';

export const metadata: Metadata = {
  title: 'Hugh Nguyen 👨‍💻 Full-Stack Developer',
  description:
    'Personal website of Hugh Nguyen, web developer. This project is built on NextJS 13',
  icons: {
    icon: '/img/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
