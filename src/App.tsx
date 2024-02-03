import { useEffect, useState } from 'react'
import FoodList from './components/FoodList'
import SideBar from './components/SideBar'
import Wrapper from './style'
import { fetchFoodList } from './api'
import { Food } from './types'
import { SORT_TYPE } from './enum'
import { detectMobileDevice } from './utils'

function App() {
  const [selectedCategoryList, setSelectedCategoryList] = useState<string[]>([])
  const [foodList, setFoodList] = useState<Food[]>([])
  const [showFoodList, setShowFoodList] = useState<Food[]>([])
  const [page, setPage] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const [isFold, setisFold] = useState(false)

  const getFoodList = async () => {
    setPage(1)
    setFoodList([])
    setShowFoodList([])
    if (selectedCategoryList.length === 0) return
    const newFoodList = []
    for (const category of selectedCategoryList) {
      const foods = await fetchFoodList(category)
      newFoodList.push(...foods)
    }
    setFoodList(newFoodList)
    setShowFoodList(newFoodList.slice(0, page * 20))
  }

  const clickCategory = (category: string) => {
    if (selectedCategoryList.includes(category)) {
      const newCategoryList = selectedCategoryList.filter(
        selectedCategory => selectedCategory !== category,
      )
      setSelectedCategoryList(newCategoryList)
    } else {
      setSelectedCategoryList([...selectedCategoryList, category])
    }
  }

  const sortFoodList = (type: SORT_TYPE) => {
    const newFoodList = foodList.sort((a, b) => {
      switch (type) {
        case SORT_TYPE.NEW:
          return a.idMeal.localeCompare(b.idMeal)
        case SORT_TYPE.ASC:
          return a.strMeal.localeCompare(b.strMeal)
        case SORT_TYPE.DESC:
          return b.strMeal.localeCompare(a.strMeal)
        default:
          return a.idMeal.localeCompare(b.idMeal)
      }
    })
    setFoodList(newFoodList)
    setShowFoodList(newFoodList.slice(0, page * 20))
  }

  const checkIsMobile = () => {
    const isMobile = detectMobileDevice(window.navigator.userAgent)
    setIsMobile(isMobile)
  }

  useEffect(() => {
    getFoodList()
  }, [selectedCategoryList])

  useEffect(() => {
    checkIsMobile()
  }, [window.navigator.userAgent])

  return (
    <Wrapper>
      <SideBar
        selectedCategoryList={selectedCategoryList}
        clickCategory={clickCategory}
        foodListCount={[showFoodList.length, foodList.length]}
        isMobile={isMobile}
        isFold={isFold}
        setisFold={setisFold}
      />
      <FoodList
        foodList={showFoodList}
        sortFoodList={sortFoodList}
        isMobile={isMobile}
        isFold={isFold}
      />
    </Wrapper>
  )
}

export default App
