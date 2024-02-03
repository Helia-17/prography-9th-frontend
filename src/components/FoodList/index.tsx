import { useEffect, useRef, useState } from 'react'
import { Food } from '../../types'
import Header from '../Header'
import FoodItem from './FoodItem'
import Wrapper from './style'
import { SORT_TYPE, VIEW_TYPE } from '../../enum'

const FoodList = ({
  foodList,
  showFoodList,
  sortFoodList,
  isMobile,
  isFold,
  setPage,
  isInfiniteScroll,
  setIsInfiniteScroll,
}: {
  foodList: Food[]
  showFoodList: Food[]
  sortFoodList: (type: SORT_TYPE) => void
  isMobile: boolean
  isFold: boolean
  setPage: React.Dispatch<React.SetStateAction<number>>
  isInfiniteScroll: boolean
  setIsInfiniteScroll: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [view, setView] = useState<VIEW_TYPE>(VIEW_TYPE.GRID)
  const [throttle, setThrottle] = useState(false)
  const [isFirst, setIsFirst] = useState(true)

  const listEnd = useRef<HTMLDivElement | null>(null)

  const handleObserver: IntersectionObserverCallback = entries => {
    const addPage = () => {
      const target = entries[0]
      if (target.isIntersecting && isInfiniteScroll) {
        setPage(prev => prev + 1)
      }
    }
    if (throttle) return
    if (!throttle) {
      setThrottle(true)
      setTimeout(async () => {
        addPage()
        setThrottle(false)
      }, 500)
    }
  }

  const option = {
    root: null,
    rootMargin: '20px',
    threshold: 0,
  }
  const observer = new IntersectionObserver(handleObserver, option)

  useEffect(() => {
    if (!isInfiniteScroll) return
    if (!listEnd.current) return
    if (isFirst) {
      observer.observe(listEnd.current)
      setIsFirst(false)
    }
  }, [isInfiniteScroll])

  useEffect(() => {
    if (
      isInfiniteScroll &&
      foodList.length === showFoodList.length &&
      foodList.length !== 0 &&
      listEnd.current
    ) {
      observer.unobserve(listEnd.current)
      setIsInfiniteScroll(false)
    }
  }, [showFoodList])

  useEffect(() => {
    if (isMobile) {
      setView(VIEW_TYPE.LIST)
    }
  }, [isMobile])

  return (
    <Wrapper $view={view} $isFold={isFold}>
      <Header
        sortFoodList={sortFoodList}
        view={view}
        setView={setView}
        isMobile={isMobile}
      />
      <div className="food-list">
        {showFoodList.map(food => (
          <FoodItem food={food} key={food.idMeal} />
        ))}
      </div>
      <div id="listEnd" ref={listEnd}></div>
    </Wrapper>
  )
}

export default FoodList
