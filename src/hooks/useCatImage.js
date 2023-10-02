import { useEffect, useState } from 'react'
import { CATS_ENDPOINT, CAT_IMAGE_PREFIX } from '../utils/constants'

export function useCatImage ({ fact }) {
  const [firstWord, setFirstWord] = useState()
  const [catImage, setCatImage] = useState()

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
        return res.json()
      })
      .then(data => setCatImage(data.url))
  }, [firstWord])

  return { catImage: `${CAT_IMAGE_PREFIX}${catImage}` }
}
