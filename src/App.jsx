import { useState } from 'react'
import './App.css'
import getRandomPhrase from './services/getRandomPhrases'
import phrase from "./utils/phrases.json"
import background from "./utils/background.json"
import Phrase from './components/Phrase'
import ButtonRamdon from './components/ButtonRamdon'

function App() {

    const [phraseRamdom, setPhraseRamdom] = useState(getRandomPhrase(phrase))
    const [backgroundRamdom, setBackgroundRamdom] = useState(getRandomPhrase(background))

    const cardStyle = {
      backgroundImage: `url("../${backgroundRamdom}.png")`
    }

  return (

    <div className='app' style={cardStyle}>
      <h1 className='app__h1'>Galletas de la <span>fortuna</span></h1>
      <article className='app-card'>
        <Phrase
          phraseRamdom={phraseRamdom}
        />
      </article>
      <div className='app__btn'>
      <ButtonRamdon
        setPhraseRamdom={setPhraseRamdom}
        setBackgroundRamdom={setBackgroundRamdom}
      />
      </div>
    </div>
  )
}

export default App
