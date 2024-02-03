import Wrapper from './style'

import { useEffect, useState } from 'react'
import { fetchCategoryList } from '../../api'
import CategoryList from '../CategoryList'

const SideBar = ({
  clickCategory,
  selectedCategoryList,
  foodListCount,
}: {
  clickCategory: (category: string) => void
  selectedCategoryList: string[]
  foodListCount: number[]
}) => {
  const [categoryList, setCategoryList] = useState([])
  const [showFoodListCount, allFoodListCount] = foodListCount

  const getCategoryList = async () => {
    const categories = await fetchCategoryList()
    setCategoryList(categories)
  }
  useEffect(() => {
    getCategoryList()
  }, [])

  return (
    <Wrapper>
      <div className="header">
        <img className="logo" src="/prography_logo.png" />
        <p className="food-list-count">
          <span>{showFoodListCount}</span> / {allFoodListCount || 20}
        </p>
      </div>
      <CategoryList
        categoryList={categoryList}
        clickCategory={clickCategory}
        selectedCategoryList={selectedCategoryList}
      />
    </Wrapper>
  )
}

export default SideBar
