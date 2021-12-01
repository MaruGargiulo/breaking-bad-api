import React from 'react'
import Character from './Character'

const CharactersGrid = ({ isLoading, items }) => {

    return(
        isLoading ? <h1>Loading...</h1>
        :
        <section className="cards">
            { items.map(item => <Character key={item.char_id} item />) }
        </section>
    )

}

export default CharactersGrid