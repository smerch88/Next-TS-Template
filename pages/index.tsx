import { NextPage } from 'next';
import Head from 'next/head';
import { withLayout } from '@/layout/Layout';
import { Hero } from '@/page-components/Hero/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Arsenii Maksymenko Template</title>
        <Hero />
      </Head>
    </>
  );
};

export default withLayout(Home);
