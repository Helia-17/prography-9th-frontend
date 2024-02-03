import { SORT_TYPE } from '../../enum'
import Wrapper from './style'

const Header = ({
  filterFoodList,
}: {
  filterFoodList: (type: SORT_TYPE) => void
}) => {
  return (
    <Wrapper>
      <div>
        <p>Order by</p>
        <button onClick={() => filterFoodList(SORT_TYPE.NEW)}>latest</button>
        <button onClick={() => filterFoodList(SORT_TYPE.ASC)}>ascending</button>
        <button onClick={() => filterFoodList(SORT_TYPE.DESC)}>
          descending
        </button>
      </div>
    </Wrapper>
  )
}

export default Header
