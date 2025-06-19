import React from 'react'
import CompoB from './compoB'
const CompoA = () => {
const User ={
    name:'gaurav',
    email:'gaurav@gmail.com'
}
    return (
        <div>
            <h1>CompoA</h1>
            <CompoB user={User}/>
        </div>

    )
}

export default CompoA;