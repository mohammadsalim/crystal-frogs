import Image from 'next/image'
import { useState, useEffect } from 'react'
import { initOnboard } from '../utils/onboard'
import { useConnectWallet, useSetChain, useWallets } from '@web3-onboard/react'
import { config } from '../dapp.config'
import {
  getTotalMinted,
  getMaxSupply,
  isPausedState,
  isPublicSaleState,
  isGenesisSaleState,
  genesissaleMint,
  publicMint
} from '../utils/interactV2'

import MintImage from '../public/images/Incubator.gif'

export default function Mint() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain()
  const connectedWallets = useWallets()

  const [maxSupply, setMaxSupply] = useState(0)
  const [totalMinted, setTotalMinted] = useState(0)
  const [maxMintAmount, setMaxMintAmount] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isPublicSale, setIsPublicSale] = useState(false)
  const [isGenesisSale, setIsGenesisSale] = useState(false)

  const [status, setStatus] = useState(null)
  const [mintAmount, setMintAmount] = useState(1)
  const [isMinting, setIsMinting] = useState(false)
  const [onboard, setOnboard] = useState(null)

  useEffect(() => {
    setOnboard(initOnboard)
  }, [])

  useEffect(() => {
    if (!connectedWallets.length) return

    const connectedWalletsLabelArray = connectedWallets.map(
      ({ label }) => label
    )
    window.localStorage.setItem(
      'connectedWallets',
      JSON.stringify(connectedWalletsLabelArray)
    )
  }, [connectedWallets])

  useEffect(() => {
    if (!onboard) return

    const previouslyConnectedWallets = JSON.parse(
      window.localStorage.getItem('connectedWallets')
    )

    if (previouslyConnectedWallets?.length) {
      async function setWalletFromLocalStorage() {
        await connect({
          autoSelect: {
            label: previouslyConnectedWallets[0],
            disableModals: true
          }
        })
      }

      setWalletFromLocalStorage()
    }
  }, [onboard, connect])

  useEffect(() => {
    const init = async () => {
      setMaxSupply(await getMaxSupply())
      setTotalMinted(await getTotalMinted())

      setPaused(await isPausedState())
      setIsPublicSale(await isPublicSaleState())
      const isGenesisSale = await isGenesisSaleState()
      setIsGenesisSale(isGenesisSale)

      setMaxMintAmount(
        isGenesisSale ? config.genesissaleMaxMintAmount : config.maxMintAmount
      )
    }

    init()
  }, [])

  const incrementMintAmount = () => {
    if (mintAmount < maxMintAmount) {
      setMintAmount(mintAmount + 1)
    }
  }

  const decrementMintAmount = () => {
    if (mintAmount > 1) {
      setMintAmount(mintAmount - 1)
    }
  }

  const genesissaleMintHandler = async () => {
    setIsMinting(true)

    const { success, status } = await genesissaleMint(mintAmount)

    setStatus({
      success,
      message: status
    })

    setIsMinting(false)
  }

  const publicMintHandler = async () => {
    setIsMinting(true)

    const { success, status } = await publicMint(mintAmount)

    setStatus({
      success,
      message: status
    })

    setIsMinting(false)
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen overflow-hidden bg-brand-background ">
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        <img
          src="/images/Crystals-Float.gif"
          className="absolute inset-auto block object-cover w-full min-h-screen"
        />

        <div className="flex flex-col items-center justify-center w-full h-full px-2 md:px-10">
          <div className="relative flex flex-col items-center w-full px-2 py-4 rounded-md z-1 md:max-w-3xl bg-gray-900/90 filter backdrop-blur-sm md:px-10">
            {wallet && (
              <button
                className="absolute right-4 bg-indigo-600 transition duration-200 ease-in-out font-chewy border-2 border-[rgba(0,0,0,1)] shadow-[0px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none px-4 py-2 rounded-md text-sm text-white tracking-wide uppercase"
                onClick={() =>
                  disconnect({
                    label: wallet.label
                  })
                }
              >
                Disconnect
              </button>
            )}
            <h1 className="mt-3 text-3xl font-bold text-transparent uppercase font-chewy md:text-4xl bg-gradient-to-br from-brand-green to-brand-yellow bg-clip-text">
              Crystal Frogs
            </h1>
            <h2 className="mt-3 text-2xl font-bold text-transparent uppercase font-chewy md:text-2xl bg-gradient-to-br from-brand-purple to-brand-pink bg-clip-text">
              {paused
                ? 'Mint Paused'
                : isGenesisSale
                ? 'Genesis Mint'
                : 'Public Mint'}
            </h2>
            <h3 className="text-sm tracking-widest text-brand-blue">
              {wallet?.accounts[0]?.address
                ? wallet?.accounts[0]?.address.slice(0, 8) +
                  '...' +
                  wallet?.accounts[0]?.address.slice(-4)
                : ''}
            </h3>

            <div className="flex flex-col w-full mt-10 md:flex-row md:space-x-14 md:mt-14">
              <div className="relative w-full">
                <div className="absolute z-10 flex items-center justify-center px-4 py-2 text-base font-semibold text-white bg-black border rounded-md font-chewy top-2 left-2 opacity-80 filter backdrop-blur-lg border-brand-purple">
                  <p>
                    <span className="text-brand-pink">{totalMinted}</span> /{' '}
                    {maxSupply}
                  </p>
                </div>

                <Image
                  src={MintImage}
                  alt="Crystal"
                  className="object-cover w-full sm:h-[280px] md:w-[250px] rounded-md"
                />
              </div>

              <div className="flex flex-col items-center w-full px-4 mt-16 md:mt-0">
                <div className="flex items-center justify-between w-full font-chewy">
                  <button
                    className="flex items-center justify-center h-10 font-bold rounded-md bg-brand-purple w-14 md:w-16 md:h-12 text-brand-background hover:shadow-lg"
                    onClick={decrementMintAmount}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 12H6"
                      />
                    </svg>
                  </button>

                  <p className="flex items-center justify-center flex-1 text-3xl font-bold text-center grow text-brand-pink md:text-4xl">
                    {mintAmount}
                  </p>

                  <button
                    className="flex items-center justify-center h-10 font-bold rounded-md bg-brand-purple w-14 md:w-16 md:h-12 text-brand-background hover:shadow-lg"
                    onClick={incrementMintAmount}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>

                <p className="mt-3 text-sm tracking-widest text-brand-blue">
                  Max Mint Amount: {maxMintAmount}
                </p>

                <div className="w-full py-4 mt-16 border-t border-b">
                  <div className="flex items-center justify-between w-full text-xl font-chewy text-brand-yellow">
                    <p>Total</p>

                    <div className="flex items-center space-x-3">
                      <p>
                        {Number.parseFloat(
                          isGenesisSale
                            ? config.genesisPrice * mintAmount
                            : config.price * mintAmount
                        ).toFixed(2)}{' '}
                        ETH
                      </p>{' '}
                      <span className="text-gray-400">+ GAS</span>
                    </div>
                  </div>
                </div>

                {/* Mint Button && Connect Wallet Button */}
                {wallet ? (
                  <button
                    className={` ${
                      paused || isMinting
                        ? 'bg-gray-900 cursor-not-allowed'
                        : 'bg-gradient-to-br from-brand-pink to-brand-purple shadow-lg hover:shadow-pink-400/50'
                    } font-chewy mt-12 w-full px-6 py-3 rounded-md text-2xl text-white  mx-4 tracking-wide uppercase`}
                    disabled={paused || isMinting}
                    onClick={
                      isGenesisSale ? genesissaleMintHandler : publicMintHandler
                    }
                  >
                    {isMinting ? 'Minting...' : 'Mint'}
                  </button>
                ) : (
                  <button
                    className="w-full px-6 py-3 mx-4 mt-12 text-2xl tracking-wide text-white uppercase rounded-md shadow-lg font-chewy bg-gradient-to-br from-brand-purple to-brand-pink hover:shadow-pink-400/50"
                    onClick={() => connect()}
                  >
                    Connect Wallet
                  </button>
                )}
              </div>
            </div>

            {/* Status */}
            {status && (
              <div
                className={`border ${
                  status.success ? 'border-green-500' : 'border-brand-pink-400 '
                } rounded-md text-start h-full px-4 py-4 w-full mx-auto mt-8 md:mt-4"`}
              >
                <p className="flex flex-col space-y-2 text-white text-sm md:text-base break-words ...">
                  {status.message}
                </p>
              </div>
            )}

            {/* Contract Address */}
            <div className="flex flex-col items-center w-full py-2 mt-10 border-t border-gray-800">
              <h3 className="mt-6 text-2xl uppercase font-chewy text-brand-purple">
                Contract Address
              </h3>
              <a
                href={`https://etherscan.io/address/${config.contractAddress}#readContract`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-brand-blue"
              >
                <span className="break-all ...">{config.contractAddress}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}