import Head from 'next/head';
import { Inter } from 'next/font/google';
import clsx from 'clsx';

import dynamic from 'next/dynamic';
import CamelToKebab from '@/components/CamelToKebab';
import Guid from '@/components/Guid';
import IsExternal from '@/components/IsExternal';
import StripChars from '@/components/StripChars';

const AsyncTimeout = dynamic(() => import('@/components/AsyncTimeout'), {
  ssr: false
});

const IsClient = dynamic(() => import('@/components/IsClient'), {
  ssr: false
});

const RemoveEmptyProps = dynamic(
  () => import('@/components/RemoveEmptyProps'),
  {
    ssr: false
  }
);

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Bag Of Holding</title>
        <meta
          name="description"
          content="A magical grab bag of useful tools for the discerning developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={clsx({
          [inter.className]: inter.className,
          'container-fluid': true,
          'bg-dark': true,
          'text-light': true
        })}>
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <div className="jumbotron bg-secondary text-white text-center rounded-3 py-3 mb-4">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <h1 className="display-4">Bag Of Holding</h1>
                  </div>
                </div>
                <p className="lead">
                  A magical grab bag of useful tools for the discerning
                  developer
                </p>
                <div className="px-5">
                  <hr className="my-4" />
                </div>
                <p>
                  On this page you will find interactive examples. Please
                  consult the documentation for further details and a tutorial.
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="btn btn-dark btn-lg"
                      href="https://github.com/PenguinOfWar/bagofholding"
                      target="_blank"
                      rel="noopener noreferrer"
                      role="button">
                      Documentation
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn btn-dark btn-lg"
                      href="https://github.com/PenguinOfWar/bagofholding/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      role="button">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <RemoveEmptyProps />
          </div>
          <div className="row">
            <CamelToKebab />
          </div>
          <div className="row">
            <IsExternal />
          </div>
          <div className="row">
            <Guid />
          </div>
          <div className="row">
            <IsClient />
          </div>
          <div className="row">
            <StripChars />
          </div>
          <div className="row">
            <AsyncTimeout />
          </div>
        </div>
      </main>
    </>
  );
}
