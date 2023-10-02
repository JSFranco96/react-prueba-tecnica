import { useState, useEffect } from 'react'
import { getNewFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getNewFact().then(newFact => setFact(newFact))
  }

  // Obtener el custom fact
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
