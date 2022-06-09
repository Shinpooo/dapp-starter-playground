import 'tailwindcss/tailwind.css'
import { APP_NAME } from '@/lib/consts'
import '@rainbow-me/rainbowkit/styles.css'
import { chain, createClient, WagmiConfig } from 'wagmi'
import { Chain, apiProvider, configureChains, getDefaultWallets, RainbowKitProvider, midnightTheme } from '@rainbow-me/rainbowkit'
// import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';


// const avalancheChain: Chain = {
//   id: 43_114,
//   name: 'Avalanche',
//   network: 'avalanche',
//   iconUrl: 'https://example.com/icon.svg',
//   iconBackground: '#fff',
//   nativeCurrency: {
//     decimals: 18,
//     name: 'Avalanche',
//     symbol: 'AVAX',
//   },
//   rpcUrls: {
//     default: 'https://api.avax.network/ext/bc/C/rpc',
//   },
//   blockExplorers: {
//     default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
//     etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io' },
//   },
//   testnet: false,
// };


// const { provider, chains } = configureChains(
//   [avalancheChain],
//   [jsonRpcProvider({ rpc: chain => ({ http: chain.rpcUrls.default }) })]
// );

const { chains, provider } = configureChains(
	[chain.polygon],
	[apiProvider.infura(process.env.NEXT_PUBLIC_INFURA_ID), apiProvider.fallback()]
)


const { connectors } = getDefaultWallets({ appName: APP_NAME, chains })
const wagmiClient = createClient({ autoConnect: true, connectors, provider })

const App = ({ Component, pageProps }) => {
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider chains={chains} coolMode theme={midnightTheme()}>
				<Component {...pageProps} />
			</RainbowKitProvider>
		</WagmiConfig>
	)
}

export default App
