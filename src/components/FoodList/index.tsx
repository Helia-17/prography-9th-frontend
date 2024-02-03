import { Food } from '../../types'
import FoodItem from './FoodItem'
import Wrapper from './style'

const FoodList = ({ foodList }: { foodList: Food[] }) => {
  return (
    <Wrapper>
      {foodList.map(food => (
        <FoodItem food={food} />
      ))}
    </Wrapper>
  )
}

export default FoodList
