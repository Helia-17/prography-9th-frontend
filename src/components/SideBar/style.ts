import styled from 'styled-components'

const Wrapper = styled.div<{ $isMobile: boolean; isFold: boolean }>`
  width: 16rem;
  border-right: 1px solid #cccccc;
  flex-shrink: 0;
  overflow: hidden;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ isFold }) => {
    if (isFold) {
      return `transform: translateX(-14.5rem);`
    }
  }}

  .header {
    margin: 1rem 1.5rem 4.4rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ $isMobile }) => {
      if ($isMobile) {
        return `display: none;`
      }
    }}
  }

  .logo {
    width: 8rem;
  }

  .food-list-count {
    font-size: 0.8rem;
    color: #2c2c2c;
    span {
      color: #ff2557;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
  }
  .btn-fold {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 1rem;
    font-size: 1.2rem;
    color: #ff2557;
  }
`

export default Wrapper
