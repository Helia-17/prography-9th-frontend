import styled from 'styled-components'
import { VIEW_TYPE } from '../../enum'

const Wrapper = styled.div<{ view: VIEW_TYPE; $isFold: boolean }>`
  width: 100%;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

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
    } else if (view === VIEW_TYPE.COLUMN) {
      return `
        .food-item {
          flex: 0 0 50%;
          max-width: 50%;
        }
      `
    } else {
      return `
        .food-item {
          flex: 0 0 100%;
          max-width: 100%;
        }
      `
    }
  }}

  ${({ $isFold }) => {
    if ($isFold) {
      return `
        transform: translateX(-14.5rem);
        margin-right: -14.5rem;
      `
    }
  }}
`

export default Wrapper
