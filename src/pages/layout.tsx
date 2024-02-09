import { ReactNode } from 'react';
import './styles/global/globals.scss';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';

export default function Layout({
  children,
}: { children: ReactNode }) {
  return (
    <div className="wrapper">
      <Head>
        <title>Always Stylish</title>
      </Head>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
