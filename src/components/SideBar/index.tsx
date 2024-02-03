import Wrapper from './style'

import { useEffect, useState } from 'react'
import { fetchCategoryList } from '../../api'
import CategoryList from '../CategoryList'

const SideBar = ({
  clickCategory,
  selectedCategoryList,
}: {
  clickCategory: (category: string) => void
  selectedCategoryList: string[]
}) => {
  const [categoryList, setCategoryList] = useState([])
  const getCategoryList = async () => {
    const categories = await fetchCategoryList()
    setCategoryList(categories)
  }
  useEffect(() => {
    getCategoryList()
  }, [])

  return (
    <Wrapper>
      <img className="logo" src="/prography_logo.png" />
      <CategoryList
        categoryList={categoryList}
        clickCategory={clickCategory}
        selectedCategoryList={selectedCategoryList}
      />
    </Wrapper>
  )
}

export default SideBar
