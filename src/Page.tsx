import { useEffect, useState } from 'react'
import FoodList from './components/FoodList'
import SideBar from './components/SideBar'
import Wrapper from './style'
import { fetchFoodList } from './api'
import { Food } from './types'
import { SORT_TYPE } from './enum'
import { detectMobileDevice } from './utils'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Page = () => {
  const [selectedCategoryList, setSelectedCategoryList] = useState<string[]>([])
  const [foodList, setFoodList] = useState<Food[]>([])
  const [showFoodList, setShowFoodList] = useState<Food[]>([])
  const [page, setPage] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const [isFold, setisFold] = useState(false)
  const [isInfiniteScroll, setIsInfiniteScroll] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const getFoodList = async () => {
    setIsInfiniteScroll(false)
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

  const changeSearchParam = (categoryList: string[]) => {
    if (searchParams.get('filter') && categoryList.length > 0) {
      setSearchParams({
        category: categoryList.join(','),
        filter: searchParams.get('filter') || '',
      })
    } else if (categoryList.length === 0) {
      searchParams.delete('category')
      navigate(searchParams.toString() ? `?${searchParams.toString()}` : '', {
        replace: true,
      })
    } else {
      setSearchParams({ category: categoryList.join(',') })
    }
  }

  const clickCategory = (category: string) => {
    if (selectedCategoryList.includes(category)) {
      const newCategoryList = selectedCategoryList.filter(
        selectedCategory => selectedCategory !== category,
      )
      changeSearchParam(newCategoryList)
      setSelectedCategoryList(newCategoryList)
    } else {
      const newSelectedCategoryList = [...selectedCategoryList, category]
      changeSearchParam(newSelectedCategoryList)
      setSelectedCategoryList(newSelectedCategoryList)
    }
  }

  const sortFoodList = (type: SORT_TYPE) => {
    if (searchParams.get('category')) {
      setSearchParams({
        category: searchParams.get('category') || '',
        filter: type,
      })
    } else {
      setSearchParams({ filter: type })
    }
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
    const category = searchParams.get('category')
    if (category) {
      setSelectedCategoryList(category.split(','))
    }
    const filter = searchParams.get('filter')
    if (filter) {
      sortFoodList(filter as SORT_TYPE)
    }
  }, [])

  useEffect(() => {
    getFoodList()
  }, [selectedCategoryList])

  useEffect(() => {
    checkIsMobile()
  }, [window.navigator.userAgent])

  useEffect(() => {
    setShowFoodList(foodList.slice(0, page * 20))
  }, [page])

  useEffect(() => {
    if (foodList.length > 20) setIsInfiniteScroll(true)
  }, [foodList])

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
        showFoodList={showFoodList}
        foodList={foodList}
        sortFoodList={sortFoodList}
        isMobile={isMobile}
        isFold={isFold}
        setPage={setPage}
        isInfiniteScroll={isInfiniteScroll}
        setIsInfiniteScroll={setIsInfiniteScroll}
      />
    </Wrapper>
  )
}

export default Page
