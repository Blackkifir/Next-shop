import { ReactNode } from 'react';
import './styles/global/globals.scss';
import Head from 'next/head';
import Footer from '@/components/Footer/Footer';

export default function Layout({
  children,
}: { children: ReactNode }) {
  return (
    <div className="wrapper">
      <Head>
        <title>Always Stylish</title>
      </Head>
      {children}
      <Footer />
    </div>
  );
}
