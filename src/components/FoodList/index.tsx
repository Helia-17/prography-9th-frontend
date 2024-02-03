import { useEffect, useState } from 'react'
import { Food } from '../../types'
import Header from '../Header'
import FoodItem from './FoodItem'
import Wrapper from './style'
import { SORT_TYPE, VIEW_TYPE } from '../../enum'

const FoodList = ({
  foodList,
  sortFoodList,
  isMobile,
  isFold,
}: {
  foodList: Food[]
  sortFoodList: (type: SORT_TYPE) => void
  isMobile: boolean
  isFold: boolean
}) => {
  const [view, setView] = useState<VIEW_TYPE>(VIEW_TYPE.GRID)

  useEffect(() => {
    if (isMobile) {
      setView(VIEW_TYPE.LIST)
    }
  }, [isMobile])

  return (
    <Wrapper view={view} isFold={isFold}>
      <Header
        sortFoodList={sortFoodList}
        view={view}
        setView={setView}
        isMobile={isMobile}
      />
      <div className="food-list">
        {foodList.map(food => (
          <FoodItem food={food} />
        ))}
      </div>
    </Wrapper>
  )
}

export default FoodList
