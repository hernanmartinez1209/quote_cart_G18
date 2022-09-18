
import { useState } from 'react'
import './App.css'
import colors from './utils/colors'
import quote from './json/quote.json'
import QuoteBox from './components/QuoteBox'
import QuoteBnt from './components/QuoteBnt'

function App() {
  const getIndexRandom = array => Math.floor(Math.random() * array.length)
  const oneQuote = quote[getIndexRandom(quote)]
  const oneColor = colors[getIndexRandom(colors)]

  const [quoteRandom, setQuoteRandom] = useState(oneQuote)
  const [colorsRandom, setColorsRandom] = useState(oneColor)
  const getAll = () => {
    setQuoteRandom(quote[getIndexRandom(quote)])
    setColorsRandom(colors[getIndexRandom(colors)])
  }
  const bg_cartPrincipal = {
    background: colorsRandom
  }

  return (
    <div className="App" style={bg_cartPrincipal}>
      <QuoteBox
        quoteRandom={quoteRandom}
        colorsRandom={colorsRandom}
        getAll={getAll}
      />

    </div>
  )
}

export default App
