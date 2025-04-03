
import { useEffect, useRef, useState } from 'react';

type IntersectionObserverOptions = {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
};

export function useAnimationObserver<T extends HTMLElement>(
  options: IntersectionObserverOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px', delay = 0 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setIsVisible(true);
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          }, delay);
          
          return () => clearTimeout(timer);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, delay]);

  return { ref, isVisible };
}

export function useStaggeredAnimation<T extends HTMLElement>(
  options: IntersectionObserverOptions & { staggerDelay?: number } = {}
) {
  const { threshold = 0.1, rootMargin = '0px', staggerDelay = 100 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            const children = Array.from(ref.current.children);
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('visible');
              }, index * staggerDelay);
            });
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, staggerDelay]);

  return { ref, isVisible };
}
