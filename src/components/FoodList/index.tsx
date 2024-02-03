import { useState } from 'react'
import { Food } from '../../types'
import Header from '../Header'
import FoodItem from './FoodItem'
import Wrapper from './style'
import { SORT_TYPE, VIEW_TYPE } from '../../enum'

const FoodList = ({
  foodList,
  sortFoodList,
}: {
  foodList: Food[]
  sortFoodList: (type: SORT_TYPE) => void
}) => {
  const [view, setView] = useState<VIEW_TYPE>(VIEW_TYPE.GRID)

  return (
    <Wrapper view={view}>
      <Header sortFoodList={sortFoodList} view={view} setView={setView} />
      <div className="food-list">
        {foodList.map(food => (
          <FoodItem food={food} />
        ))}
      </div>
    </Wrapper>
  )
}

export default FoodList
