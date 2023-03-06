import { useState, useEffect } from 'react'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton
} from '@material-tailwind/react'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image'

// images
import Logo from '/public/images/Logo.png'

export default function Frogbar() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const scrollPosition = useScrollPosition()

  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const navList = (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h3"
        color="blue-gray"
        className="p-1 text-green-500 uppercase font-chewy"
      >
        <Link href="#about-section" className="flex items-center" passHref>
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h3"
        color="blue-gray"
        className="p-1 text-green-500 uppercase font-chewy"
      >
        <Link href="#trailer-section" className="flex items-center" passHref>
          Trailer
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h3"
        color="blue-gray"
        className="p-1 text-purple-900 uppercase font-chewy"
      >
        <Link href="#crystal-section" className="flex items-center" passHref>
          $Crystal
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h3"
        color="blue-gray"
        className="p-1 text-green-500 uppercase font-chewy"
      >
        <Link href="#roadmap-section" className="flex items-center" passHref>
          Roadmap
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h3"
        color="blue-gray"
        className="p-1 text-green-500 uppercase font-chewy"
      >
        <Link href="#team-section" className="flex items-center" passHref>
          Team
        </Link>
      </Typography>
    </ul>
  )

  return (
    <Navbar
      className={classNames(
        scrollPosition > 0 ? 'shadow bg-brand-background' : 'shadow-none',
        'transition-shadow sticky top-0 z-50 px-4 py-2 mx-auto lg:px-8 lg:py-4'
      )}
      color="transparent"
      fullWidth={true}
    >
      <div className="container flex items-center justify-between w-full mx-auto text-blue-gray-900">
        <Link href="/" passHref>
          <Image
            className="mr-4 py-1.5 cursor-pointer active:scale-90"
            src={Logo}
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
        <a
          target="_blank"
          href="https://twitter.com/crystalfrogsnft"
          rel="noopener noreferrer"
        >
          <IconButton color="blue" variant="text" size="lg">
            <FontAwesomeIcon icon={faTwitter} size="2xl" />
          </IconButton>
        </a>
        <a
          target="_blank"
          href="https://discord.gg/crystalfrogs"
          rel="noopener noreferrer"
        >
          <IconButton color="deep-purple" variant="text" size="lg">
            <FontAwesomeIcon icon={faDiscord} size="2xl" />
          </IconButton>
        </a>
        <div className="hidden lg:block">{navList}</div>
        <Button
          variant="gradient"
          size="lg"
          className="hidden lg:inline-block font-chewy"
          color="gray"
        >
          <span>
            Mint <FontAwesomeIcon icon={faLock} size="sm" />
          </span>
        </Button>
        <IconButton
          variant="text"
          className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button
            variant="gradient"
            size="lg"
            fullWidth
            className="mb-2 font-chewy"
            color="gray"
          >
            <span>
              Mint <FontAwesomeIcon icon={faLock} size="sm" />
            </span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  )
}
