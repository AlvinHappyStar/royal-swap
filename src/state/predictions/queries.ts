import {
  roundBaseFields as roundBaseFieldsBNB,
  betBaseFields as betBaseFieldsBNB,
  userBaseFields as userBaseFieldsBNB,
} from './bnbQueries'
import {
  roundBaseFields as roundBaseFieldsCAKE,
  betBaseFields as betBaseFieldsCAKE,
  userBaseFields as userBaseFieldsCAKE,
} from './cakeQueries'

export const getRoundBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'ROYAL' ? roundBaseFieldsCAKE : roundBaseFieldsBNB

export const getBetBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'ROYAL' ? betBaseFieldsCAKE : betBaseFieldsBNB

export const getUserBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'ROYAL' ? userBaseFieldsCAKE : userBaseFieldsBNB
