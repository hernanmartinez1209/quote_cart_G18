import React from 'react'
import QuoteBnt from './QuoteBnt'


const QuoteBox = ({ quoteRandom, colorsRandom, getAll }) => {

    const colorsLetters = {
        color: colorsRandom
    }
    return (
        <div className='cart__Principal' style={colorsLetters}>
            <article>
                <h1 className='comilla__cartP'>“</h1>
                <h2 className='h2__cartP'>{quoteRandom.author}</h2>
                <p className='p__cartP'>{quoteRandom.quote}</p>
                <QuoteBnt
                    getAll={getAll}
                    colorsRandom={colorsRandom}
                />
            </article>
        </div>
    )
}

export default QuoteBox