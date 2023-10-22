import React from 'react'


const Phrase = ({phraseRamdom}) => {

  console.log(phraseRamdom)

  return (

    <p className='app__p'>{phraseRamdom.phrase}</p>

  )
}

export default Phrase
