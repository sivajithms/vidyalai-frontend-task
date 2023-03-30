import React from 'react'
import "./PenAndEraser.css"

function PenAndEraser({color}) {
  return (
    <div>
      <div className='round'
      style={{backgroundColor: {color}}}>

      </div>
      
    </div>
  )
}

export default PenAndEraser
