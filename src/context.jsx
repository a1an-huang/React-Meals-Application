import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
const AppContext = React.createContext()

const allMealsURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=a"
// const randomMealsURL = "https://www.themealdb.com/api/json/v1/1/random.php"

const AppProvider = ({ children }) => {

    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchMeals = async (url) => {
        setLoading(true)
        try {
            const { data } = await axios.get(url)
            if (data.meals) {
                setMeals(data.meals)
            } else {
                setMeals([])
            }



        } catch (err) {
            console.log(err.response)
        }
        setLoading(false)

    }


    useEffect(() => {
        fetchMeals(allMealsURL)
    }, [])

    return (
        <AppContext.Provider value={{ loading, meals }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }