import React from 'react'
import './primaryBtn.css'

function PrimaryBtn({handleClick, content, theme}) {

  return (
    <button onClick={handleClick} className={theme+' p-btn'}>
        {content}
    </button>
  )
}

export default PrimaryBtn