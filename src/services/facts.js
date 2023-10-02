import { FACTS_ENDPOINT } from '../utils/constants'

export const getNewFact = async () => {
  const res = await fetch(FACTS_ENDPOINT)
  const data = await res.json()
  return data.fact
}
