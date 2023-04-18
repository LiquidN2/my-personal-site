import '@/styles/main.scss';

import Header from '@/components/layout/header/header.component';
import Footer from '@/components/layout/footer/footer.component';
import ThemeProvider from '@/components/context/theme-provider.component';

import styles from './layout.module.scss';

export const metadata = {
  title: 'Hugh Nguyen | Personal Site',
  description:
    'Personal website of Hugh Nguyen, web developer. This project is built on NextJS 13',
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
          <main className={styles.container}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
