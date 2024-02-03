import { Food } from '../../../types'
import Wrapper from './style'

const FoodItem = ({ food }: { food: Food }) => {
  return (
    <Wrapper className="food-item">
      <img className="food-image" src={food.strMealThumb} alt={food.strMeal} />
      <p className="food-name">{food.strMeal}</p>
    </Wrapper>
  )
}

export default FoodItem
