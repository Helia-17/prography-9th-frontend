import { Category } from '../../types'
import { Wrapper, ItemWrapper } from './style'

const CategoryItem = ({
  category,
  clickCategory,
  active = false,
}: {
  category: Category
  clickCategory: (category: string) => void
  active?: boolean
}) => {
  const onClick = () => {
    clickCategory(category.strCategory)
  }

  return (
    <ItemWrapper $active={active}>
      <button onClick={onClick}>{category.strCategory}</button>
      <span className="category-circle"></span>
    </ItemWrapper>
  )
}

const CategoryList = ({
  categoryList,
  clickCategory,
  selectedCategoryList,
}: {
  categoryList: Category[]
  clickCategory: (category: string) => void
  selectedCategoryList: string[]
}) => {
  return (
    <Wrapper>
      {categoryList.map(category => {
        if (selectedCategoryList.includes(category.strCategory)) {
          return (
            <CategoryItem
              category={category}
              clickCategory={clickCategory}
              active={true}
              key={category.idCategory}
            />
          )
        } else
          return (
            <CategoryItem
              category={category}
              clickCategory={clickCategory}
              key={category.idCategory}
            />
          )
      })}
    </Wrapper>
  )
}

export default CategoryList
