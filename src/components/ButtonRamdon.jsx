import getRandomPhrase from "../services/getRandomPhrases"
import Phrase from "../utils/phrases.json"
import background from "../utils/background.json"

const ButtonRamdon = ({setPhraseRamdom, setBackgroundRamdom}) => {


    const handlerPhrase = () => {
        setPhraseRamdom(getRandomPhrase(Phrase))
        setBackgroundRamdom(getRandomPhrase(background))
    }

  return (
    <div>
      <button className="app__btn" onClick={handlerPhrase}>Ver otro</button>
    </div>
  )
}

export default ButtonRamdon
