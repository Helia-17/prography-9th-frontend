import Wrapper from './style'

import { useEffect, useState } from 'react'
import { fetchCategoryList } from '../../api'
import CategoryList from '../CategoryList'

const SideBar = ({
  clickCategory,
}: {
  clickCategory: (category: string) => void
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
      <CategoryList categoryList={categoryList} clickCategory={clickCategory} />
    </Wrapper>
  )
}

export default SideBar
