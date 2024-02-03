import { useEffect, useState } from 'react'
import FoodList from './components/FoodList'
import SideBar from './components/SideBar'
import Wrapper from './style'
import { fetchFoodList } from './api'
import { Food } from './types'

function App() {
  const [selectedCategoryList, setSelectedCategoryList] = useState<string[]>([])
  const [foodList, setFoodList] = useState<Food[]>([])
  const [showFoodList, setShowFoodList] = useState<Food[]>([])
  const [page, setPage] = useState(1)

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
    console.log(selectedCategoryList)
  }

  useEffect(() => {
    getFoodList()
  }, [selectedCategoryList])
  return (
    <Wrapper>
      <SideBar
        selectedCategoryList={selectedCategoryList}
        clickCategory={clickCategory}
        foodListCount={[showFoodList.length, foodList.length]}
      />
      <FoodList foodList={showFoodList} />
    </Wrapper>
  )
}

export default App
