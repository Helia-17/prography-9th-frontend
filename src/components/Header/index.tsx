import { SORT_TYPE, VIEW_TYPE } from '../../enum'
import Wrapper from './style'
import Grid from '../../assets/grid.svg?react'
import Column from '../../assets/column.svg?react'
import { useState } from 'react'

const Header = ({
  sortFoodList,
  view,
  setView,
  isMobile,
}: {
  sortFoodList: (type: SORT_TYPE) => void
  view: VIEW_TYPE
  setView: (type: VIEW_TYPE) => void
  isMobile: boolean
}) => {
  const [sortType, setSortType] = useState<SORT_TYPE>(SORT_TYPE.ASC)

  const onClick = (type: SORT_TYPE) => {
    setSortType(type)
    sortFoodList(type)
  }

  return (
    <Wrapper isMobile={isMobile}>
      <div className="sort-container">
        <span>Order by</span>
        <div className="sort-btn-container">
          <button
            className={`btn-sort ${sortType === SORT_TYPE.NEW ? 'active' : ''}`}
            onClick={() => onClick(SORT_TYPE.NEW)}
          >
            latest
          </button>
          <button
            className={`btn-sort ${sortType === SORT_TYPE.ASC ? 'active' : ''}`}
            onClick={() => onClick(SORT_TYPE.ASC)}
          >
            ascending
          </button>
          <button
            className={`btn-sort ${
              sortType === SORT_TYPE.DESC ? 'active' : ''
            }`}
            onClick={() => onClick(SORT_TYPE.DESC)}
          >
            descending
          </button>
        </div>
      </div>
      <div className="view-container">
        <button
          className={`btn-view ${view === VIEW_TYPE.GRID ? 'active' : ''}`}
          onClick={() => setView(VIEW_TYPE.GRID)}
        >
          <Grid />
        </button>
        <button
          className={`btn-view ${view === VIEW_TYPE.COLUMN ? 'active' : ''}`}
          onClick={() => setView(VIEW_TYPE.COLUMN)}
        >
          <Column />
        </button>
      </div>
    </Wrapper>
  )
}

export default Header
