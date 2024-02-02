import { Category } from '../../types'

const CategoryItem = ({ category }: { category: Category }) => {
  return <div>{category.strCategory}</div>
}
const CategoryList = ({ categoryList }: { categoryList: Category[] }) => {
  return (
    <div>
      {categoryList.map(category => (
        <CategoryItem category={category} />
      ))}
    </div>
  )
}

export default CategoryList
