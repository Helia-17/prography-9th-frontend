import styled from 'styled-components'

const Wrapper = styled.div`
  width: 16rem;
  border-right: 1px solid #cccccc;
  flex-shrink: 0;

  .header {
    margin: 1rem 1.5rem 4.4rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`

export default Wrapper
