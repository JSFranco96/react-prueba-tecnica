import { useEffect, useState } from 'react'
import { CATS_ENDPOINT, CAT_IMAGE_PREFIX, FACTS_ENDPOINT } from './utils/constants'
import './App.css'

export function App () {
  const [fact, setFact] = useState()
  const [firstWord, setFirstWord] = useState()
  const [catImage, setCatImage] = useState()
  const [factError, setFactError] = useState()

  // Obtener el custom fact
  useEffect(() => {
    fetch(FACTS_ENDPOINT)
      .then(res => {
        if (!res.ok) {
          throw new Error('Ocurrió un error obteniendo el custom fact')
        }
        return res.json()
      })
      .then(data => setFact(data.fact))
      .catch(error => {
        setFactError(error)
      })
  }, [])

  // Obtener laprimera palabra del custom fact
  useEffect(() => {
    if (!fact) return
    setFirstWord(fact.split(' ')[0])
  }, [fact])

  // Obtener la imagen con la primera palabra del custom fact
  useEffect(() => {
    if (!firstWord) return
    fetch(`${CATS_ENDPOINT}${firstWord}?json=true`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Ocurrió un error obteniendo la imgen')
        }
        return res.json()
      })
      .then(data => setCatImage(data.url))
      .catch(error => {
        setFactError(error)
      })
  }, [firstWord])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {catImage && <img src={`${CAT_IMAGE_PREFIX}${catImage}`} alt={`Image extracted using the first word of the fact: ${fact}`} />}
      {factError && <p>{factError}</p>}
    </main>
  )
}
