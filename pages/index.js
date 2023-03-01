import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// components
import Frogbar from '../components/Frogbar.js'

// images
import Logo from '/public/images/Logo.png'
import LogoBanner from '/public/images/logo-banner.png'

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
          <Image
          src={LogoBanner}
          alt="Banner"
          />

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
