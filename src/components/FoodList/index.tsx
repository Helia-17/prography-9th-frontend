import { Food } from '../../types'
import FoodItem from './FoodItem'

const FoodList = ({ foodList }: { foodList: Food[] }) => {
  return (
    <>
      {foodList.map(food => (
        <FoodItem food={food} />
      ))}
    </>
  )
}

export default FoodList
