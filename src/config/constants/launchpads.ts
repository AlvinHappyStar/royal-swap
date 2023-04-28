import { serializeTokens, bscTokens } from '@pancakeswap/tokens'
import { SerializedLaunchpadConfig } from './types'

const serializedTokens = serializeTokens(bscTokens)

const launchpads: SerializedLaunchpadConfig[] = [
  // {
  //   id: 1,
  //   address: {
  //     97: '0x0Ff075BD752Ef55CE0B17458f0292cDbf75Ae6d2',
  //     56: '0x31608ceA5d7525831C62249b509873AA787C41C0',
  //   },
  //   isActive: true,
  //   name: 'Elysium Royale',
  //   subTitle: 'A Decentralized Finance Casino',
  //   description: 'Earn, Stake, Farm and lottery all in one place.  Use passive income rewards in the Elysium Royale Casino',
  //   projectSiteUrl: 'https://elysiumroyale.finance/',
  //   releaseAt: 0,
  //   // currency: serializedTokens.busd,
  //   token: serializedTokens.cake,
  // },
]

export default launchpads
