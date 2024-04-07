import { ReactNode } from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer/Footer';

export default function Layout({
  children,
}: { children: ReactNode }) {
  return (
    <div className="wrapper">
      <Head>
        <title>Always Stylish</title>
        <link rel="icon" href="path_to_your_icon.ico" type="image/x-icon" />
      </Head>
      {children}
      <Footer />
    </div>
  );
}
