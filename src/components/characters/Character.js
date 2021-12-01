import React from 'react'

const Character = (item) => {
    console.log(item);
    
    return(
        <>
            <h1>{item.name}</h1>
        </>
    )

}

export default Character