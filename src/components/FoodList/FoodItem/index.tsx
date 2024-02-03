import { Food } from '../../../types'

const FoodItem = ({ food }: { food: Food }) => {
  return (
    <div>
      <img src={food.strMealThumb} alt={food.strMeal} />
      <p>{food.strMeal}</p>
    </div>
  )
}

export default FoodItem
