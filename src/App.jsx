import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, refreshFact } = useCatFact()
  // Custom hook
  const { catImage } = useCatImage({ fact })

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={refreshFact}>Get new fact ↺</button>
      {fact && <p>{fact}</p>}
      {catImage && <img src={catImage} alt={`Image extracted using the first word of the fact: ${fact}`} />}
    </main>
  )
}
