import { Category } from '../../types'
import Wrapper from './style'

const CategoryItem = ({
  category,
  clickCategory,
}: {
  category: Category
  clickCategory: (category: string) => void
}) => {
  const onClick = () => {
    clickCategory(category.strCategory)
  }
  return (
    <div>
      <button onClick={onClick}>{category.strCategory}</button>
    </div>
  )
}

const CategoryList = ({
  categoryList,
  clickCategory,
}: {
  categoryList: Category[]
  clickCategory: (category: string) => void
}) => {
  return (
    <Wrapper>
      {categoryList.map(category => (
        <CategoryItem category={category} clickCategory={clickCategory} />
      ))}
    </Wrapper>
  )
}

export default CategoryList
