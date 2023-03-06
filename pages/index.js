import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  Card,
  CardBody,
  Avatar,
  Typography,
  IconButton,
  Button
} from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

// components
import Frogbar from '../components/Frogbar.js'

// images
import Logo from '/public/images/Logo.gif'
import SampleFrogs from '/public/images/sample-frogs.gif'
import CarChase from '/public/images/carchase.gif'
import MintInfo from '/public/images/mint-info.gif'
import Roadmap from '/public/images/roadmap.jpg'
import DiscordBanner from '/public/images/discord-banner.png'
import Glossary from '/public/images/glossary.png'
import Staking from '/public/images/staking.png'
import TokenUtility from '/public/images/token-utility.png'
import Throw from '/public/images/Throw.gif'
import TraitsSk8r from '/public/images/traitsskateboard.gif'

import { config } from '../dapp.config'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen">
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta name="fortmatic-site-verification" content="kCCo1QRyGsaIM4mc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Frogbar />

      <section
        className="container flex flex-col items-center w-full h-full max-w-5xl pt-4 mx-auto"
        id="about-section"
      >
        <div className="flex flex-col items-center w-full max-w-4xl">
          <Image src={Logo} alt="Banner" />
          <div className="flex flex-col items-center w-full space-y-10 md:flex-row md:space-x-16">
            <div className="flex flex-col items-center justify-center px-4 py-10 text-center text-gray-800 md:items-start font-chewy md:px-0 mt-14">
              <Typography className="mt-6 text-2xl font-bold uppercase md:text-4xl font-chewy">
                ✨ Crystal Frogs is a{' '}
                <span className="text-green-500">
                  community-driven animated nft series
                </span>{' '}
                on the <span className="text-green-500">Ethereum</span>{' '}
                Blockchain. The Collection consists of{' '}
                <span className="text-green-500">
                  5000 programmatically, randomly generated NFTs
                </span>{' '}
                from 100s of illustrated traits 🌱 Ribbit! 🐸
              </Typography>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Image
            src={SampleFrogs}
            className="object-cover w-64 h-64 rounded-2xl"
          />
          <Card className="bg-green-500 shadow-lg rounded-2xl shadow-gray-500/10">
            <CardBody className="px-8 text-center">
              <Typography variant="lead" className="text-gray-200 font-chewy">
                Crystal Frog holders have the opportunity to have their{' '}
                <span className="text-yellow-200">
                  NFT featured in the series
                </span>
                , decide the narrative direction of the series through{' '}
                <span className="text-yellow-200">
                  on-chain voting in a choose-your-own-adventure
                </span>{' '}
                poll at the end of each animated short, and have{' '}
                <span className="text-yellow-200">
                  exclusive access to the production
                </span>{' '}
                of the series
              </Typography>
            </CardBody>
          </Card>
          <Image
            src={CarChase}
            className="object-cover w-64 h-64 rounded-2xl"
          />
        </div>
      </section>

      <section className="px-4 pt-20 pb-48">
        <div className="container flex flex-col items-center mx-auto">
          <Image src={MintInfo} className="rounded-2xl" alt="Mint" />
        </div>
      </section>

      {/*Trailer*/}
      <section
        className="container flex flex-col items-center w-full h-full max-w-5xl pt-4 mx-auto"
        id="trailer-section"
      >
        <iframe
          className="w-full max-h-full border border-gray-200 rounded-2xl dark:border-gray-700"
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/xL4HzwmVkVg?mute=1&autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>

      {/*$Crystal*/}
      <section className="px-4 pt-20 pb-48" id="crystal-section">
        <div className="container flex flex-col items-center mx-auto">
          <Image src={Staking} className="rounded-2xl" alt="Staking $Crystal" />
        </div>
        <div className="container flex flex-col items-center mx-auto">
          <Image src={Glossary} className="rounded-2xl" alt="Glossary" />
        </div>
        <div className="container flex flex-col items-center mx-auto">
          <Image
            src={TokenUtility}
            className="rounded-2xl"
            alt="Token Utility"
          />
        </div>
        <div className="container flex flex-col items-center mx-auto">
          <Image src={Throw} className="rounded-2xl" alt="Throw Crystal" />
        </div>
      </section>

      {/*Roadmap*/}
      <section className="px-4 pt-20 pb-48" id="roadmap-section">
        <div className="container flex flex-col items-center mx-auto">
          <Image src={Roadmap} className="rounded-2xl" alt="Roadmap" />
        </div>
      </section>

      <div className="container flex flex-col items-center mx-auto">
        <Image
          src={TraitsSk8r}
          className="rounded-2xl"
          alt="Staking $Crystal"
        />
      </div>

      {/*Team*/}
      <section className="px-4 pt-20 pb-48" id="team-section">
        <div className="container flex flex-col items-center mx-auto">
          <h2 className="text-2xl font-bold text-green-500 uppercase md:text-4xl">
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
              <Typography
                variant="h5"
                color="blue-gray"
                className="mt-6 mb-1 text-blue-500 font-chewy"
              >
                Mr Roboto
              </Typography>
              <Typography variant="lead" className="text-green-500 font-chewy">
                Founder, Community Leader, Project Director
              </Typography>
              <Typography
                variant="paragraph"
                className="font-chewy text-blue-gray-500"
              >
                Published comic artist & short fiction writer, CRW major, dog
                dad, Discord addict
              </Typography>
              <div className="mx-auto mt-5">
                <a
                  className="flex items-center gap-2"
                  target="_blank"
                  href="https://twitter.com/mrrobotoeth"
                  rel="noopener noreferrer"
                >
                  <IconButton color="blue" variant="text">
                    <FontAwesomeIcon icon={faTwitter} size="xl" />
                  </IconButton>
                </a>
              </div>
            </Card>

            <Card color="transparent" shadow={false} className="text-center">
              <Avatar
                src="./images/Dave35.png"
                alt="Dave"
                size="xxl"
                className="w-full h-full shadow-lg shadow-gray-500/25"
              />
              <Typography
                variant="h5"
                color="blue-gray"
                className="mt-6 mb-1 text-blue-500 font-chewy"
              >
                Dave
              </Typography>
              <Typography variant="lead" className="text-green-500 font-chewy">
                Founder, Artist, Creative Director
              </Typography>
              <Typography
                variant="paragraph"
                className="font-chewy text-blue-gray-500"
              >
                Professional 2D animator with 5 years of studio
                experience--Disney XD, Amazon, & Netflix
              </Typography>
              <div className="mx-auto mt-5">
                <a
                  className="flex items-center gap-2"
                  target="_blank"
                  href="https://twitter.com/crystalfrogsnft"
                  rel="noopener noreferrer"
                >
                  <IconButton color="blue" variant="text">
                    <FontAwesomeIcon icon={faTwitter} size="xl" />
                  </IconButton>
                </a>
              </div>
            </Card>

            <Card color="transparent" shadow={false} className="text-center">
              <Avatar
                src="./images/wzrdslim.png"
                alt="wzrdslim"
                size="xxl"
                className="w-full h-full shadow-lg shadow-gray-500/25"
              />
              <Typography
                variant="h5"
                color="blue-gray"
                className="mt-6 mb-1 text-blue-500 font-chewy"
              >
                WzrdSlim
              </Typography>
              <Typography variant="lead" className="text-green-500 font-chewy">
                Developer, Wizard
              </Typography>
              <Typography
                variant="paragraph"
                className="font-chewy text-blue-gray-500"
              >
                Software Engineer- SuperRare Labs, Genesis Dragons, Pixel
                Protos. Creative techie who streams
              </Typography>
              <div className="mx-auto mt-5">
                <a
                  className="flex items-center gap-2"
                  target="_blank"
                  href="https://twitter.com/wzrdslim"
                  rel="noopener noreferrer"
                >
                  <IconButton color="blue" variant="text">
                    <FontAwesomeIcon icon={faTwitter} size="xl" />
                  </IconButton>
                </a>
              </div>
            </Card>

            <Card color="transparent" shadow={false} className="text-center">
              <Avatar
                src="./images/ross.png"
                alt="Ross"
                size="xxl"
                className="w-full h-full shadow-lg shadow-gray-500/25"
              />
              <Typography
                variant="h5"
                color="blue-gray"
                className="mt-6 mb-1 text-blue-500 font-chewy"
              >
                CtrlRoss
              </Typography>
              <Typography variant="lead" className="text-green-500 font-chewy">
                Collab Manager
              </Typography>
              <Typography
                variant="paragraph"
                className="font-chewy text-blue-gray-500"
              >
                Experienced Artist & Collaborator- CTRL+, Pixel Protos, Genesis
                Dragons. Anime nerd
              </Typography>
              <div className="mx-auto mt-5">
                <a
                  className="flex items-center gap-2"
                  target="_blank"
                  href="https://twitter.com/ctrlross"
                  rel="noopener noreferrer"
                >
                  <IconButton color="blue" variant="text">
                    <FontAwesomeIcon icon={faTwitter} size="xl" />
                  </IconButton>
                </a>
              </div>
            </Card>

            <Card color="transparent" shadow={false} className="text-center">
              <Avatar
                src="./images/blurrpfp.png"
                alt="Blurr"
                size="xxl"
                className="w-full h-full shadow-lg shadow-gray-500/25"
              />
              <Typography
                variant="h5"
                color="blue-gray"
                className="mt-6 mb-1 text-blue-500 font-chewy"
              >
                Blurr
              </Typography>
              <Typography variant="lead" className="text-green-500 font-chewy">
                Marketing Manager
              </Typography>
              <Typography
                variant="paragraph"
                className="font-chewy text-blue-gray-500"
              >
                Marketing Strategy & Creative Direction within web3 / defi /
                nfts / P2E gaming
              </Typography>
              <div className="mx-auto mt-5">
                <a
                  className="flex items-center gap-2"
                  target="_blank"
                  href="https://twitter.com/blurr_official_"
                  rel="noopener noreferrer"
                >
                  <IconButton color="blue" variant="text">
                    <FontAwesomeIcon icon={faTwitter} size="xl" />
                  </IconButton>
                </a>
              </div>
            </Card>

            <Card color="transparent" shadow={false} className="text-center">
              <Avatar
                src="./images/dub.png"
                alt="Dub"
                size="xxl"
                className="w-full h-full shadow-lg shadow-gray-500/25"
              />
              <Typography
                variant="h5"
                color="blue-gray"
                className="mt-6 mb-1 text-blue-500 font-chewy"
              >
                Dub
              </Typography>
              <Typography variant="lead" className="text-green-500 font-chewy">
                Advisor
              </Typography>
              <Typography
                variant="paragraph"
                className="font-chewy text-blue-gray-500"
              >
                Experienced Community Manager, Buisiness Developer. Plant Wizard
              </Typography>
              <div className="mx-auto mt-5">
                <a
                  className="flex items-center gap-2"
                  target="_blank"
                  href="https://twitter.com/uhhdub"
                  rel="noopener noreferrer"
                >
                  <IconButton color="blue" variant="text">
                    <FontAwesomeIcon icon={faTwitter} size="xl" />
                  </IconButton>
                </a>
              </div>
            </Card>
          </div>
        </div>
        <div className="container relative mx-auto">
          <Image src={DiscordBanner} className="rounded-2xl" alt="Discord" />
          <button className="absolute inset-0 flex items-center justify-center w-full h-full">
            <a
              className="px-6 py-3 font-medium text-white rounded-full bg-brand-purple"
              target="_blank"
              href="https://discord.gg/crystalfrogs"
              rel="noopener noreferrer"
            >
              Join Us On Discord
            </a>
          </button>
        </div>
      </section>
    </div>
  )
}
