import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .btn-sort {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #cccccc;
    &:first-of-type {
      margin-left: 0.3rem;
    }
    &:hover {
      color: #ffc0cb;
    }
    &.active {
      color: #ff6783;
    }
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
