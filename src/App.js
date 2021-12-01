import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharactersGrid from './components/characters/CharactersGrid'

import './App.css'

const App = () => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoding] = useState(true)

    // useEffect(() => {
    //     const fetchItems = async () => {
    //         const result = await axios(`https://www.breakingbadapi.com/api/characters`)
    //         setItems(result.data)
    //         setIsLoding(false)
    //         console.log(result.data)
    //     }
    //     fetchItems()
        
    // }, [])

    useEffect(() => {
        axios(`https://www.breakingbadapi.com/api/characters`)
        .then((result) => {
            setItems(result.data)
            setIsLoding(false)
        })
    })

    return(
        <div className="container">
            <Header />
            <CharactersGrid  isLoading={isLoading} items={items} />
        </div>
    )

}

export default App
