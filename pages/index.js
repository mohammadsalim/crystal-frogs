import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  Card, 
  Avatar, 
  Typography,
  IconButton
} from "@material-tailwind/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'


// components
import Frogbar from '../components/Frogbar.js'

// images
import Logo from '/public/images/Logo.png'
import LogoBanner from '/public/images/logo-banner.png'
import Roboto from '/public/images/Roboto46.png'

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

      <section className="px-4 pt-20 pb-48">
        <div className="container flex flex-col items-center mx-auto">
          <h2 className="text-2xl font-bold uppercase md:text-4xl">
                Meet The Team
          </h2>
          <div className="grid grid-cols-1 gap-12 mt-24 gap-x-24 md:grid-cols-2 xl:grid-cols-4">

            <Card color="transparent" shadow={false} className="text-center">
              <Avatar
                src="./images/Roboto46.png"
                alt="Roboto"
                size="xxl"
                className="w-full h-full shadow-lg shadow-gray-500/25"
              />
              <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
                Mr Roboto
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                Founder
              </Typography>
              <div className="mx-auto mt-5">
                <div className="flex items-center gap-2">
                      <IconButton color="blue" variant="text">
                      <FontAwesomeIcon
                        icon={faTwitter}
                      />
                      </IconButton>
                  </div>
              </div>
            </Card>

            <Card color="transparent" shadow={false} className="text-center">
              <Avatar
                src="./images/Roboto46.png"
                alt="Roboto"
                size="xxl"
                className="w-full h-full shadow-lg shadow-gray-500/25"
              />
              <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
                Mr Roboto
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                Founder
              </Typography>
              <div className="mx-auto mt-5">
                <div className="flex items-center gap-2">
                      <IconButton color="blue" variant="text">
                      <FontAwesomeIcon
                        icon={faTwitter}
                      />
                      </IconButton>
                  </div>
              </div>
            </Card>

            <Card color="transparent" shadow={false} className="text-center">
              <Avatar
                src="./images/Roboto46.png"
                alt="Roboto"
                size="xxl"
                className="w-full h-full shadow-lg shadow-gray-500/25"
              />
              <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
                Mr Roboto
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                Founder
              </Typography>
              <div className="mx-auto mt-5">
                <div className="flex items-center gap-2">
                      <IconButton color="blue" variant="text">
                      <FontAwesomeIcon
                        icon={faTwitter}
                      />
                      </IconButton>
                  </div>
              </div>
            </Card>

            <Card color="transparent" shadow={false} className="text-center">
              <Avatar
                src="./images/Roboto46.png"
                alt="Roboto"
                size="xxl"
                className="w-full h-full shadow-lg shadow-gray-500/25"
              />
              <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
                Mr Roboto
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                Founder
              </Typography>
              <div className="mx-auto mt-5">
                <div className="flex items-center gap-2">
                      <IconButton color="blue" variant="text">
                      <FontAwesomeIcon
                        icon={faTwitter}
                      />
                      </IconButton>
                  </div>
              </div>
            </Card>

            <Card color="transparent" shadow={false} className="text-center">
              <Avatar
                src="./images/Roboto46.png"
                alt="Roboto"
                size="xxl"
                className="w-full h-full shadow-lg shadow-gray-500/25"
              />
              <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
                Mr Roboto
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                Founder
              </Typography>
              <div className="mx-auto mt-5">
                <div className="flex items-center gap-2">
                      <IconButton color="blue" variant="text">
                      <FontAwesomeIcon
                        icon={faTwitter}
                      />
                      </IconButton>
                  </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}
