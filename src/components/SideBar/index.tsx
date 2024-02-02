import Wrapper from './style'

import { useState } from 'react'
import { fetchCategoryList } from '../../api'
import CategoryList from '../CategoryList'

const SideBar = () => {
  const [categoryList, setCategoryList] = useState([])
  const getCategoryList = async () => {
    const categories = await fetchCategoryList()
    setCategoryList(categories)
  }
  getCategoryList()

  return (
    <Wrapper>
      <img className="logo" src="/prography_logo.png" />
      <CategoryList categoryList={categoryList} />
    </Wrapper>
  )
}

export default SideBar
