import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const ItemWrapper = styled.div<{ $active: boolean }>`
  button {
    background-color: transparent;
    color: #000000;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    text-align: start;
    cursor: pointer;
  }
  button:hover {
    + .category-circle {
      background-color: #ff2557;
    }
    text-decoration: underline;
    text-decoration-color: #ff6783;
    text-underline-offset: 0.3rem;
  }

  .category-circle {
    vertical-align: middle;
    display: inline-block;
    border-radius: 50%;
    width: 0.3rem;
    height: 0.3rem;
    margin-bottom: 0.1rem;
    background-color: #cccccc;
    ${props => (props.$active ? 'background-color: #FF2557;' : '')}
  }
`
export { Wrapper, ItemWrapper }
