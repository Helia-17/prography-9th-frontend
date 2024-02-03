import { Category } from '../../types'

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
  return <button onClick={onClick}>{category.strCategory}</button>
}
const CategoryList = ({
  categoryList,
  clickCategory,
}: {
  categoryList: Category[]
  clickCategory: (category: string) => void
}) => {
  return (
    <div>
      {categoryList.map(category => (
        <CategoryItem category={category} clickCategory={clickCategory} />
      ))}
    </div>
  )
}

export default CategoryList
