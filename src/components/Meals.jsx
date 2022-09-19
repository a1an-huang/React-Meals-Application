import { useGlobalContext } from '../context'
import { BsHandThumbsUp } from 'react-icons/bs'
const Meals = () => {
    const { meals, loading } = useGlobalContext()

    if (loading) {
        return (
            <section className="section">
                <h4>Loading ...</h4>
            </section>
        )
    }
    if (meals.length < 1) {
        return (
            <section className="section">
                <h4>No meals matched your search term. Please try again.</h4>
            </section>
        )
    }

    return (
        <section className="section-center">
            {
                meals.map((meal) => {
                    console.log(meal)
                    return (
                        <article key={meal.idMeal} className="single-meal">
                            <img src={meal.strMealThumb} className="img"></img>
                            <footer>
                                <h5>{meal.strMeal}</h5>
                                <button className="like-btn"><BsHandThumbsUp />
                                </button>
                            </footer>
                        </article>
                    )
                })
            }
        </section >
    )
}
export default Meals