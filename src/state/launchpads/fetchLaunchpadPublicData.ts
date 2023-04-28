import { ChainId } from '@pancakeswap/sdk'
import launchpadAbi from 'config/abi/launchpad.json'
import chunk from 'lodash/chunk'
import { getAddress } from 'utils/addressHelpers'
import { multicallv2 } from 'utils/multicall'
import { SerializedLaunchpad } from '../types'
import { SerializedLaunchpadConfig } from '../../config/constants/types'

const fetchLaunchpadCalls = (launchpad: SerializedLaunchpad) => {
    const launchpadAddress = getAddress(launchpad.address)
    return [
        'startTime',
        'endTime',
        'HARD_CAP',
        'SOFT_CAP',
        'TOKEN_PRICE',
        'CONTRIBUTION_MIN',
        'CONTRIBUTION_MAX',
        'totalSold',
        'totalRaised',
        'status',
        'fundersCounter',
    ].map((method) => ({
        address: launchpadAddress,
        name: method,
    }))
}

export const fetchLaunchpadPublicData = async (launchpads: SerializedLaunchpadConfig[], chainId = ChainId.BSC): Promise<any[]> => {
    const launchpadCalls = launchpads.flatMap((launchpad) => fetchLaunchpadCalls(launchpad))
    const chunkSize = launchpadCalls.length / launchpads.length
    const launchpadMultiCallResult = await multicallv2({abi: launchpadAbi, calls: launchpadCalls, chainId})
    return chunk(launchpadMultiCallResult, chunkSize)
}