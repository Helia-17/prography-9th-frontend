import Wrapper from './style'

import { useEffect, useState } from 'react'
import { fetchCategoryList } from '../../api'
import CategoryList from '../CategoryList'

const SideBar = ({
  setCategory,
}: {
  setCategory: React.Dispatch<React.SetStateAction<string>>
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
      <CategoryList categoryList={categoryList} setCategory={setCategory} />
    </Wrapper>
  )
}

export default SideBar
