import { bscTestnetTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'ROYAL',
    lpAddress: '0xc39132223fD8C47e9a26825f4B1Dc1E099134eD5',
    token: bscTestnetTokens.syrup,
    quoteToken: bscTestnetTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'ROYAL-BNB LP',
    lpAddress: '0xbd072042A02D042897223cDf040fD9c60c808E4F',
    token: bscTestnetTokens.cake,
    quoteToken: bscTestnetTokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddress: '0x9482643D8B7a3981b995278a009A49EF33353073',
    token: bscTestnetTokens.wbnb,
    quoteToken: bscTestnetTokens.busd,
  },
  {
    pid: 4,
    lpSymbol: 'ROYAL-BUSD LP',
    lpAddress: '0x5245370753e57Efd44E01063A58860a3F0ed32B4',
    token: bscTestnetTokens.cake,
    quoteToken: bscTestnetTokens.busd,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
