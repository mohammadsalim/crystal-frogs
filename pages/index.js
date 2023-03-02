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
import Logo from '/public/images/Logo.gif'
import SampleFrogs from '/public/images/sample-frogs.gif'
import Crystal from '/public/images/incubator.gif'
import LogoBanner from '/public/images/logo-banner.png'
import CarChase from '/public/images/carchase.gif'
import MintInfo from '/public/images/mint-info.gif'
import Roadmap from '/public/images/roadmap.jpg'
import DiscordBanner from '/public/images/discord-banner.png'
import Glossary from '/public/images/glossary.png'
import Staking from '/public/images/staking.png'
import TokenUtility from '/public/images/token-utility.png'
import Throw from '/public/images/Throw.gif'

import { config } from '../dapp.config'

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full min-h-screen overflow-hidden bg-[url('../public/images/Crystals-Float.gif')] bg-fixed bg-no-repeat bg-cover bg-center">
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta name="fortmatic-site-verification" content="kCCo1QRyGsaIM4mc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Frogbar />

      <section className="px-4 pt-20 pb-48">
        <div className="container flex flex-col items-center mx-auto">
          <video class="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700" autoPlay muted controls>
            <source src="./images/trailer.mp4" type="video/mp4"></source>
              Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <div className="container flex flex-col items-center w-full h-full max-w-5xl pt-4 mx-auto">
        <div className="flex flex-col items-center w-full max-w-4xl">
          <Image
          src={Logo}
          alt="Banner"
          />
          <div className="flex flex-col items-center w-full space-y-10 md:flex-row md:space-x-16">
            <div className="flex flex-col items-center justify-center px-4 py-10 text-center text-gray-800 md:items-start font-chewy md:px-0 mt-14">
              <Typography className="mt-6 text-2xl font-bold uppercase md:text-4xl font-chewy">
                ✨ Crystal Frogs is a <span className="text-green-500">community-driven animated nft series</span> on the <span className="text-green-500">Ethereum</span> Blockchain. The Collection consists of <span className="text-green-500">5000 programmatically, randomly generated NFTs</span> from 100's of illustrated traits 🌱 Ribbit! 🐸
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
                Crystal Frog holders have the opportunity to have their <span className="text-yellow-200">NFT featured in the series</span>, decide the narrative direction of the series through <span className="text-yellow-200">on-chain voting in a choose-your-own-adventure</span> poll at the end of each animated short, and have <span className="text-yellow-200">exclusive access to the production</span> of the series
              </Typography>
            </CardBody>
          </Card>
          <Image
            src={CarChase}
            className="object-cover w-64 h-64 rounded-2xl"
          />
        </div>
      </div>

      <section className="px-4 pt-20 pb-48">
        <div className="container flex flex-col items-center mx-auto">
        <Image
          src={MintInfo}
          alt="Mint"
          />
        </div>
      </section>

      {/*$Crystal*/}
      <section className="px-4 pt-20 pb-48">
        <div className="container flex flex-col items-center mx-auto">
        <Image
          src={Staking}
          alt="Staking $Crystal"
          />
        </div>
        <div className="container flex flex-col items-center mx-auto">
        <Image
          src={Glossary}
          alt="Glossary"
          />
        </div>
        <div className="container flex flex-col items-center mx-auto">
        <Image
          src={TokenUtility}
          alt="Token Utility"
          />
        </div>
      </section>

        <div className="container flex flex-col items-center mx-auto">
        <Image
          src={Throw}
          alt="Throw Crystal"
          />
        </div>
      
      {/*Roadmap*/}
      <section className="px-4 pt-20 pb-48">
        <div className="container flex flex-col items-center mx-auto">
        <Image
          src={Roadmap}
          alt="Roadmap"
          />
        </div>
      </section>

      {/*Team*/}
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
              <Typography variant="h5" color="blue-gray" className="mt-6 mb-1 font-chewy">
                Mr Roboto
              </Typography>
              <Typography variant="lead" className="font-chewy text-blue-gray-500">
                Founder, Community Leader, Project Director
              </Typography>
              <Typography variant="paragraph" className="font-chewy text-blue-gray-300">
                Published comic artist & short fiction writer, CRW major, dog dad, Discord addict
              </Typography>
              <div className="mx-auto mt-5">
                <div className="flex items-center gap-2">
                      <IconButton color="blue" variant="text">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="xl"
                      />
                      </IconButton>
                  </div>
              </div>
            </Card>

            <Card color="transparent" shadow={false} className="text-center">
              <Avatar
                src="./images/Dave35.png"
                alt="Dave"
                size="xxl"
                className="w-full h-full shadow-lg shadow-gray-500/25"
              />
              <Typography variant="h5" color="blue-gray" className="mt-6 mb-1 font-chewy">
                Dave
              </Typography>
              <Typography variant="lead" className="font-chewy text-blue-gray-500">
              Founder, Artist, Creative Director
              </Typography>
              <Typography variant="paragraph" className="font-chewy text-blue-gray-300">
              Professional 2D animator with 5 years of studio experience--Disney XD, Amazon, & Netflix
              </Typography>
              <div className="mx-auto mt-5">
                <div className="flex items-center gap-2">
                      <IconButton color="blue" variant="text">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="xl"
                      />
                      </IconButton>
                  </div>
              </div>
            </Card>

            <Card color="transparent" shadow={false} className="text-center">
              <Avatar
                src="./images/wzrdslim.png"
                alt="wzrdslim"
                size="xxl"
                className="w-full h-full shadow-lg shadow-gray-500/25"
              />
              <Typography variant="h5" color="blue-gray" className="mt-6 mb-1 font-chewy">
                WzrdSlim
              </Typography>
              <Typography variant="lead" className="font-chewy text-blue-gray-500">
                Developer, Wizard
              </Typography>
              <Typography variant="paragraph" className="font-chewy text-blue-gray-300">
                Software Engineer- SuperRare Labs, Genesis Dragons, Pixel Protos. Creative techie who streams
              </Typography>
              <div className="mx-auto mt-5">
                <div className="flex items-center gap-2">
                      <IconButton color="blue" variant="text">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="xl"
                      />
                      </IconButton>
                  </div>
              </div>
            </Card>

            <Card color="transparent" shadow={false} className="text-center">
              <Avatar
                src="./images/ross.png"
                alt="Ross"
                size="xxl"
                className="w-full h-full shadow-lg shadow-gray-500/25"
              />
              <Typography variant="h5" color="blue-gray" className="mt-6 mb-1 font-chewy">
                CtrlRoss
              </Typography>
              <Typography variant="lead" className="font-chewy text-blue-gray-500">
                Collab Manager
              </Typography>
              <Typography variant="paragraph" className="font-chewy text-blue-gray-300">
                Experienced Artist & Collaborator- CTRL+, Pixel Protos, Genesis Dragons. Anime nerd
              </Typography>
              <div className="mx-auto mt-5">
                <div className="flex items-center gap-2">
                      <IconButton color="blue" variant="text">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="xl"
                      />
                      </IconButton>
                  </div>
              </div>
            </Card>

            <Card color="transparent" shadow={false} className="text-center">
              <Avatar
                src="./images/blurrpfp.png"
                alt="Blurr"
                size="xxl"
                className="w-full h-full shadow-lg shadow-gray-500/25"
              />
              <Typography variant="h5" color="blue-gray" className="mt-6 mb-1 font-chewy">
                Blurr
              </Typography>
              <Typography variant="lead" className="font-chewy text-blue-gray-500">
                Marketing Manager
              </Typography>
              <Typography variant="paragraph" className="font-chewy text-blue-gray-300">
                Marketing Strategy & Creative Direction within web3 / defi / nfts / P2E gaming
              </Typography>
              <div className="mx-auto mt-5">
                <div className="flex items-center gap-2">
                      <IconButton color="blue" variant="text">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="xl"
                      />
                      </IconButton>
                  </div>
              </div>
            </Card>

            <Card color="transparent" shadow={false} className="text-center">
              <Avatar
                src="./images/dub.png"
                alt="Dub"
                size="xxl"
                className="w-full h-full shadow-lg shadow-gray-500/25"
              />
              <Typography variant="h5" color="blue-gray" className="mt-6 mb-1 font-chewy">
                Dub
              </Typography>
              <Typography variant="lead" className="font-chewy text-blue-gray-500">
                Advisor
              </Typography>
              <Typography variant="paragraph" className="font-chewy text-blue-gray-300">
                Experienced Community Manager, Buisiness Developer- Slam Land, Riffnode, Soulbound. Plant Wizard
              </Typography>
              <div className="mx-auto mt-5">
                <div className="flex items-center gap-2">
                      <IconButton color="blue" variant="text">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="xl"
                      />
                      </IconButton>
                  </div>
              </div>
            </Card>
            
          </div>
        </div>
      </section>

      <section className="px-4 pt-20 pb-48">
        <div className="container flex flex-col items-center mx-auto">
          <Button>Join Us On Discord</Button>
        </div>
      </section>

    </div>
  )
}
