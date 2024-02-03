import { Category } from '../../types'

const CategoryItem = ({
  category,
  setCategory,
}: {
  category: Category
  setCategory: React.Dispatch<React.SetStateAction<string>>
}) => {
  const onClick = () => {
    setCategory(category.strCategory)
  }
  return <button onClick={onClick}>{category.strCategory}</button>
}
const CategoryList = ({
  categoryList,
  setCategory,
}: {
  categoryList: Category[]
  setCategory: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <div>
      {categoryList.map(category => (
        <CategoryItem category={category} setCategory={setCategory} />
      ))}
    </div>
  )
}

export default CategoryList
