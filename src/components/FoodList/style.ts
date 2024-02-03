import styled from 'styled-components'
import { VIEW_TYPE } from '../../enum'

const Wrapper = styled.div<{ view: VIEW_TYPE }>`
  width: 100%;

  .food-list {
    display: flex;
    flex-wrap: wrap;
  }

  ${({ view }) => {
    if (view === VIEW_TYPE.GRID) {
      return `
        .food-item {
          flex: 0 0 25%;
          max-width: 25%;
        }
      `
    } else {
      return `
        .food-item {
          flex: 0 0 50%;
          max-width: 50%;
        }
      `
    }
  }}
`

export default Wrapper
