import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// components
import Frogbar from '../components/Frogbar.js'

// images
import Logo from '/public/images/Logo.png'

import { config } from '../dapp.config'

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full min-h-screen overflow-hidden bg-brand-background">
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta name="fortmatic-site-verification" content="kCCo1QRyGsaIM4mc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Frogbar />

      <div className="container flex flex-col items-center w-full h-full max-w-5xl pt-4 mx-auto">
        <div className="flex flex-col items-center w-full max-w-4xl">
          <Link href="/mint" passHref>
            <h1 className="inline-flex items-center px-6 mt-16 text-sm font-medium text-center uppercase rounded font-chewy oy-2 sm:text-2xl md:text-3xl text-rose-500 hover:bg-rose-600 hover:text-white">
              Go to minting page
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 ml-2 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </h1>
          </Link>

          <div className="flex flex-col items-center w-full mt-20 space-y-10 md:flex-row md:space-x-16">
            {/* CrystalFrogs Image */}
            <img
              src="/images/sample-frogs.gif"
              className="object-cover w-64 h-64 rounded-md"
            />

            <div className="flex flex-col items-center justify-center px-4 py-10 text-center text-gray-800 md:items-start font-chewy md:px-0 mt-14">
              <h2 className="text-2xl font-bold uppercase md:text-4xl">
                About Crystal Frogs
              </h2>

              <p className="mt-6 text-lg">
                {`✨5000 Crystal Frogs NFTs coming soon. Community Driven Animated Cartoon 🌱Ribbit! 🐸`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
