import { useLayoutEffect, useRef, useState } from 'react'
import { Food } from '../../../types'
import Wrapper from './style'

const FoodItem = ({ food }: { food: Food }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const observer = useRef<IntersectionObserver>()
  const imgRef = useRef<HTMLImageElement>(null)

  useLayoutEffect(() => {
    observer.current = new IntersectionObserver(intersectionObserver)
    imgRef.current && observer.current.observe(imgRef.current)
  }, [])

  const intersectionObserver = (
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver,
  ) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target)
        setIsVisible(true)
      }
    })
  }
  return (
    <Wrapper className="food-item">
      <img
        className="food-image"
        loading="lazy"
        src={isVisible ? food.strMealThumb : undefined}
        ref={imgRef}
        alt={food.strMeal}
      />
      <p className="food-name">{food.strMeal}</p>
    </Wrapper>
  )
}

export default FoodItem
