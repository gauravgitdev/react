import React from 'react'
import CompoC from './compoC'
const CompoB = ({user}) => {

    return (
        <div>
            <h1>compoB</h1>
            <CompoC user={user}/>
            </div>
       
    )
}

export default CompoB