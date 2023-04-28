import { PageMeta } from 'components/Layout/Page'
import { launchpadsConfig } from 'config/constants'
import { useTranslation } from '@pancakeswap/localization'
import { useRouter } from 'next/router'
import { useLaunchpadFromId } from 'state/launchpads/hooks'
import { getAddress } from 'utils/addressHelpers'
import LaunchpadPage from './components/LaunchpadPage'


/**
 * Note: currently there should be only 1 active IFO at a time
 */


const Launchpad = () => {
  const { t } = useTranslation()
  const router = useRouter()

  const launchpadAddress = router.query.launchpadAddress as string
  const activeLaunchpad = launchpadsConfig.find((launchpad) => (getAddress(launchpad.address) === launchpadAddress))

  const launchpad = useLaunchpadFromId(activeLaunchpad.id)
  return (
    <>
      <PageMeta />
      <LaunchpadPage launchpad={launchpad} />
    </>
  )
}
export default Launchpad
