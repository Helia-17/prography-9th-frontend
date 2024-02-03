import { useEffect, useState } from 'react'
import FoodList from './components/FoodList'
import SideBar from './components/SideBar'
import Wrapper from './style'
import { fetchFoodList } from './api'

function App() {
  const [category, setCategory] = useState('')
  const [foodList, setFoodList] = useState([])
  const getFoodList = async (category: string) => {
    const foods = await fetchFoodList(category)
    setFoodList(foods)
  }
  useEffect(() => {
    if (category) {
      getFoodList(category)
    }
  }, [category])
  return (
    <Wrapper>
      <SideBar setCategory={setCategory} />
      <FoodList foodList={foodList} />
    </Wrapper>
  )
}

export default App
