import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://data-seed-prebsc-1-s1.binance.org:8545/'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export default null
