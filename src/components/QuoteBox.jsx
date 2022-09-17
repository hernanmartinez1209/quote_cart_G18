import React from 'react'
import QuoteBnt from './QuoteBnt'


const QuoteBox = ({quoteRandom ,colorsRandom , getAll}) => {
  
    const colorsLetters={
        color: colorsRandom
    }
    return (
    <div className='cart__Principal' style={colorsLetters}>
        <article>
        <h1 className='h25'>“</h1>
        <h2 className='h2'>{quoteRandom.author}</h2>
        <p className='p'>{quoteRandom.quote}</p>
       <QuoteBnt 
       getAll={getAll}
       colorsRandom = {colorsRandom}
       />
        </article>
    </div>
  )
}

export default QuoteBox