import { useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@pancakeswap/wagmi'
import { BIG_ZERO } from 'utils/bigNumber'
import { Token } from '@pancakeswap/sdk'
import { getBep20Contract } from 'utils/contractHelpers'
import { ethers } from 'ethers'
import { useSlowRefreshEffect } from 'hooks/useRefreshEffect'

const useLaunchpadAllowance = (spenderAddress: string, currency?: Token, dependency?: any): BigNumber => {
  const { account } = useWeb3React()
  const [allowance, setAllowance] = useState(BIG_ZERO)

  useSlowRefreshEffect(() => {
    const fetch = async () => {
      if (!currency) {
        setAllowance(new BigNumber(ethers.constants.MaxUint256.toJSON()))
        return
      }

      try {
        const tokenContract = getBep20Contract(currency.address)
        const res = await tokenContract.allowance(account, spenderAddress)
        setAllowance(new BigNumber(res.toString()))
      } catch (e) {
        console.error(e)
      }
    }

    if(account) {
      fetch()
    }
  }, [account, spenderAddress, currency, dependency])

  return allowance
}

export default useLaunchpadAllowance
