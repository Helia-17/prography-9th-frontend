import { useEffect, useState } from 'react'
import FoodList from './components/FoodList'
import SideBar from './components/SideBar'
import Wrapper from './style'
import { fetchFoodList } from './api'
import { Food } from './types'

function App() {
  const [selectedCategoryList, setSelectedCategoryList] = useState<string[]>([])
  const [foodList, setFoodList] = useState<Food[]>([])

  const getFoodList = async () => {
    setFoodList([])
    if (selectedCategoryList.length === 0) return
    const newFoodList = []
    for (const category of selectedCategoryList) {
      const foods = await fetchFoodList(category)
      newFoodList.push(...foods)
    }
    setFoodList(newFoodList)
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
      <SideBar clickCategory={clickCategory} />
      <FoodList foodList={foodList} />
    </Wrapper>
  )
}

export default App
