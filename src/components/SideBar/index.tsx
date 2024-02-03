import Wrapper from './style'

import { useEffect, useState } from 'react'
import { fetchCategoryList } from '../../api'
import CategoryList from '../CategoryList'

const SideBar = ({
  clickCategory,
  selectedCategoryList,
  foodListCount,
  isMobile,
  isFold,
  setisFold,
}: {
  clickCategory: (category: string) => void
  selectedCategoryList: string[]
  foodListCount: number[]
  isMobile: boolean
  isFold: boolean
  setisFold: (isFold: boolean) => void
}) => {
  const [categoryList, setCategoryList] = useState([])
  const [showFoodListCount, allFoodListCount] = foodListCount

  const getCategoryList = async () => {
    const categories = await fetchCategoryList()
    setCategoryList(categories)
  }

  const onClickFold = () => {
    setisFold(!isFold)
  }

  useEffect(() => {
    getCategoryList()
  }, [])

  useEffect(() => {
    if (isMobile) {
      setisFold(true)
    }
  }, [isMobile])

  return (
    <Wrapper isMobile={isMobile} isFold={isFold}>
      <div className="header">
        <img className="logo" src="/prography_logo.png" />
        <p className="food-list-count">
          <span>{showFoodListCount}</span> / {allFoodListCount || 20}
        </p>
      </div>
      <div className="container">
        <CategoryList
          categoryList={categoryList}
          clickCategory={clickCategory}
          selectedCategoryList={selectedCategoryList}
        />
        <button className="btn-fold" onClick={onClickFold}>
          {isFold ? '>>' : '<<'}
        </button>
      </div>
    </Wrapper>
  )
}

export default SideBar
