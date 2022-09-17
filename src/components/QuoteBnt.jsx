import React from 'react'

const QuoteBnt = ({getAll,colorsRandom}) => {
   const colorsbg = {
        background: colorsRandom
    }
  return (
    <div>
    <button className='btn' onClick={getAll} style={colorsbg}>&gt;</button>
    </div>
  )
}

export default QuoteBnt