import '@/styles/main.scss';

import Header from '@/components/layout/header/header.component';
import Footer from '@/components/layout/footer/footer.component';
import ThemeProvider from '@/components/context/theme-provider.component';

export const metadata = {
  title: 'Hugh Nguyen | Personal Site',
  description: 'Personal website of Hugh Nguyen, web developer',
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
