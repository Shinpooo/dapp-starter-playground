import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import ConnectWallet from '../components/ConnectWallet'
import Boop from '../components/Boop'

import Image from 'next/image';
import github from "../../public/images/github.svg"
import linkedin from '../../public/images/linkedin.svg'
import profile from '../../public/images/naruto.jpg'


const Home: FC = () => {
	return (
		<div className="dark bg-gray-900 pb-10">
			<div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2"></div>
			<div className="relative flex flex-col justify-around min-h-screen py-4 bg-gray-100 dark items-top dark:bg-gray-900 sm:items-center sm:pt-0 max-w-4xl mx-auto px-6">
				<div className="mx-auto w-full mb-10 py-16">
					<div className="flex justify-between pt-8 sm:pt-0 items-center">
						<h1 className="text-2xl md:text-4xl font-bold dark:text-white">👋 Hi! Selim here :)</h1>
						<div className="my-auto flex gap-4">
							{/* <ConnectWallet /> */}
							<div className="rounded-full">
								<Image className="rounded-full" src={profile} width="96px" height="96px"></Image>
							</div>
							<div className="flex flex-col justify-around">
								<div>
									<a href="https://github.com/Shinpooo" rel="noreferrer" target="_blank">
										<Image src={github}></Image>
									</a>
								</div>
								<div>
									<a
										href="https://www.linkedin.com/in/s%C3%A9lim-el-mekki-9557a91a2/"
										rel="noreferrer"
										target="_blank"
									>
										<Image src={linkedin}></Image>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Boop rotation={2} timing={200}>
					<div className="text-white text-base font-thin mb-8 bg-black py-4 px-4 rounded-lg border-2 border-from-indigo-500 border-via-purple-500 border-to-pink-500">
						Hey! Selim here -- I&apos;m just a guy that loves experimenting & creating things for others. I
						started my first side project at 20 and have been making stuff ever since! Currently, I&apos;m
						self-employed at Nakalabs, a web3 agency where I get to work w/ customers.
					</div>
				</Boop>
				<div className="text-white text-4xl font-bold mb-8">Things I made</div>
				<div className="mx-auto w-full">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<Boop rotation={3} timing={200}>
							<a href="https://github.com/Shinpooo/interest-free-bank" rel="noreferrer" target="_blank">
								<div className="bg-gradient-to-r from-orange-600  to-violet-800 rounded-xl justify-center inline-block px-2 py-16 text-4xl text-center text-gray-200 font-semibold w-full">
									<p className="text-4xl">Interest-free Bank</p>
									<p className="text-lg">Supply & borrow at 0% APR</p>
									<p className="text-sm">Tech: Solidity, Foudry, Chainlink</p>
								</div>
							</a>
						</Boop>

						<Boop rotation={3} timing={200}>
							<a href="https://github.com/Shinpooo/w3go" rel="noreferrer" target="_blank">
								<div className="bg-gradient-to-r from-orange-600  to-violet-800 rounded-xl justify-center inline-block px-2 py-16 text-4xl text-center text-gray-200 font-semibold w-full">
									<p className="text-4xl">WeGo</p>
									<p className="text-lg">Optimize your car pooling</p>
									<p className="text-sm">Tech: Python, Pyomo, Gurobi</p>
								</div>
							</a>
						</Boop>

						<Boop rotation={3} timing={200}>
							<a href="https://curiouscards.vercel.app" rel="noreferrer" target="_blank">
								<div className="bg-gradient-to-r from-orange-600  to-violet-800 rounded-xl justify-center inline-block px-2 py-16 text-4xl text-center text-gray-200 font-semibold w-full">
									<p className="text-4xl">CuriousCards</p>
									<p className="text-lg">Ask anyone anything, get paid to reply!</p>
									<p className="text-sm">Tech: Solidity, hardhat, nextjs, ethers, wagmi.sh, lens</p>
								</div>
							</a>
						</Boop>

						<Boop rotation={3} timing={200}>
							<a href="https://github.com/Shinpooo/pythermostat" rel="noreferrer" target="_blank">
								<div className="bg-gradient-to-r from-orange-600  to-violet-800 rounded-xl justify-center inline-block px-2 py-16 text-4xl text-center text-gray-200 font-semibold w-full">
									<p className="text-4xl">Pythermostat</p>
									<p className="text-lg">Optimize your home heating schedule</p>
									<p className="text-sm">Tech: Python, Reinforcement learning, Pyomo</p>
								</div>
							</a>
						</Boop>
						<Boop rotation={3} timing={200}>
							<a
								href="https://scholar.google.com/citations?user=PFWYvcgAAAAJ"
								rel="noreferrer"
								target="_blank"
							>
								<div className="bg-gradient-to-r from-orange-600  to-violet-800 rounded-xl justify-center inline-block px-2 py-16 text-4xl text-center text-gray-200 font-semibold w-full">
									<p className="text-4xl">Research</p>
									<p className="text-lg">Research papers @ Uliege.</p>
									<p className="text-sm">Tech: Latex</p>
								</div>
							</a>
						</Boop>
						<Boop rotation={3} timing={200}>
							<a href="https://earnifty.xyz" rel="noreferrer" target="_blank">
								<div className="bg-gradient-to-r from-orange-600  to-violet-800 rounded-xl justify-center inline-block px-2 py-16 text-4xl text-center text-gray-200 font-semibold w-full">
									<p className="text-4xl">Earnifty</p>
									<p className="text-lg">A new way for NFTs to earn rewards</p>
									<p className="text-sm">Tech: Nextjs, solidity, Moralis, hardhat</p>
								</div>
							</a>
						</Boop>
						<Boop rotation={3} timing={200}>
							<a href="https://nakalabs.com" rel="noreferrer" target="_blank">
								<div className="bg-gradient-to-r from-orange-600  to-violet-800 rounded-xl justify-center inline-block px-2 py-16 text-4xl text-center text-gray-200 font-semibold w-full">
									<p className="text-4xl">Nakalabs</p>
									<p className="text-lg">A web3 agency, we provide help for builders</p>
									<p className="text-sm">Tech: Solidity, Nextjs, web3</p>
								</div>
							</a>
						</Boop>
						<Boop rotation={3} timing={200}>
							<a href="https://github.com/Shinpooo/finaviz" rel="noreferrer" target="_blank">
								<div className="bg-gradient-to-r from-orange-600  to-violet-800 rounded-xl justify-center inline-block px-2 py-16 text-4xl text-center text-gray-200 font-semibold w-full">
									<p className="text-4xl">Finaviz</p>
									<p className="text-lg">Get dashboards for your favorite stocks</p>
									<p className="text-sm">Tech: Python, Django, PostgreSQL, yfinance</p>
								</div>
							</a>
						</Boop>

						<Boop rotation={3} timing={200}>
							<a
								href="https://github.com/Shinpooo/Recommender-system-for-the-billiard-game"
								rel="noreferrer"
								target="_blank"
							>
								<div className="bg-gradient-to-r from-orange-600  to-violet-800 rounded-xl justify-center inline-block px-2 py-16 text-4xl text-center text-gray-200 font-semibold w-full">
									<p className="text-4xl">AICarom</p>
									<p className="text-lg">An AI that learns to play billiards</p>
									<p className="text-sm">Tech: Python, VPython, KerasRL</p>
								</div>
							</a>
						</Boop>

						{/* <div className="bg-gradient-to-r from-orange-600  to-violet-800 rounded-xl justify-center inline-block px-2 py-16 text-4xl text-center text-gray-200 font-semibold hover:bg-livai hover:text-transparent transtion duration-300 ease-out hover:ease-in hover:-translate-y-1 hover:scale-110">
							<p className='text-4xl'>Design</p>
							<p className='text-lg'>100% newbie in 3D design and 2D animation</p>
						</div>

						<div className="bg-gradient-to-r from-orange-600  to-violet-800 rounded-xl justify-center inline-block px-2 py-16 text-4xl text-center text-gray-200 font-semibold hover:bg-livai hover:text-transparent transtion duration-300 ease-out hover:ease-in hover:-translate-y-1 hover:scale-110">
							<p className='text-4xl'>Quest</p>
							<p className='text-lg'>The whole purpose of this website</p>
						</div> */}

						{/* <div className='bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-2xl justify-center inline-block px-2 py-8 text-xl text-center text-black'>Investooor</div>
						<div className='bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-2xl justify-center inline-block px-2 py-8 text-xl text-center text-black'>Anime</div>
						<div className='bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-2xl justify-center inline-block px-2 py-8 text-xl text-center text-black'>Gaming</div>
						<div className='bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-2xl justify-center inline-block px-2 py-8 text-xl text-center text-black'>Sports</div>
						<div className='bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-2xl justify-center inline-block px-2 py-8 text-xl text-center text-black'>Traveling</div>
						<div className='bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-2xl justify-center inline-block px-2 py-8 text-xl text-center text-black'>Design</div>
						<div className='bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-2xl justify-center inline-block px-2 py-8 text-xl text-center text-black'>Engineering and Research</div> */}
					</div>

					{/* <div className="mt-8 overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-lg">
						<div className="grid grid-cols-1 md:grid-cols-2">
							<div className="p-6">
								<div className="flex items-center">
									<BookOpenIcon className="w-8 h-8 text-gray-500" />
									
									<div className="ml-4 text-lg font-semibold leading-7">
										<a
											href="https://wagmi.sh"
											className="text-gray-900 underline dark:text-white"
										>
											Next.js Docs
										</a>
									</div>
								</div>

								<div className="ml-12">
									<div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
										Next.js gives you the best developer experience with all the features you need for
										production: hybrid static &amp; server rendering, TypeScript support, smart
										bundling, route pre-fetching, and more. No config needed.
									</div>
								</div>
							</div>

							<div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
								<div className="flex items-center">
									<BookOpenIcon className="w-8 h-8 text-gray-500" />
									<div className="ml-4 text-lg font-semibold leading-7">
										<a href="https://laracasts.com" className="text-gray-900 underline dark:text-white">
											wagmi Docs
										</a>
									</div>
								</div>

								<div className="ml-12">
									<div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
										wagmi is a collection of React Hooks containing everything you need to start working
										with Ethereum. wagmi makes it easy to display ENS and balance information, sign
										messages, interact with contracts, and much more — all with caching, request
										deduplication, and persistence.
									</div>
								</div>
							</div>

							<div className="p-6 border-t border-gray-200 dark:border-gray-700">
								<div className="flex items-center">
									<BookOpenIcon className="w-8 h-8 text-gray-500" />
									<div className="ml-4 text-lg font-semibold leading-7">
										<a
											href="https://laravel-news.com/"
											className="text-gray-900 underline dark:text-white"
										>
											Tailwind Docs
										</a>
									</div>
								</div>

								<div className="ml-12">
									<div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
										Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of
										the building blocks you need to build bespoke designs without any annoying
										opinionated styles you have to fight to override.
									</div>
								</div>
							</div>

							<div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l">
								<div className="flex items-center">
									<CodeIcon className="w-8 h-8 text-gray-500" />
									<div className="ml-4 text-lg font-semibold leading-7 text-gray-900 dark:text-white">
										About this Template
									</div>
								</div>

								<div className="ml-12">
									<div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
										This starter kit is composed of{' '}
										<a href="https://nextjs.org" className="underline" target="_blank" rel="noreferrer">
											Next.js
										</a>{' '}
										and{' '}
										<a
											href="https://tailwindcss.com"
											className="underline"
											target="_blank"
											rel="noreferrer"
										>
											Tailwind CSS
										</a>
										, with{' '}
										<a
											href="https://rainbowkit.com"
											className="underline"
											target="_blank"
											rel="noreferrer"
										>
											RainbowKit
										</a>
										,{' '}
										<a href="https://ethers.org" className="underline" target="_blank" rel="noreferrer">
											ethers
										</a>{' '}
										&amp;{' '}
										<a href="https://wagmi.sh" className="underline" target="_blank" rel="noreferrer">
											wagmi
										</a>{' '}
										for all your web3 needs. It uses{' '}
										<a
											href="https://www.typescriptlang.org/"
											className="underline"
											target="_blank"
											rel="noreferrer"
										>
											Typescript
										</a>{' '}
										and an opinionated directory structure for maximum dev confy-ness. Enjoy!
									</div>
								</div>
							</div>
						</div>
					</div> */}

					{/* <div className="flex justify-center mt-4 sm:items-center sm:justify-between">
						<div className="text-sm text-center text-gray-500 sm:text-left">
							<div className="flex items-center">
								<ShareIcon className="w-5 h-5 -mt-px text-gray-400" />

								<a href="https://twitter.com/m1guelpf" className="ml-1 underline">
									Share
								</a>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	)
}

export default Home
