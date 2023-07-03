import React from 'react'
import './secondaryBtn.css'

function SecondaryBtn({ content, handleClick, theme }) {
    return (
        <button className={theme+' s-btn'}>
            <div onClick={handleClick}>
                <p>{content}</p>
            </div>
            <span class="material-symbols-outlined">
                arrow_right_alt
            </span>
        </button>
    )
}

export default SecondaryBtn