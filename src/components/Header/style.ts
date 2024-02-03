import styled from 'styled-components'

const Wrapper = styled.div<{ isMobile: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .sort-container {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    span {
      margin-right: 0.3rem;
    }
  }
  .sort-btn-container {
    width: 15rem;
  }
  .btn-sort {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #cccccc;
    &:hover {
      color: #ffc0cb;
    }
    &.active {
      color: #ff6783;
    }
  }
  .view-container {
    ${({ isMobile }) => {
      if (isMobile) {
        return `
          display: none;
        `
      } else {
        return `
          display: flex;
          align-items: center;
        `
      }
    }}
  }
  .btn-view {
    position: relative;
    width: 2rem;
    height: 2rem;
    margin-left: 0.4rem;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    svg {
      width: 100%;
      height: 100%;
      path {
        fill: #cccccc;
      }
    }
    &:hover {
      svg {
        path {
          fill: #ffc0cb;
        }
      }
    }
    &.active {
      svg {
        path {
          fill: #ff6783;
        }
      }
    }
  }
`

export default Wrapper
