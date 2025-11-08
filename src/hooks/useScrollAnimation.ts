import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Prevent flickering by checking if element is already in view
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      const isInView = rect.top < window.innerHeight && rect.bottom > 0
      if (isInView) {
        setIsVisible(true)
        return
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Use requestAnimationFrame to prevent layout thrashing
        requestAnimationFrame(() => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (triggerOnce && ref.current) {
              observer.unobserve(ref.current)
            }
          } else if (!triggerOnce) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>()

  useEffect(() => {
    const handleScroll = () => {
      // Cancel previous frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      
      // Use requestAnimationFrame for smooth updates
      rafRef.current = requestAnimationFrame(() => {
        if (ref.current) {
          const scrolled = window.pageYOffset
          const rate = scrolled * -speed
          setOffset(rate)
        }
      })
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', throttledScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [speed])

  return { ref, offset }
}

export const useStaggeredAnimation = (itemCount: number, delay: number = 100) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false))
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the animation of items
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev]
                newState[i] = true
                return newState
              })
            }, i * delay)
          }
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [itemCount, delay])

  return { ref, visibleItems }
}
